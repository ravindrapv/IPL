function findBestEconomyInSuperOvers(deliveriesData) {
  const superOverDeliveries = deliveriesData.filter(
    (delivery) => delivery.is_super_over === "1"
  );

  const economyStats = {};

  superOverDeliveries.forEach((delivery) => {
    const bowler = delivery.bowler;
    const totalRuns = parseInt(delivery.total_runs, 10);
    const extras = parseInt(delivery.extra_runs, 10);
    const runsGiven = totalRuns - extras;
    const over = delivery.over;

    if (!economyStats[bowler]) {
      economyStats[bowler] = { runs: 0, balls: 0 };
    }

    economyStats[bowler].runs += runsGiven;
    economyStats[bowler].balls += 1;
  });

  const bestEconomy = {};

  for (const bowler in economyStats) {
    const runs = economyStats[bowler].runs;
    const balls = economyStats[bowler].balls;
    const economy = (runs / balls) * 6; // 6 balls in an over

    bestEconomy[bowler] = economy;
  }

  const sortedBestEconomy = Object.entries(bestEconomy).sort(
    (a, b) => a[1] - b[1]
  );

  return sortedBestEconomy[0];
}

module.exports = { findBestEconomyInSuperOvers };
