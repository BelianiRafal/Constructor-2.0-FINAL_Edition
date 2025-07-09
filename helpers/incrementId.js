const countryOrderOld = [
  "CHDE", "CHFR", "AT", "CZ", "DE", "DK", "FI", "FR", "HU", "IT", "NL",
  "NO", "PL", "PT", "SE", "SK", "ES", "UK"
];

const countryOrderNew = [
  "CHDE", "CHFR", "AT", "BENL", "BEFR", "CZ", "DE", "DK", "FI", "FR", "HU",
  "IT", "NL", "NO", "PL", "PT", "RO", "SE", "SK", "ES", "UK"
];

/**
 * Zwraca mapę krajów do inkrementowanych id, wg wybranej kolejności.
 * @param {string|number} id - startowy id
 * @param {string} version - "old" | "new"
 * @param {Array} countriesOrdering - (opcjonalnie) własna kolejność
 */
export function incrementId(id, version = "old", countriesOrdering = null) {
  let countries;
  if (countriesOrdering) {
    countries = countriesOrdering;
  } else {
    countries = version === "new" ? countryOrderNew : countryOrderOld;
  }

  const relativeIdToCountires = {};
  countries.forEach(country => {
    relativeIdToCountires[country] = Number(id);
    id++;
  });

  return relativeIdToCountires;
}