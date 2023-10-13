const csv = require("csvtojson");

function calculateMatchesWonPerTeamPerYear(matchesData) {
  const matchesWonPerTeamPerYear = matchesData.reduce((acc, match) => {
    const year = match.season;
    const winner = match.winner;

    if (year && winner) {
      if (!acc[year]) {
        acc[year] = {};
      }

      if (acc[year][winner]) {
        acc[year][winner] += 1;
      } else {
        acc[year][winner] = 1;
      }
    }

    return acc;
  }, {});

  return matchesWonPerTeamPerYear;
}

module.exports = { calculateMatchesWonPerTeamPerYear };
