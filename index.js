const fs = require('fs');
const csv = require('csvtojson');

// Import core logic functions for each problem
const problem1 = require('./src/server/matches');
const problem2 = require('./src/server/matches-won');
const problem3 = require('./src/server/extra-run-in-16');
const problem4 = require('./src/server/top-10-economicBowler');
const problem5 = require('./src/server/findTeamToseMatchWins');
const problem6 = require('./src/server/mostAwardPlayer');
const problem7 = require('./src/server/batsamnStrikeRate');
const problem8 = require('./src/server/mostDismiesdBatsman');
const problem9 = require('./src/server/bestBowlerStrick');
function main() {
	// Define file paths for data
	const matchesDataPath =
		'/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/matches.csv';
	const deliveriesDatapath =
		'/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/data/deliveries.csv';
	// Define an array of problem numbers to execute
	const problemsToExecute = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	problemsToExecute.forEach((problemNumber) => {
		const outputFilePath = `/home/venkataravindra-p-v/MountBlue/IPL-project/IPL/src/server/public/output/${problemNumber}.json`;

		if (problemNumber === 1) {
			const matchesData = csv().fromFile(matchesDataPath);

			matchesData.then((data) => {
				const result = problem1.matchesPerYear(data);
				writeResultToFile(outputFilePath, result);
			});
		} else if (problemNumber === 2) {
			const matchesData = csv().fromFile(matchesDataPath);

			Promise.all([matchesData]).then(([matches]) => {
				const result = problem2.calculateMatchesWonPerTeamPerYear(matches);
				writeResultToFile(outputFilePath, result);
			});
		} else if (problemNumber === 3) {
			const matchesData = csv().fromFile(matchesDataPath);
			const deliveriesData = csv().fromFile(deliveriesDatapath);

			Promise.all([matchesData, deliveriesData]).then(
				([matches, deliveries]) => {
					const result = problem3.calculateExtraRunsConcededIn2016(
						matches,
						deliveries,
					);
					writeResultToFile(outputFilePath, result);
				},
			);
		} else if (problemNumber === 4) {
			const matchesData = csv().fromFile(matchesDataPath);
			const deliveriesData = csv().fromFile(deliveriesDatapath);

			Promise.all([matchesData, deliveriesData]).then(
				([matches, deliveries]) => {
					const result = problem4.calculateTopEconomicalBowlersIn2015(
						matches,
						deliveries,
					);
					writeResultToFile(outputFilePath, result);
				},
			);
		} else if (problemNumber === 5) {
			const matchesData = csv().fromFile(matchesDataPath);
			Promise.all([matchesData]).then(([matches]) => {
				const result = problem5.findTeamsTossAndMatchWins(matches);
				writeResultToFile(outputFilePath, result);
			});
		} else if (problemNumber === 6) {
			const matchesData = csv().fromFile(matchesDataPath);
			Promise.all([matchesData]).then(([matches]) => {
				const result = problem6.findMostPOTMAwardsPerSeason(matches);
				writeResultToFile(outputFilePath, result);
			});
		} else if (problemNumber === 7) {
			const matchesData = csv().fromFile(matchesDataPath);
			const deliveriesData = csv().fromFile(deliveriesDatapath);

			Promise.all([matchesData, deliveriesData]).then(
				([matches, deliveries]) => {
					const result = problem7.calculateBatsmanStrikeRate(
						matches,
						deliveries,
					);
					writeResultToFile(outputFilePath, result);
				},
			);
		} else if (problemNumber === 8) {
			const deliveriesData = csv().fromFile(deliveriesDatapath);

			Promise.all([deliveriesData]).then(([deliveries]) => {
				const result = problem8.findDismissalStats(deliveries);
				writeResultToFile(outputFilePath, result);
			});
		} else if (problemNumber === 9) {
			const deliveriesData = csv().fromFile(deliveriesDatapath);

			Promise.all([deliveriesData]).then(([deliveries]) => {
				const result = problem9.findBestEconomyInSuperOvers(deliveries);
				writeResultToFile(outputFilePath, result);
			});
		}
	});
}

function writeResultToFile(outputFilePath, result) {
	fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2));
	console.log(`Problem result written to ${outputFilePath}`);
}

main();
