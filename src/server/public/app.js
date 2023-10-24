document.addEventListener('DOMContentLoaded', () => {
	fetch('./output/1.json')
		.then((response) => response.json())
		.then((data) => {
			Highcharts.chart('chartContainer', {
				chart: {
					type: 'column',
				},
				title: {
					text: 'IPL Matches Per Year',
				},
				xAxis: {
					categories: Object.keys(data),
					title: {
						text: 'Year',
					},
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Matches Played',
					},
				},
				series: [
					{
						name: 'Matches',
						data: Object.values(data),
					},
				],
			});
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
		});
});

document.addEventListener('DOMContentLoaded', () => {
	fetch('./output/2.json')
		.then((response) => response.json())
		.then((data) => {
			Highcharts.chart('matchesWonPerTeamPerYearContainer', {
				chart: {
					type: 'bar',
				},
				title: {
					text: 'Matches Won Per Team Per Year',
				},
				xAxis: {
					categories: Object.keys(data),
					title: {
						text: 'Year',
					},
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Matches Won',
					},
				},
				plotOptions: {
					series: {
						stacking: 'normal',
					},
				},
				series: Object.keys(data).map((team) => ({
					name: team,
					data: Object.values(data[team]),
				})),
			});
		})
		.catch((error) => {
			console.error('Error fetching data:', error);
		});
});

fetch('./output/3.json')
	.then((response) => response.json())
	.then((data) => {
		// Visualize the data using Highcharts
		Highcharts.chart('extraRunsConcededContainer', {
			chart: {
				type: 'column',
			},
			title: {
				text: 'Extra Runs Conceded in 2016',
			},
			xAxis: {
				categories: Object.keys(data),
				title: {
					text: 'Team',
				},
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Extra Runs Conceded',
				},
			},
			series: [
				{
					name: 'Extra Runs',
					data: Object.values(data),
				},
			],
		});
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});

// Existing code for "Matches Won Per Team Per Year" and "Extra Runs Conceded in 2016"

// Add the code to calculate "Top Economical Bowlers in 2015"
fetch('./output/4.json')
	.then((response) => response.json())
	.then((data) => {
		// Visualize the data using Highcharts
		Highcharts.chart('topEconomicalBowlersContainer', {
			chart: {
				type: 'bar',
			},
			title: {
				text: 'Top Economical Bowlers in 2015',
			},
			xAxis: {
				categories: Object.keys(data),
				title: {
					text: 'Bowler',
				},
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Economy Rate',
				},
			},
			series: [
				{
					name: 'Economy Rate',
					data: Object.values(data),
				},
			],
		});
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});

// Existing code for "Matches Won Per Team Per Year", "Extra Runs Conceded in 2016", and "Top Economical Bowlers in 2015"

// Add the code to calculate "Teams' Toss and Match Wins"
fetch('./output/5.json')
	.then((response) => response.json())
	.then((data) => {
		// Visualize the data using Highcharts
		const categories = Object.keys(data);
		const tossWinsData = categories.map((team) => data[team].tossWins);
		const matchWinsData = categories.map((team) => data[team].matchWins);

		Highcharts.chart('teamsTossAndMatchWinsContainer', {
			chart: {
				type: 'column',
			},
			title: {
				text: "Teams' Toss and Match Wins",
			},
			xAxis: {
				categories: categories,
				title: {
					text: 'Team',
				},
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Wins',
				},
			},
			series: [
				{
					name: 'Toss Wins',
					data: tossWinsData,
				},
				{
					name: 'Match Wins',
					data: matchWinsData,
				},
			],
		});
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});

// Existing code for "Matches Won Per Team Per Year", "Extra Runs Conceded in 2016", "Top Economical Bowlers in 2015", and "Teams' Toss and Match Wins"

// Add the code to calculate "Most Player of the Match (POTM) Awards per Season"
fetch('./output/6.json')
	.then((response) => response.json())
	.then((data) => {
		// Visualize the data using Highcharts
		Highcharts.chart('mostPOTMAwardsContainer', {
			chart: {
				type: 'column',
			},
			title: {
				text: 'Most Player of the Match (POTM) Awards per Season',
			},
			xAxis: {
				categories: Object.keys(data),
				title: {
					text: 'Season',
				},
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Number of Awards',
				},
			},
			series: [
				{
					name: 'Player of the Match Awards',
					data: Object.values(data).map((item) => item.count),
				},
			],
		});
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});

// Existing code for "Matches Won Per Team Per Year," "Extra Runs Conceded in 2016," "Top Economical Bowlers in 2015," "Teams' Toss and Match Wins," and "Most Player of the Match (POTM) Awards per Season"

// Add the code to calculate "Batsman Strike Rate per Season"
fetch('./output/7.json')
	.then((response) => response.json())
	.then((data) => {
		// Visualize the data using Highcharts
		const categories = Object.keys(data);
		const batsmanNames = Object.keys(data[Object.keys(data)[0]]);

		const seriesData = batsmanNames.map((batsman) => ({
			name: batsman,
			data: categories.map((year) => data[year][batsman]),
		}));

		Highcharts.chart('batsmanStrikeRateContainer', {
			chart: {
				type: 'column',
			},
			title: {
				text: 'Batsman Strike Rate per Season',
			},
			xAxis: {
				categories: categories,
				title: {
					text: 'Season',
				},
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Strike Rate',
				},
			},
			series: seriesData,
		});
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});

// Existing code for "Matches Won Per Team Per Year," "Extra Runs Conceded in 2016," "Top Economical Bowlers in 2015," "Teams' Toss and Match Wins," "Most Player of the Match (POTM) Awards per Season," and "Batsman Strike Rate per Season"

// Add the code to calculate "Dismissal Stats"
fetch('./output/8.json')
	.then((response) => response.json())
	.then((data) => {
		// Visualize the data using Highcharts
		const categories = Object.keys(data);
		const batsmanNames = Object.keys(data[Object.keys(data)[0]]);

		const seriesData = batsmanNames.map((batsman) => ({
			name: batsman,
			data: categories.map((year) => data[year][batsman].count),
		}));

		Highcharts.chart('dismissalStatsContainer', {
			chart: {
				type: 'column',
			},
			title: {
				text: 'Dismissal Stats',
			},
			xAxis: {
				categories: categories,
				title: {
					text: 'Bowler',
				},
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Dismissals',
				},
			},
			series: seriesData,
		});
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});

fetch('./output/9.json')
	.then((response) => response.json())
	.then((data) => {
		// Visualize the data using Highcharts
		const bestEconomyData = {
			'Best Economy in Super Overs': data[1],
		};

		Highcharts.chart('bestEconomySuperOversContainer', {
			chart: {
				type: 'bar',
			},
			title: {
				text: 'Best Economy in Super Overs',
			},
			xAxis: {
				categories: [data[0]],
				title: {
					text: 'Bowler',
				},
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Economy Rate',
				},
			},
			series: [
				{
					name: 'Economy Rate',
					data: [data[1]],
				},
			],
		});
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});
