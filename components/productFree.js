import { ImageWithLink } from "./ImageWithLink.js";

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
  };

export function ProductFree(product, country, free, align = "left", style) {
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; padding-right: 6px; padding-left: 6px; display: inline-flex;" align="center">
    <tbody>
      <tr>
        <td align="center">
          ${
            "src" in product && product.src !== null ?
            `<table cellspacing="0" cellpadding="0" align="center">
            <tbody>
              <tr>
                <td align="center">
                  ${ImageWithLink({
                    href: product.href,
                    src: product.src,
                    alt: product.name,
                  })}
                </td>
              </tr>
            </tbody>
          </table>`
            :
            ""
          }
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td class="newsletterBottom20px">
                </td>
              </tr>
              <tr>
                <td align="center">
                  <span class="newsletterProductTitle" style="${style ?? ""}">${product.name}</span>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-bottom: 8px;">
                  <span class="newsletterProductLowPrice" style="${style ?? ""}">${free} </span>
                  <span class="newsletterProductHightPrice" style="${style ?? ""}">${
                    product.lowPrice
                  }</span>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
    `;
}
