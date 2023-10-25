document.addEventListener('DOMContentLoaded', () => {
	fetch('./output/output1.json')
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
	fetch('./output/output2.json')
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

fetch('./output/output3.json')
	.then((response) => response.json())
	.then((data) => {
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

fetch('./output/output4.json')
	.then((response) => response.json())
	.then((data) => {
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

fetch('./output/output5.json')
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

fetch('./output/output6.json')
	.then((response) => response.json())
	.then((data) => {
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

fetch('./output/output7.json')
	.then((response) => response.json())
	.then((data) => {
		const categories = Object.keys(data);
		const seriesData = [];
		categories.forEach((year) => {
			const batsmanName = data[year].batsman;
			const strikeRate = data[year].strikeRate;

			seriesData.push({
				name: year,
				data: [strikeRate],
			});
		});

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

fetch('./output/output8.json')
	.then((response) => response.json())
	.then((data) => {
		// Extract the data from the JSON
		const chartData = data.map((dataPoint) => ({
			name: `${dataPoint.batsman} vs ${dataPoint.bowler}`,
			count: dataPoint.count,
		}));

		// Create a Highcharts bar chart
		Highcharts.chart('dismissalStatsContainer', {
			chart: {
				type: 'bar',
			},
			title: {
				text: 'Dismissal Stats',
			},
			xAxis: {
				categories: chartData.map((dataPoint) => dataPoint.name),
				title: {
					text: 'Batsman vs Bowler',
				},
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Dismissal Count',
				},
			},
			series: [
				{
					name: 'Dismissal Count',
					data: chartData.map((dataPoint) => dataPoint.count),
				},
			],
		});
	})
	.catch((error) => {
		console.error('Error fetching data:', error);
	});

fetch('./output/output9.json')
	.then((response) => response.json())
	.then((data) => {
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
