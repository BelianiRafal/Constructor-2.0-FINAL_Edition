export function GetCodeBlockNL({ type, title1, title2, title3, title4, title5, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, href, text }) {

      if (type === "newsletter") {
        return `
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
            <tbody>
                <tr>
                  <td class="newsletterBottom35px"></td>
                </tr>
                <tr>
                  <td align="center">
                      <span class="newsletterTitle" style="color: "#ffffff">
                          ${title1}
                      </span>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom35px"></td>
                </tr>
                <tr>
                  <td align="center">
                      <span class="newsletterTitle" style="color: "#ffffff">
                          ${title2}
                      </span>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom20px"></td>
                </tr>
                <tr>
                  <td align="center" style="color: "#ffffff">
                      <span class="newsletterParagraph">
                          ${paragraph1}
                      </span>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom35px"></td>
                </tr>
                <tr>
                  <td align="center">
                      <span class="newsletterTitle" style="color: "#ffffff">
                          ${title3}
                      </span>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom20px"></td>
                </tr>
                <tr>
                  <td align="center" style="color: "#ffffff">
                      <span class="newsletterParagraph">
                          ${paragraph2}
                      </span>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom35px"></td>
                </tr>
                <tr>
                  <td align="center">
                      <span class="newsletterTitle" style="color: "#ffffff">
                          ${title4}
                      </span>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom20px"></td>
                </tr>
                <tr>
                  <td align="center" style="color: "#ffffff">
                      <span class="newsletterParagraph">
                          ${paragraph3}
                      </span>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom35px"></td>
                </tr>
                <tr>
                  <td align="center">
                      <span class="newsletterTitle" style="color: "#ffffff">
                          ${title5}
                      </span>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom20px"></td>
                </tr>
                <tr>
                  <td align="center" style="color: "#ffffff">
                      <span class="newsletterParagraph">
                          ${paragraph4}
                      </span>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom60px"></td>
                </tr>
                <tr>
                  <td align="center">
                    <a href=${href} style="text-decoration:underline!important;color:#ffffff">
                        <span class="newsletterTitleCode" style="color: #ffffff">
                          ${text}
                        </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="newsletterBottom60px"></td>
                </tr>
                <tr>
                  <td align="center" style="color: "#ffffff">
                      <span class="newsletterParagraph">
                          ${paragraph5}
                      </span>
                  </td>
                </tr>
            </tbody>
          </table>
        `
      }
}