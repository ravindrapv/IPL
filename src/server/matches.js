const fs = require("fs");
const csv = require("csvtojson");

// Function to calculate the number of matches played per year
function calculateMatchesPerYear() {
  console.log(__dirname);
  csv()
    .fromFile(
      "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/matches.csv"
    )
    .then((matchesData) => {
      // Process the data and calculate matches per year
      const matchesPerYear = {};
      for (const match of matchesData) {
        const year = match.season;
        if (matchesPerYear[year]) {
          matchesPerYear[year] += 1;
        } else {
          matchesPerYear[year] = 1;
        }
      }

      // Write the result to a JSON file
      fs.writeFileSync(
        "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/public/output/matches-per-year.json",
        JSON.stringify(matchesPerYear, null, 2)
      );
      console.log("Matches per year data written to matchesPerYear.json");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

calculateMatchesPerYear();
