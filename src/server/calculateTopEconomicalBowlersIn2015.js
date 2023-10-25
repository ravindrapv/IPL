function calculateTopEconomicalBowlersIn2015(matchesData, deliveriesData) {
  // Filter the matches for the year 2015
  const matches2015 = matchesData.filter((match) =>
    match.season.includes("2015")
  );

  // Extract match IDs for the year 2015
  const matchIds2015 = matches2015.map((match) => match.id);

  // Calculate the economy rate for each bowler
  const bowlerEconomyRate = deliveriesData.reduce((acc, delivery) => {
    if (matchIds2015.includes(delivery.match_id)) {
      const bowler = delivery.bowler;
      const runs = parseInt(delivery.total_runs, 10);
      const extras = parseInt(delivery.extra_runs, 10);

      if (!acc[bowler]) {
        acc[bowler] = { runs: 0, balls: 0 };
      }

      acc[bowler].runs += runs - extras;
      acc[bowler].balls += 1;
    }
    return acc;
  }, {});

  // Calculate the economy rate for each bowler
  for (const bowler in bowlerEconomyRate) {
    const { runs, balls } = bowlerEconomyRate[bowler];
    bowlerEconomyRate[bowler] = (runs / balls) * 6; // Economy rate per over
  }

  // Sort bowlers by economy rate and get the top 10
  const top10BowlerEconomies = Object.entries(bowlerEconomyRate)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 10);

  // Convert to an object with bowler names as keys
  const top10BowlerEconomiesObject = top10BowlerEconomies.reduce(
    (acc, [bowler, economy]) => {
      acc[bowler] = economy;
      return acc;
    },
    {}
  );

  return top10BowlerEconomiesObject;
}

module.exports = { calculateTopEconomicalBowlersIn2015 };
