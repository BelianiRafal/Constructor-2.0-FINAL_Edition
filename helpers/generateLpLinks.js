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
  const zeroOffsetCountries = ["CHDE", "CHFR"];
  const links = {};
  let sharedOffsetAssigned = false; // Czy już był CHDE lub CHFR z offsetem 0
  let offsetCounter = 0;

  countries.forEach((country) => {
    if (specialLpIds && specialLpIds[country]) {
      const shopId = shopIdMap[country];
      links[country] = `https://www.prologistics.info/shop_content.php?id=${specialLpIds[country]}&shop_id=${shopId}`;
      return;
    }

    let offset;
    if (zeroOffsetCountries.includes(country)) {
      if (!sharedOffsetAssigned) {
        offset = 0;
        sharedOffsetAssigned = true;
      } else {
        offset = 0;
      }
    } else {
      offsetCounter++;
      offset = offsetCounter;
    }

    const currentLpId = Number(lpId) + offset;
    const shopId = shopIdMap[country];
    links[country] = `https://www.prologistics.info/shop_content.php?id=${currentLpId}&shop_id=${shopId}`;
  });
  return links;
}