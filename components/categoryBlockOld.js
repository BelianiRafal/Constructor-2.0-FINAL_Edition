import { isAllowToRender } from "../helpers/optimizeImage.js";
import { ImageWithLink, Product, Title, Paragraph } from "./index.js";

export const CategoryBlockOld = isAllowToRender(
  ({
    href1,
    href2,
    src1,
    src2,
    type = "wednesday",
  }) => {
    if (type === "wednesday") {
      return `
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tr>
              <td class="newsletterBottom10px">
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                        <a href="${href1}">
                            <img src="${src1}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                        </a>
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                        <a href="${href2}">
                            <img src="${src2}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                        </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `;
    }
  }
);
