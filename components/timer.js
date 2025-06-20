import { Space } from "./Space.js";

export const Timer = ({
  title,
  subtitle,
  href,
  imageSrc,
  cta,
  type,
  insidehref,
  insidesrc,
}) => {

    if (type === "gif_on_the_left_side") {
        return `
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                    <td align="center">
                        <a href=${href}>
                            <img src="https://upload.pictureserver.net/static/2024/test_gif.gif" style="display: block; max-width: 100%;">
                        </a>
                    </td>
                    <td align="right" style="padding-top: 20px; padding-bottom: 20px;">
                        <span class="newsletterSubtitleTimer" style="color: #ffffff">
                            ${title}
                        </span>

                        ${Space({className: "newsletterBottom60px"})}
            
                        <a href=${href}>
                            <img src="${imageSrc}" style="display: block; max-width: 100%;">
                        </a>

                        ${Space({className: "newsletterBottom60px"})}

                        <a href="${href}" style="color:#fff; text-decoration: underline;">
                            <span class="newsletterCta">${cta}</span>
                        </a>
                    </td>
                </tr>
            </table>
        `;
    }

  return `
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
            <tr>
                <td align="center" style="color: #000000">
                    ${Space({className: "newsletterBottom10px"})}
                </td>
            </tr>
            <tr>
                <td align="center">
                    <span class="newsletterSubtitleTimer" style="color: #000000">
                        ${title}
                    </span>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <span class="newsletterSubtitleTimer" style="color: #000000">
                        ${subtitle}
                    </span>
                </td>
            </tr>
            <tr>
                <td align="center" style="color: #000000">
                    ${Space({className: "newsletterBottom20px"})}
                </td>
            </tr>
            <tr>
                <td align="center" style="padding-left: 60px; padding-right: 60px;">
                    <a href=${href}>
                        <img src="${imageSrc}" style="display: block; max-width: 100%;">
                    </a>
                </td>
            </tr>
            <tr>
                <td align="center" style="color: #000000">
                    ${Space({className: "newsletterBottom20px"})}
                </td>
            </tr>
            <tr>
                <td align="center">
                    <a href="${href}" style="color:#000000; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                    </a>
                </td>
            </tr>
            <tr>
            <td align="center" style="color: #000000">
                    ${Space({className: "newsletterBottom20px"})}
                </td>
            </tr>
            <tr>
                <td>
                    <a href="${insidehref}">
                        <img alt="Freebe image" src="${insidesrc}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                    </a>
                </td>
            </tr>
        </table>
  `;
};
