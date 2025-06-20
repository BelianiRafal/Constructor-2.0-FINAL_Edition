export function incrementLpId(lpId, countriesOrdering = null) {
    const countries = countriesOrdering ? countriesOrdering : [
      "CHDE",
      "CHFR",
      "UK",
      "DE",
      "FR",
      "AT",
      "ES",
      "PL",
      "NL",
      "PT",
      "IT",
      "SE",
      "HU",
      "DK",
      "CZ",
      "FI",
      "NO",
      "SK",
      "BENL",
      "BEFR",
      "RO"
    ]

    const shopIdMap = {
        CHDE: 1,
        CHFR: 1,
        UK: 2,
        DE: 3,
        FR: 7,
        AT: 8,
        ES: 10,
        PL: 12,
        NL: 17,
        PT: 22,
        IT: 21,
        SE: 23,
        HU: 24,
        DK: 25,
        CZ: 26,
        FI: 27,
        NO: 28,
        SK: 29,
        BENL: 19,
        BEFR: 19,
        RO: 30,
      };

      const links = {};
      countries.forEach((country, idx) => {
        let countryOffset = idx;
        // Dla BENL i BEFR mają ten sam offset i ten sam shop_id
        if (country === 'BENL' || country === 'BEFR') countryOffset = 17;
        if (country === 'RO') countryOffset = 18;
    
        // BENL i BEFR mają ten sam link
        const currentLpId = Number(lpId) + countryOffset;
        const shopId = shopIdMap[country];
    
        links[country] = `https://www.prologistics.info/shop_content.php?id=${currentLpId}&shop_id=${shopId}`;
      });
      return links;
}