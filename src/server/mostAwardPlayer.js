function findMostPOTMAwardsPerSeason(matchesData) {
  const seasonPlayerOfMatch = matchesData.reduce((ac, cv) => {
    if (ac[cv.season]) {
      if (ac[cv.season][cv.player_of_match]) {
        ac[cv.season][cv.player_of_match]++;
      } else {
        ac[cv.season][cv.player_of_match] = 1;
      }
    } else {
      ac[cv.season] = {};
      ac[cv.season][cv.player_of_match] = 1;
    }
    return ac;
  }, {});

  const mostPOTMAwardsPerSeason = Object.fromEntries(
    Object.entries(seasonPlayerOfMatch).map((data) => {
      const sortedData = Object.entries(data[1]).sort((player1, player2) => {
        return player2[1] - player1[1];
      })[0];
      return [data[0], { player: sortedData[0], count: sortedData[1] }];
    })
  );

  return mostPOTMAwardsPerSeason;
}

module.exports = { findMostPOTMAwardsPerSeason };
