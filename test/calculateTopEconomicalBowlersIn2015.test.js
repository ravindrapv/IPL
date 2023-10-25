const {
	calculateTopEconomicalBowlersIn2015,
} = require('../src/server/calculateTopEconomicalBowlersIn2015');

test('Calculates the top 10 economical bowlers in 2015 correctly', () => {
	const matchesData = [
		{ id: 1, season: '2015' },
		{ id: 2, season: '2015' },
		{ id: 3, season: '2015' },
	];

	const deliveriesData = [
		{ match_id: 1, bowler: 'Bowler 1', total_runs: '10', extra_runs: '2' },
		{ match_id: 1, bowler: 'Bowler 2', total_runs: '15', extra_runs: '1' },
		{ match_id: 2, bowler: 'Bowler 1', total_runs: '12', extra_runs: '3' },
	];

	// Act: Call the function you want to test
	const result = calculateTopEconomicalBowlersIn2015(
		matchesData,
		deliveriesData,
	);

	expect(result).toEqual({
		'Bowler 1': expect.any(Number),
		'Bowler 2': expect.any(Number),
	});
});
