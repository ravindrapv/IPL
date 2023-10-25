const {
	calculateHighestBatsmanStrikeRate,
} = require('../src/server/calculateBatsmanStrikeRate');

test('Calculates the highest strike rate for a batsman correctly', () => {
	const inputMatches = [
		{ id: 1, season: '2008' },
		{ id: 2, season: '2008' },
		{ id: 3, season: '2009' },
		{ id: 4, season: '2010' },
		{ id: 5, season: '2011' },
		{ id: 6, season: '2011' },
		{ id: 7, season: '2012' },
		{ id: 8, season: '2013' },
		{ id: 9, season: '2013' },
		{ id: 10, season: '2014' },
	];

	const inputDeliveries = [
		{ match_id: 1, batsman: 'Batsman1', batsman_runs: '25', wide_runs: '0' },
		{ match_id: 2, batsman: 'Batsman2', batsman_runs: '30', wide_runs: '0' },
		{ match_id: 3, batsman: 'Batsman1', batsman_runs: '15', wide_runs: '0' },
		{ match_id: 4, batsman: 'Batsman1', batsman_runs: '10', wide_runs: '0' },
		{ match_id: 5, batsman: 'Batsman2', batsman_runs: '50', wide_runs: '0' },
		{ match_id: 6, batsman: 'Batsman1', batsman_runs: '60', wide_runs: '0' },
		{ match_id: 7, batsman: 'Batsman2', batsman_runs: '40', wide_runs: '0' },
		{ match_id: 8, batsman: 'Batsman1', batsman_runs: '20', wide_runs: '0' },
		{ match_id: 9, batsman: 'Batsman2', batsman_runs: '70', wide_runs: '0' },
		{ match_id: 10, batsman: 'Batsman1', batsman_runs: '35', wide_runs: '0' },
	];

	const expectedOutput = {
		batsman: 'Batsman2',
		strikeRate: 100,
	};

	const result = calculateHighestBatsmanStrikeRate(
		inputMatches,
		inputDeliveries,
	);

	expect(result).toEqual(expectedOutput);
});
