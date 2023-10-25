function matchesPerYear(matchesData) {
  const matchesPerYear = {};

  for (const match of matchesData) {
    const year = match.season;
    if (matchesPerYear[year]) {
      matchesPerYear[year] += 1;
    } else {
      matchesPerYear[year] = 1;
    }
  }

  return matchesPerYear;
}

module.exports = { matchesPerYear };
