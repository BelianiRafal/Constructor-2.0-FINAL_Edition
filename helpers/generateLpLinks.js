const countryLpOffsets = {
    CHDE: 0,
    CHFR: 0,
    UK: 1,
    DE: 2,
    FR: 3,
    AT: 4,
    ES: 5,
    PL: 6,
    NL: 7,
    PT: 8,
    IT: 9,
    SE: 10,
    HU: 11,
    DK: 12,
    CZ: 13,
    FI: 14,
    NO: 15,
    SK: 16,
    BENL: 17,
    BEFR: 17,
    RO: 18,
  };
  
  export function generateLpLinks(lpId, countriesOrdering = null, campaignName = "") {
    const countries = countriesOrdering ? countriesOrdering : Object.keys(countryLpOffsets);
    const shopIdMap = {
      CHDE: 1, CHFR: 1, UK: 2, DE: 3, FR: 7, AT: 8, ES: 10, PL: 12,
      NL: 17, PT: 22, IT: 21, SE: 23, HU: 24, DK: 25, CZ: 26, FI: 27,
      NO: 28, SK: 29, BENL: 19, BEFR: 19, RO: 30,
    };
    const links = {};
    countries.forEach(country => {
      // WYJĄTEK dla kampanii "02.07.25 - Sofas"
      if (campaignName === "02.07.25 - Sofas") {
        if (country === "BENL" || country === "BEFR") {
          links[country] = `https://www.prologistics.info/shop_content.php?id=25503&shop_id=19`;
          return;
        }
        if (country === "RO") {
          links[country] = `https://www.prologistics.info/shop_content.php?id=25504&shop_id=30`;
          return;
        }
      }
      // Standardowe generowanie
      const currentLpId = Number(lpId) + countryLpOffsets[country];
      const shopId = shopIdMap[country];
      links[country] = `https://www.prologistics.info/shop_content.php?id=${currentLpId}&shop_id=${shopId}`;
    });
    return links;
  }