import { isAllowToRender } from "../helpers/optimizeImage.js";
import { ImageWithLink, Line, Product, Space, Title } from "./index.js";

export const TwoCategory = isAllowToRender(
  ({
    hrefLeft,
    hrefRight,
    scrLeft,
    srcRight,
  }) => {

      return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tbody>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" style="width: 100%;">
            <tr>
              <td>
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight5px">
                        <a href="${hrefLeft}">
                            <img alt="CategoryLeft" src="${scrLeft}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                        </a>
                    </td>
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft5px">
                        <a href="${hrefRight}">
                            <img alt="CtageoryRight" src="${srcRight}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                        </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  `;
  }
);