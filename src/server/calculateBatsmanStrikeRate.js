function calculateHighestBatsmanStrikeRate(matchesData, deliveriesData) {
	const batsmanStats = {};

	deliveriesData
		.filter((delivery) => !parseInt(delivery.wide_runs, 10))
		.forEach((delivery) => {
			const batsman = delivery.batsman;
			const match = matchesData.find((match) => match.id === delivery.match_id);
			const season = match.season;
			const runs = parseInt(delivery.batsman_runs, 10);

			if (runs) {
				batsmanStats[season] = batsmanStats[season] || {};
				batsmanStats[season][batsman] = batsmanStats[season][batsman] || {
					runs: 0,
					balls: 0,
				};

				batsmanStats[season][batsman].runs += runs;
				batsmanStats[season][batsman].balls += 1;
			}
		});

	const highestStrikeRate = {
		batsman: null,
		strikeRate: 0,
	};

	for (const season in batsmanStats) {
		Object.keys(batsmanStats[season]).forEach((batsman) => {
			const { runs, balls } = batsmanStats[season][batsman];
			const strikeRateValue = (runs / balls) * 100;

			if (strikeRateValue > highestStrikeRate.strikeRate) {
				highestStrikeRate.batsman = batsman;
				highestStrikeRate.strikeRate = strikeRateValue;
			}
		});
	}

	return highestStrikeRate;
}

module.exports = { calculateHighestBatsmanStrikeRate };
