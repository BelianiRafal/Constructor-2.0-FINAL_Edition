import { ImageWithLink } from "./ImageWithLink.js";
import { ImageWithLinkThree } from "./imageWithLinkThree.js";

export function ProductIMG(product, align = "left", style) {
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; padding-right: 6px; padding-left: 6px; display: inline-flex" align="center">
    <tbody>
      <tr>
        <td align="center">
          ${
            "src" in product && product.src !== null ?
            `<table cellspacing="0" cellpadding="0" align="center">
            <tbody>
              <tr>
                <td align="center">
                  ${ImageWithLinkThree({
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
        </td>
      </tr>
    </tbody>
  </table>
    `;
}
