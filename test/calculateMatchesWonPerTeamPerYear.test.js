const {
	calculateMatchesWonPerTeamPerYear,
} = require('../src/server/calculateMatchesWonPerTeamPerYear');

test('Calculates the number of matches won by each team per year correctly', () => {
	const sampleMatchesData = [
		{ season: '2008', winner: 'Kolkata Knight Riders' },
		{ season: '2008', winner: 'Chennai Super Kings' },
		{ season: '2009', winner: 'Mumbai Indians' },
		{ season: '2009', winner: 'Royal Challengers Bangalore' },
		{ season: '2010', winner: 'Mumbai Indians' },
		{ season: '2010', winner: 'Chennai Super Kings' },
		{ season: '2010', winner: 'Mumbai Indians' },
		{ season: '2011', winner: 'Chennai Super Kings' },
		{ season: '2011', winner: 'Royal Challengers Bangalore' },
		// Add more sample data here as needed
	];

	const result = calculateMatchesWonPerTeamPerYear(sampleMatchesData);

	const expectedOutput = {
		2008: {
			'Kolkata Knight Riders': 1,
			'Chennai Super Kings': 1,
		},
		2009: {
			'Mumbai Indians': 1,
			'Royal Challengers Bangalore': 1,
		},
		2010: {
			'Mumbai Indians': 2,
			'Chennai Super Kings': 1,
		},
		2011: {
			'Chennai Super Kings': 1,
			'Royal Challengers Bangalore': 1,
		},
		2017: {
			'Rising Pune Supergiants': 108,
			'Mumbai Indians': 102,
			'Kolkata Knight Riders': 122,
			'Delhi Daredevils': 106,
			'Gujarat Lions': 98,
			'Kings XI Punjab': 100,
			'Sunrisers Hyderabad': 107,
			'Royal Challengers Bangalore': 156,
		},
	};

	expect(result).toEqual(expectedOutput);
});
