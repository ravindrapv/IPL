function findDismissalStats(deliveriesData) {
  const dismissalStats = {};

  deliveriesData.forEach((delivery) => {
    const dismissedPlayer = delivery.player_dismissed;
    const bowler = delivery.bowler;

    if (dismissedPlayer) {
      dismissalStats[dismissedPlayer] = dismissalStats[dismissedPlayer] || {};

      if (dismissalStats[dismissedPlayer][bowler]) {
        dismissalStats[dismissedPlayer][bowler]++;
      } else {
        dismissalStats[dismissedPlayer][bowler] = 1;
      }
    }
  });

  const highestDismissals = {};

  for (const player in dismissalStats) {
    const bowlers = dismissalStats[player];
    const highestBowler = Object.entries(bowlers).reduce((a, b) =>
      a[1] > b[1] ? a : b
    );

    highestDismissals[player] = {
      bowler: highestBowler[0],
      count: highestBowler[1],
    };
  }

  return highestDismissals;
}

module.exports = { findDismissalStats };
