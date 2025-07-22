import { ImageWithLink } from "./ImageWithLink.js";

export function ProductName(product, align = "center", style) {
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
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}">
                  <span class="newsletterProductTitle" style="${style ?? ""}">${product.name}</span>
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
