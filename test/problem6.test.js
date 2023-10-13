const {
  findMostPOTMAwardsPerSeason,
} = require("../src/server/mostAwardPlayer");
const csv = require("csvtojson");

test("Finds players with the most Player of the Match awards for each season correctly", async () => {
  const matchesData = await csv().fromFile(
    "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/matches.csv"
  );

  const result = findMostPOTMAwardsPerSeason(matchesData);

  const expectedOutput = {
    2008: {
      player: "SE Marsh",
      count: 5,
    },
    2009: {
      player: "YK Pathan",
      count: 3,
    },
    2010: {
      player: "SR Tendulkar",
      count: 4,
    },
    2011: {
      player: "CH Gayle",
      count: 6,
    },
    2012: {
      player: "CH Gayle",
      count: 5,
    },
    2013: {
      player: "MEK Hussey",
      count: 5,
    },
    2014: {
      player: "GJ Maxwell",
      count: 4,
    },
    2015: {
      player: "DA Warner",
      count: 4,
    },
    2016: {
      player: "V Kohli",
      count: 5,
    },
    2017: {
      player: "BA Stokes",
      count: 3,
    },
  };

  // Check if the calculated result matches the expected result
  expect(result).toEqual(expectedOutput);
});
