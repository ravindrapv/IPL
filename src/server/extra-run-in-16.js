const fs = require("fs");
const csv = require("csvtojson");

// Function to calculate the extra runs conceded per team in the year 2016
function calculateExtraRunsConcededIn2016() {
  // Load both matches and deliveries data
  Promise.all([
    csv().fromFile(
      "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/matches.csv"
    ),
    csv().fromFile(
      "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/deliveries.csv"
    ),
  ])
    .then(([matches, deliveries]) => {
      // Filter the matches for the year 2016
      const matches2016 = matches.filter((match) =>
        match.season.includes("2016")
      );

      // Extract match IDs for the year 2016
      const matchIds2016 = matches2016.map((match) => match.id);

      // Calculate extra runs conceded per team
      const extraRunsConceded = deliveries.reduce((acc, delivery) => {
        if (matchIds2016.includes(delivery.match_id)) {
          const team = delivery.bowling_team;
          const extraRuns = parseInt(delivery.extra_runs, 10) || 0;

          acc[team] = (acc[team] || 0) + extraRuns;
        }
        return acc;
      }, {});

      // Write the result to a JSON file
      fs.writeFileSync(
        "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/public/output/extra-runs-in-2016.json",
        JSON.stringify(extraRunsConceded, null, 2)
      );
      console.log(
        "Extra runs conceded in 2016 data written to extra-runs-in-2016.json"
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

calculateExtraRunsConcededIn2016();
