import { isAllowToRender } from "../helpers/optimizeImage.js";
import { ImageWithLink, ProductFree, Title } from "./index.js";

export const OfferFreeLP = isAllowToRender(
  ({
    name,
    desc,
    href,
    src,
    phref,
    psrc,
    pname,
    plow,
    product,
    products,
    ctaComponent,
    color,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    ctahref,
    ctatext,
    free,
    align,
    type = "wednesday",
  }) => {
    if (type === "wednesday") {
      return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
    <thead>
      <tr>
        <td class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td align="center">
                            <span class="newsletterParagraph" style="color: #ffffff">
                                ${paragraph1}
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
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
              <tbody>
                  <tr>
                      <td align="center">
                          <span class="newsletterParagraph" style="color: #ffffff">
                              ${paragraph2}
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
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
              <tbody>
                  <tr>
                      <td align="center">
                          <span class="newsletterCodeParagraph" style="color: #ffffff">
                              ${paragraph3}
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
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td align="center">
                            <span class="newsletterParagraph" style="color: #ffffff">
                                ${paragraph4}
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
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td align="center">
                            <span class="newsletterParagraph" style="color: #ffffff">
                                ${paragraph5}
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
    </thead>
    <tbody>
      <tr>
        <td background-color: #750000; color: #000000;>
          <table cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="vertical-align: top; width: 50%;">
                  ${ProductFree(
                      products[0],
                      "center",
                      free,
                      `color: ${color || "#ffffff"}`,
                  )}
                </td>
                <td style="vertical-align: top; width: 50%;">
                  ${ProductFree(
                      products[1],
                      "center",
                      free,
                      `color: ${color || "#ffffff"}`
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
              <tr>
                <td class="newsletterBottom20px">
                </td>
              </tr>
            </tbody>
          </table>
          <table cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="vertical-align: top; width: 50%;">
                  ${ProductFree(
                      products[2],
                      "center",
                      free,
                      `color: ${color || "#ffffff"}`,
                  )}
                </td>
                <td style="vertical-align: top; width: 50%;">
                  ${ProductFree(
                      products[3],
                      "center",
                      free,
                      `color: ${color || "#ffffff"}`
                  )}
                </td>
              </tr>
            </tbody>
          </table>
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
                      ? ctaComponent(ctahref, ctatext)
                      : `
                      <a href="${ctahref}" style="color:${
                          color || "#ffffff"
                        }; text-decoration: underline;">
                        <span class="newsletterCta">${ctatext}</span>
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
