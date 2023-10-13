const {
  findTeamsTossAndMatchWins,
} = require("../src/server/findTeamToseMatchWins");
const csv = require("csvtojson");

test("Finds teams that won the toss and the match for each season correctly", async () => {
  const matchesData = await csv().fromFile(
    "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/matches.csv"
  );

  const result = findTeamsTossAndMatchWins(matchesData);

  const expectedOutput = {
    "Royal Challengers Bangalore": {
      tossWins: 69,
      matchWins: 35,
    },
    "Rising Pune Supergiant": {
      tossWins: 6,
      matchWins: 5,
    },
    "Kolkata Knight Riders": {
      tossWins: 78,
      matchWins: 44,
    },
    "Kings XI Punjab": {
      tossWins: 68,
      matchWins: 28,
    },
    "Sunrisers Hyderabad": {
      tossWins: 35,
      matchWins: 17,
    },
    "Mumbai Indians": {
      tossWins: 85,
      matchWins: 48,
    },
    "Gujarat Lions": {
      tossWins: 15,
      matchWins: 10,
    },
    "Delhi Daredevils": {
      tossWins: 71,
      matchWins: 33,
    },
    "Chennai Super Kings": {
      tossWins: 66,
      matchWins: 42,
    },
    "Rajasthan Royals": {
      tossWins: 62,
      matchWins: 34,
    },
    "Deccan Chargers": {
      tossWins: 43,
      matchWins: 19,
    },
    "Kochi Tuskers Kerala": {
      tossWins: 8,
      matchWins: 4,
    },
    "Pune Warriors": {
      tossWins: 20,
      matchWins: 3,
    },
    "Rising Pune Supergiants": {
      tossWins: 7,
      matchWins: 3,
    },
  };
  // Check if the calculated result matches the expected result
  expect(result).toEqual(expectedOutput);
});
