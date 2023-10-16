const {
  calculateExtraRunsConcededIn2016,
} = require("../src/server/extra-run-in-16");
const csv = require("csvtojson");

test("Calculates extra runs conceded in 2016 correctly", () => {
  const matchesData = csv().fromFile(
    "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/matches.csv"
  );
  const deliveriesData = csv().fromFile(
    "/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/deliveries.csv"
  );

  return Promise.all([matchesData, deliveriesData]).then(
    ([matches, deliveries]) => {
      const result = calculateExtraRunsConcededIn2016(matches, deliveries);

      const expectedOutput = {
        "Rising Pune Supergiants": 108,
        "Mumbai Indians": 102,
        "Kolkata Knight Riders": 122,
        "Delhi Daredevils": 106,
        "Gujarat Lions": 98,
        "Kings XI Punjab": 100,
        "Sunrisers Hyderabad": 107,
        "Royal Challengers Bangalore": 156,
      };
      expect(result).toEqual(expectedOutput);
    }
  );
});
