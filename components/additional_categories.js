export function AdditionalCategories({
    href,
    src,
    name,
    paddingside,
}) {
    return `
        <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="${paddingside}">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tbody>
                    <tr>
                        <td>
                            <a href="${href}">
                                <img src="${src}" style="display: block;" width="100%">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="newsletterBottom35px">
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="text-align: center;">
                            <a class="newsletterTitleAdditional" href="${href}" style="color: #000000; text-decoration: underline;">
                                ${name}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="newsletterBottom70px">
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    `;
}