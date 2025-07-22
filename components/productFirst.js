import { ImageWithLinkThree } from "./imageWithLinkThree.js";
import { ImageWithLink } from "./ImageWithLink.js";

export function ProductFirst(product, src, align = "left", style) {
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; ">
    <tbody>
      <tr>
        <td>
          ${
            "src" in product && product.src !== null ?
            `<table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}">
                  ${ImageWithLink({
                    href: product.href,
                    src: src,
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
