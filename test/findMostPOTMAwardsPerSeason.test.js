const {
	findMostPOTMAwardsPerSeason,
} = require('../src/server/findMostPOTMAwardsPerSeason');

test('Finds players with the most Player of the Match awards for each season correctly', () => {
	const matchesData = [
		{ season: '2008', player_of_match: 'SE Marsh' },
		{ season: '2008', player_of_match: 'G Gambhir' },
		{ season: '2008', player_of_match: 'SE Marsh' },
		{ season: '2009', player_of_match: 'YK Pathan' },
		{ season: '2009', player_of_match: 'SR Tendulkar' },
		{ season: '2010', player_of_match: 'SR Tendulkar' },
		{ season: '2010', player_of_match: 'CH Gayle' },
		{ season: '2011', player_of_match: 'CH Gayle' },
		{ season: '2011', player_of_match: 'CH Gayle' },
		{ season: '2012', player_of_match: 'SR Tendulkar' },
		{ season: '2012', player_of_match: 'MEK Hussey' },
		{ season: '2013', player_of_match: 'MEK Hussey' },
	];

	const result = findMostPOTMAwardsPerSeason(matchesData);

	expect(result).toEqual({
		2008: 'SE Marsh',
		2009: 'YK Pathan',
		2010: 'SR Tendulkar',
		2011: 'CH Gayle',
		2012: 'SR Tendulkar',
		2013: 'MEK Hussey',
	});
});
