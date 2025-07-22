import { isAllowToRender, optimize } from "../helpers/optimizeImage.js";

export const InsideWithLink = isAllowToRender(
  optimize(({ insidehref, insidesrc, insidealt = "" }) => {
    return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%" >
        <tbody>
            <tr>
                <td>
                    <a href="${insidehref}">
                        <img alt="${insidealt}" src="${insidesrc}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  `;
  })
);
