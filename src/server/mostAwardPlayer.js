function findMostPOTMAwardsPerSeason(matchesData) {
  const seasonPlayerOfMatch = matchesData.reduce((accumulator, current) => {
    if (accumulator[current.season]) {
      if (accumulator[current.season][current.player_of_match]) {
        accumulator[current.season][current.player_of_match]++;
      } else {
        accumulator[current.season][current.player_of_match] = 1;
      }
    } else {
      accumulator[current.season] = {};
      accumulator[current.season][current.player_of_match] = 1;
    }
    return accumulator;
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
