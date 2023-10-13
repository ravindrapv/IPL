const fs = require("fs");
const csv = require("csvtojson");

function calculateMatchesWonPerTeamPerYear() {
  csv()
    .fromFile(
      "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/matches.csv"
    )
    .then((matchesData) => {
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

      fs.writeFileSync(
        "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/public/output/matches-won-per-team-per-year.json",
        JSON.stringify(matchesWonPerTeamPerYear, null, 2)
      );
      console.log(
        "Matches won per team per year data written to matchesWonPerTeamPerYear.json"
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

calculateMatchesWonPerTeamPerYear();
