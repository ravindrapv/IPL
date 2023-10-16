const {
  calculateTopEconomicalBowlersIn2015,
} = require("../src/server/top-10-economicBowler");
const csv = require("csvtojson");

test("Calculates top 10 economical bowlers in 2015 correctly", async () => {
  const matchesData = await csv().fromFile(
    "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/matches.csv"
  );
  const deliveriesData = await csv().fromFile(
    "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/deliveries.csv"
  );

  const result = calculateTopEconomicalBowlersIn2015(
    matchesData,
    deliveriesData
  );

  const expectedOutput = {
    "RN ten Doeschate": 2.571428571428571,
    "J Yadav": 4.142857142857142,
    "V Kohli": 5.454545454545454,
    "R Ashwin": 5.475,
    "M de Lange": 5.538461538461538,
    "S Nadeem": 5.590909090909091,
    "Z Khan": 5.612903225806451,
    "MC Henriques": 5.770700636942675,
    "MA Starc": 6.0661764705882355,
    "Parvez Rasool": 6.200000000000001,
  };
  expect(result).toEqual(expectedOutput);
});
