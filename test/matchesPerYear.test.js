const { matchesPerYear } = require('../src/server/matchesPerYear');

test('Calculates matches per year correctly', () => {
	const input = [
		{ season: '2008' },
		{ season: '2008' },
		{ season: '2009' },
		{ season: '2010' },
		{ season: '2011' },
		{ season: '2011' },
		{ season: '2012' },
		{ season: '2013' },
		{ season: '2013' },
		{ season: '2014' },
		{ season: '2015' },
		{ season: '2016' },
		{ season: '2016' },
		{ season: '2017' },
		{ season: '2017' },
		{ season: '2017' },
	];

	const expectedOutput = {
		2008: 2,
		2009: 1,
		2010: 1,
		2011: 2,
		2012: 1,
		2013: 2,
		2014: 1,
		2015: 1,
		2016: 2,
		2017: 3,
	};

	const result = matchesPerYear(input);

	expect(result).toEqual(expectedOutput);
});
