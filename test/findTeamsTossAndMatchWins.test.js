const {
	findTeamsTossAndMatchWins,
} = require('../src/server/findTeamToseMatchWins');

describe('findTeamsTossAndMatchWins', () => {
	it('should correctly count toss wins and match wins for teams', () => {
		const matchesData = [
			{ toss_winner: 'TeamA', winner: 'TeamA' },
			{ toss_winner: 'TeamB', winner: 'TeamA' },
			{ toss_winner: 'TeamA', winner: 'TeamB' },
			{ toss_winner: 'TeamC', winner: 'TeamC' },
			{ toss_winner: 'TeamA', winner: 'TeamA' },
			{ toss_winner: 'TeamB', winner: 'TeamB' },
			{ toss_winner: 'TeamC', winner: 'TeamA' },
		];

		const expectedOutput = {
			TeamA: { tossWins: 3, matchWins: 2 },
			TeamB: { tossWins: 2, matchWins: 1 },
			TeamC: { tossWins: 2, matchWins: 1 },
		};

		const result = findTeamsTossAndMatchWins(matchesData);

		expect(result).toEqual(expectedOutput);
	});

	it('should handle cases where toss or match winner is missing', () => {
		const matchesData = [
			{ toss_winner: 'TeamA', winner: 'TeamA' },
			{ toss_winner: 'TeamB', winner: 'TeamA' },
			{ toss_winner: 'TeamA' }, // Missing match winner
			{ winner: 'TeamC' }, // Missing toss winner
		];

		const expectedOutput = {
			TeamA: { tossWins: 2, matchWins: 2 },
			TeamB: { tossWins: 1, matchWins: 0 },
			TeamC: { tossWins: 0, matchWins: 1 },
		};

		const result = findTeamsTossAndMatchWins(matchesData);

		expect(result).toEqual(expectedOutput);
	});

	it('should return an empty object if there are no valid toss or match winners', () => {
		const matchesData = [{ toss_winner: 'TeamA' }, { winner: 'TeamB' }];

		const expectedOutput = {};

		const result = findTeamsTossAndMatchWins(matchesData);

		expect(result).toEqual(expectedOutput);
	});
});
