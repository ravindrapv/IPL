function findTeamsTossAndMatchWins(matchesData) {
  const teamsTossAndMatchWins = {};

  for (const match of matchesData) {
    const tossWinner = match.toss_winner;
    const matchWinner = match.winner;
    if (tossWinner && matchWinner) {
      if (!teamsTossAndMatchWins[tossWinner]) {
        teamsTossAndMatchWins[tossWinner] = { tossWins: 0, matchWins: 0 };
      }

      teamsTossAndMatchWins[tossWinner].tossWins += 1;

      if (tossWinner === matchWinner) {
        teamsTossAndMatchWins[tossWinner].matchWins += 1;
      }
    }
  }

  return teamsTossAndMatchWins;
}

module.exports = { findTeamsTossAndMatchWins };
