import { isAllowToRender } from "../helpers/optimizeImage.js";
import { Space } from "./Space.js";

export const FreeTimer = isAllowToRender(({ href, timertitle1, timertitle2, timersn, timersrc, freesrc, color, align = "left" }) => {
  
  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tbody>
        <tr>
            <td class="newsletterBottom10px">
            </td>
        </tr>
        <tr>
            <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="center">
                                <span class="timerParagraph" style="color: #000000">
                                    ${timertitle1}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>

        <tr>
            <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="center">
                                <span class="timerParagraph" style="color: #000000">
                                    ${timertitle2}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td class="newsletterBottom10px">
            </td>
        </tr>
        <tr>
            <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                <a href="${href}">
                    <img alt="timer" src="${timersrc}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                </a>
            </td>
        </tr>
        <tr>
            <td class="newsletterBottom20px">
            </td>
        </tr>
        <tr>
            <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                <a href="${href}" style="color: #000000; text-decoration: underline;">
                    <span class="newsletterCta">${timersn}</span>
                </a>
            </td>
        </tr>
        <tr>
            <td class="newsletterBottom20px">
            </td>
        </tr>
        <tr>
            <td>
                <a href="${href}">
                    <img alt="freebes" src="${freesrc}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                </a>
            </td>
        </tr>
    </tbody>
  </table>
    `;
})