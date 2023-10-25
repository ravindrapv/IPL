const { findMostDismissedBowler } = require('../src/server/findDismissalStats');

test('Finds the bowler who dismissed a batsman the most', () => {
	const deliveriesData = [
		{ player_dismissed: 'BatsmanA', bowler: 'BowlerX' },
		{ player_dismissed: 'BatsmanB', bowler: 'BowlerX' },
		{ player_dismissed: 'BatsmanA', bowler: 'BowlerX' },
		{ player_dismissed: 'BatsmanA', bowler: 'BowlerY' },
		{ player_dismissed: 'BatsmanA', bowler: 'BowlerX' },
	];

	const result = findMostDismissedBowler(deliveriesData, 'BatsmanA'); // Corrected function name and added 'BatsmanA'

	// Assert that the result is as expected
	expect(result).toBe('BowlerX'); // Corrected assertion for the result
});
