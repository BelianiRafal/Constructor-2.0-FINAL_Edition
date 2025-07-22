import { isAllowToRender, optimize } from "../helpers/optimizeImage.js";

export const ImageWithLinkThree = isAllowToRender(
  optimize(({ href, src, alt = "", attrs }) => {
    return `
  <table border="0" cellspacing="0" cellpadding="0" width="100%" >
        <tbody>
            <tr>
                <td>
                    <a href="${href}">
                        <img class="product-img" alt="${alt}" src="${src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  `;
  })
);
