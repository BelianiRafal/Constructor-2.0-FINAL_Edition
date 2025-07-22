import { isAllowToRender } from "../helpers/optimizeImage.js";
import { Space } from "./Space.js";

export const MyIntro = isAllowToRender(({ href, cathref, src, paragraph1, paragraph2, data, color, align = "left" }) => {
  
  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tbody>
        <tr>
            <td>
                <a href="${href}">
                    <img alt="first GIF" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                </a>
            </td>
        </tr>
        <tr>
            <td class="newsletterBottom35px">
            </td>
        </tr>
        <tr>
            <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left">
                                <span class="newsletterParagraph" style="color: #000000">
                                    ${paragraph1}
                                </span>
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
            <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                <a href="${cathref}" style="color: #000000; text-decoration: underline;">
                    <span class="newsletterCta">${paragraph2}</span>
                </a>
            </td>
        </tr>
        <tr>
            <td class="newsletterBottom35px">
            </td>
        </tr>
    </tbody>
  </table>
    `;
})