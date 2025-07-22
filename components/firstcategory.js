import { isAllowToRender } from "../helpers/optimizeImage.js";
import { ImageWithLink, Product, BigProduct, Title, Line } from "./index.js";

export const fCategory = isAllowToRender(
  ({
    name,
    desc,
    href,
    src,
    products,
    ctaComponent,
    color,
    cta = "CTA",
    type = "wednesday",
  }) => {
    if (type === "wednesday") {
      return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
    <thead>
      <tr>
        <td class="newsletterBottom60px"></td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          ${Title({ title: name, align: "left", color: "#000000" })}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
              <tbody>
                  <tr>
                      <td align="left">
                          <span class="newsletterParagraph" style="color: #000000">
                              ${desc}
                          </span>
                      </td>
                  </tr>
              </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%">
            ${BigProduct(
                products[0],
                "left",
                `color: ${color || "#000000"}`
            )}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px">
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tr>
              <td class="newsletterBottom20px">
                <!-- 1-2 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                      ${Product(
                        products[1],
                        "left",
                        `color: ${color || "#000000"}`
                      )}
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                      ${Product(
                        products[2],
                        "left",
                        `color: ${color || "#000000"}`
                      )}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <!-- 3-4 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                      ${Product(
                        products[3],
                        "left",
                        `color: ${color || "#000000"}`
                      )}
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                      ${Product(
                        products[4],
                        "left",
                        `color: ${color || "#000000"}`
                      )}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
                <td class="newsletterBottom35px">
                </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%">
            ${BigProduct(
                products[5],
                "left",
                `color: ${color || "#000000"}`
            )}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px">
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom80px">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                  ${
                    ctaComponent
                      ? ctaComponent(href, cta)
                      : `
                      <a href="${href}" style="color:${
                          color || "#000"
                        }; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                      </a>
                    `
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td class="newsletterContainer">
            ${Line()}
        </td>
      </tr>
    </tbody>
  </table>
  `;
    }

    if (type === "image") {
      return `
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
      <thead>
        <tr>
          <td>
            ${ImageWithLink({ href: href, src: src, alt: name })}
          </td>
        </tr>
      </thead>
    </table>
    `;
    }
  }
);