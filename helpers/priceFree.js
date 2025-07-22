import {getState} from "../main/initApp.js"

const free = {
  UK: "FREE",
  PL: "GRATIS",
  DE: "GRATIS",
  AT: "GRATIS",
  CHDE: "GRATIS",
  NL: "GRATIS",
  FR: "GRATUIT",
  CHFR: "GRATUIT",
  CHIT: "GRATIS",
  BEFR: "GRATUIT",
  BENL: "GRATIS",
  ES: "GRATIS",
  PT: "GRÁTIS",
  IT: "GRATIS",
  DK: "GRATIS",
  NO: "GRATIS",
  FI: "ILMAINEN",
  SE: "PÅ KÖPET",
  CZ: "ZDARMA",
  SK: "GRÁTIS",
  HU: "AJÁNDÉK",
  RO: "CADOU",
}

export function priceFree(product) {
  const country = getState("country")
  return {...product, lowPrice: free[country], highPrice: product.lowPrice}
}