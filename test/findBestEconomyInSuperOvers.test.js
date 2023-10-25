const {
	findBestEconomyInSuperOvers,
} = require('../src/server/findBestEconomyInSuperOvers');

test('Finds the bowler with the best economy in super overs correctly', () => {
	const deliveriesData = [
		{
			bowler: 'Bowler 1',
			total_runs: '10',
			extra_runs: '2',
			is_super_over: '1',
			over: '1.1',
		},
		{
			bowler: 'Bowler 1',
			total_runs: '8',
			extra_runs: '1',
			is_super_over: '1',
			over: '1.2',
		},
		{
			bowler: 'Bowler 2',
			total_runs: '15',
			extra_runs: '1',
			is_super_over: '1',
			over: '1.1',
		},
	];

	const result = findBestEconomyInSuperOvers(deliveriesData);

	expect(result).toEqual(['Bowler 1', expect.any(Number)]);
});
