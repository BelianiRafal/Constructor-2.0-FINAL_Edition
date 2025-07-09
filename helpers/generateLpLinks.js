export function generateLpLinks(lpId, countriesOrdering = null, campaignName = "", specialLpIds = {}) {
  const countries = countriesOrdering ? countriesOrdering : [
    "CHDE", "CHFR", "UK", "DE", "FR", "AT", "ES", "PL", "NL", "PT", "IT",
    "SE", "HU", "DK", "CZ", "FI", "NO", "SK", "BENL", "BEFR", "RO"
  ];
  const shopIdMap = {
    CHDE: 1, CHFR: 1, UK: 2, DE: 3, FR: 7, AT: 8, ES: 10, PL: 12,
    NL: 17, PT: 22, IT: 21, SE: 23, HU: 24, DK: 25, CZ: 26, FI: 27,
    NO: 28, SK: 29, BENL: 19, BEFR: 19, RO: 30,
  };

  // Grupy krajów ze wspólnym offsetem
  const sharedOffsetGroups = [
    ["CHDE", "CHFR"],
    ["BENL", "BEFR"]
  ];

  const countryOffsets = {};
  let offset = 0;

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const group = sharedOffsetGroups.find(g => g.includes(country));
    if (group) {
      // Jeśli żaden kraj z grupy nie ma jeszcze offsetu
      const assigned = group.find(c => countryOffsets[c] !== undefined);
      if (assigned) {
        countryOffsets[country] = countryOffsets[assigned];
      } else {
        group.forEach(c => countryOffsets[c] = offset);
        offset++; // Inkrementuj offset tylko raz dla całej grupy!
      }
    } else {
      countryOffsets[country] = offset;
      offset++;
    }
  }

  const links = {};
  countries.forEach(country => {
    if (specialLpIds && specialLpIds[country]) {
      const shopId = shopIdMap[country];
      links[country] = `https://www.prologistics.info/shop_content.php?id=${specialLpIds[country]}&shop_id=${shopId}`;
      return;
    }
    const currentLpId = Number(lpId) + countryOffsets[country];
    const shopId = shopIdMap[country];
    links[country] = `https://www.prologistics.info/shop_content.php?id=${currentLpId}&shop_id=${shopId}`;
  });
  return links;
}