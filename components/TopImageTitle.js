import { isAllowToRender, optimize } from "../helpers/optimizeImage.js";
import { Space } from "../components/Space.js";

export const TopImageTitle = isAllowToRender(
  optimize(({ href, title1, title2, color, type }) => {
    if (!type) return "Please specify type of TiT.";

    const templates = {
      up_to: `
        <h4 style="color:${color};" class="${title1.includes('%') ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title1}</h4>
        <h5 style="color:${color};" class="${title2.includes('%') ? 'newsletterTitleH1' : 'newsletterTitleH2'}">${title2}</h5>
      `,
      standard: `
        <h5 style="color:${color};" class="newsletterTitleH1">${title1}</h5>
        <h4 style="color:${color};" class="newsletterTitleH2">${title2}</h4>
      `,
      twoSameLines: `
        <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
        <h4 style="color:${color};" class="newsletterTitleH1">${title2}</h4>
      `,
      singleLine: `
        <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
      `,
      birthday: `
        <h4 style="color:${color};" class="${title1.includes('%') ? 'newsletterTitleH1Bigger' : 'newsletterTitleH1Bold'}">${title1}</h4>
        <h5 style="color:${color};" class="${title2?.includes('%') ? 'newsletterTitleH1Bigger' : 'newsletterTitleH1Bold'}">${title2 ?? ''}</h5>
    `,
      firstbig: `
        <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
        <h5 style="color:${color};" class="newsletterTitleH2">${title2}</h5>
      `,
      secondbig: `
      <h5 style="color:${color};" class="newsletterTitleH2">${title1}</h4>
      <h4 style="color:${color};" class="newsletterTitleH1">${title2}</h5>
    `,
    };

    return `
      <table border="0" cellspacing="0" cellpadding="0" width="100%">
        <tbody>
          <tr>
            <td>
              <a class="newsletterHrefTit" href="${href}">
                ${Space()}
                ${templates[type] || "Invalid type"}
                ${Space()}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  })
);
