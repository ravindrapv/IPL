// function findMostDismissedBowler(deliveriesData, player) {
// 	const dismissalStats = {};
// 	deliveriesData.forEach((delivery) => {
// 		const dismissedPlayer = delivery.player_dismissed;
// 		const bowler = delivery.bowler;

// 		if (dismissedPlayer) {
// 			if (dismissedPlayer === player) {
// 				if (dismissalStats[bowler]) {
// 					dismissalStats[bowler]++;
// 				} else {
// 					dismissalStats[bowler] = 1;
// 				}
// 			}
// 		}
// 	});

// 	let mostDismissedBowler = null;
// 	let maxDismissals = 0;

// 	for (const bowler in dismissalStats) {
// 		if (dismissalStats[bowler] > maxDismissals) {
// 			mostDismissedBowler = bowler;
// 			maxDismissals = dismissalStats[bowler];
// 		}
// 	}

// 	return mostDismissedBowler;
// }

// module.exports = { findMostDismissedBowler };

function findMostDismissedBowler(deliveriesData) {
	const dismissalStats = {};

	deliveriesData.forEach((delivery) => {
		const dismissedPlayer = delivery.player_dismissed;
		const bowler = delivery.bowler;

		if (dismissedPlayer) {
			dismissalStats[dismissedPlayer] = dismissalStats[dismissedPlayer] || {};

			if (dismissalStats[dismissedPlayer][bowler]) {
				dismissalStats[dismissedPlayer][bowler]++;
			} else {
				dismissalStats[dismissedPlayer][bowler] = 1;
			}
		}
	});

	let mostFrequentDismissedBatsman = null;
	let mostFrequentBowler = null;
	let maxDismissals = 0;

	for (const player in dismissalStats) {
		const bowlers = dismissalStats[player];
		for (const bowler in bowlers) {
			if (bowlers[bowler] > maxDismissals) {
				mostFrequentDismissedBatsman = player;
				mostFrequentBowler = bowler;
				maxDismissals = bowlers[bowler];
			}
		}
	}

	return {
		batsman: mostFrequentDismissedBatsman,
		bowler: mostFrequentBowler,
		count: maxDismissals,
	};
}

module.exports = { findMostDismissedBowler };
