import { isAllowToRender } from "../helpers/optimizeImage.js";
import { ImageWithLink, Product, Title } from "./index.js";
import { ProductIMG } from "./productIMG.js";

export const CategoryOld = isAllowToRender(
  ({
    name,
    href,
    src,
    products,
    ctaComponent,
    color,
    cta = "CTA",
    type = "monday",
  }) => {
    if (!type) {
      return "Please specify type category.";
    }

    if (type === "no_products") {
      return `
    <table border="0" cellspacing="0" cellpadding="0" width="100%">
      <tbody>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td>
            ${Title({ title: name, align: "left", color: color })}
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td>
            <a href="${href}">
              <img alt="${name}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
            </a>
          </td>
        </tr>
        <tr>
          <td class="newsletterBottom35px"></td>
        </tr>
        <tr>
          <td align="center">
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
    `;
    }

    if (type === "monday") {
      return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
    <thead>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          ${Title({ title: name, align: "left", color: color })}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td>
          ${ProductIMG(
            products[0],
            "left",
            `color: ${color || "#000000"}`
          )}
        </td>
      </tr>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tr>
              <td class="">
                <!-- 1-2 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 33,33%" class="newsletterRight10px">
                      ${ProductIMG(
                        products[1],
                        "left",
                        `color: ${color || "#000000"}`
                      )}
                    </td>
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 33,33%" class="">
                      ${ProductIMG(
                        products[2],
                        "left",
                        `color: ${color || "#000000"}`
                      )}
                    </td>
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 33,33%" class="newsletterLeft10px">
                      ${ProductIMG(
                        products[3],
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
        <td class="newsletterBottom35px">
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