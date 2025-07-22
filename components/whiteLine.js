export function WhiteLine(img = "https://upload.pictureserver.net/static/2024/white_line.jpg") {
  return `
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
            <tr>
                <td>
                    <img src=${img} style="display:block" width="100%" alt="">
                </td>
            </tr>
        </tbody>
    </table>
    `;
}