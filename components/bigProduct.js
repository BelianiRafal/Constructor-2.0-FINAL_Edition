import { ImageWithLink } from "./ImageWithLink.js";

export function BigProduct(product, align = "left", style) {
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; ${style ?? ""}">
    <tbody>
      <tr>
        <td>
          ${
            "src" in product && product.src !== null ?
            `<table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}" class="newsletterBottom20px">
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
          <table class="newsletterContainer" cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}">
                  <span class="newsletterProductTitle" style="${style ?? ""}">${product.name}</span>
                </td>
              </tr>
              <tr>
                <td align="${align}" style="padding-bottom: 8px;">
                  <span class="newsletterProductLowPrice" style="${style ?? ""}">${
                    product.lowPrice
                  } </span>
                  <span class="newsletterProductHightPrice" style="${style ?? ""}">${
                    product.highPrice
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
