const {
	calculateExtraRunsConcededIn2016,
} = require('../src/server/calculateExtraRunsConcededIn2016');

describe('calculateExtraRunsConcededIn2016', () => {
	it('should calculate extra runs conceded by each team in 2016', () => {
		const matchesData = [
			{ id: 1, season: '2016' },
			{ id: 2, season: '2016' },
			{ id: 3, season: '2016' },
			{ id: 4, season: '2017' },
			{ id: 5, season: '2016' },
		];

		const deliveriesData = [
			{ match_id: 1, bowling_team: 'TeamA', extra_runs: '5' },
			{ match_id: 2, bowling_team: 'TeamB', extra_runs: '10' },
			{ match_id: 3, bowling_team: 'TeamA', extra_runs: '8' },
			{ match_id: 4, bowling_team: 'TeamC', extra_runs: '3' },
			{ match_id: 5, bowling_team: 'TeamB', extra_runs: '7' },
		];

		const expectedOutput = {
			TeamA: 13, // 5 + 8
			TeamB: 17, // 10 + 7
		};

		const result = calculateExtraRunsConcededIn2016(
			matchesData,
			deliveriesData,
		);

		expect(result).toEqual(expectedOutput);
	});

	it('should return an empty object if there are no matches in 2016', () => {
		const matchesData = [
			{ id: 1, season: '2017' },
			{ id: 2, season: '2018' },
			{ id: 3, season: '2019' },
		];

		const deliveriesData = [
			{ match_id: 1, bowling_team: 'TeamA', extra_runs: '5' },
			{ match_id: 2, bowling_team: 'TeamB', extra_runs: '10' },
			{ match_id: 3, bowling_team: 'TeamA', extra_runs: '8' },
		];

		const expectedOutput = {};

		const result = calculateExtraRunsConcededIn2016(
			matchesData,
			deliveriesData,
		);

		expect(result).toEqual(expectedOutput);
	});
});
