const {
  findBestEconomyInSuperOvers,
} = require("../src/server/bestBowlerStrick");
const csv = require("csvtojson");

test("Calculates best economy in super overs correctly", async () => {
  const deliveriesData = await csv().fromFile(
    "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/deliveries.csv"
  );

  const result = findBestEconomyInSuperOvers(deliveriesData);

  const expectedOutput = ["JJ Bumrah", 1.5];

  // Check if the calculated result matches the expected result
  expect(result).toEqual(expectedOutput);
});
