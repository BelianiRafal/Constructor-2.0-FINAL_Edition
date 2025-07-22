import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  GetCode,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Freebies,
  Product,
  ProductWithSize,
} from "../components/index.js";

export async function newsletter_FGG({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  origin,
  country,
  type,
  background,
}) {
  return `
  ${Header(
    {
      id,
      advantages: {
        freeDelivery: getHeader("Free Delivery"),
        daysReturn: getHeader("365-Day Return"),
      },
      paragraph: {
        troubleViewing: getHeader("Trouble viewing"),
        troubleViewingHrefText: getHeader("Trouble viewing href text"),
        addBeliani: getHeader("Add Beliani to your"),
        whiteList: getHeader("Whitelist"),
        whitelistHref: getHeader("Whitelist href"),
      },
      topImage: {
        src: getHeader("Top image src"),
        href: getHeader("Top image href"),
      },
      categories: {
        firstCategory: {
          src: getHeader("Header Category 1 src"),
          href: getHeader("Header Category 1 href"),
        },
        secondCategory: {
          src: getHeader("Header Category 2 src"),
          href: getHeader("Header Category 2 href"),
        },
        thirdCategory: {
          src: getHeader("Header Category 3 src"),
          href: getHeader("Header Category 3 href"),
        },
      },
      assembly: {
        src: ["AT", "PL", "FR", "UK"].includes(country)
          ? ["#fd9000"].includes(background)
            ? getHeader("Header delivery_cosy src")
            : getHeader("Header delivery src")
          : ["#750000"].includes(background)
          ? getHeader("Header asembly src")
          : getHeader("Header asembly_cosy src"),
        href: getHeader("Header asembly href"),
        exclude: true,
      },
    },
    { type }
  )}
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ffffff;" id="newsletter">
  <tbody>
  <tr>
    <td align="center">
      
  <table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;">
  <tbody>
      <tr>
          <td>
              <a href="${links[0]}">
                  <img alt="" src="${
                    links[1]
                  }" style="display: block; width: 100%">
              </a>
          </td>
      </tr>
  </tbody>
  </table>
  
    </td>
  </tr>
  <tr>
    <td align="center">
      
  <table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;">
  <tbody>
      <tr>
          <td>
              <a href="${links[2]}">
                  <img alt="" src=${
                    links[3]
                  } style="display: block; width: 100%">
              </a>
          </td>
      </tr>
  </tbody>
  </table>
  
    </td>
  </tr>
  <tr>
  <td>
    
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom35px">
      </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
    <td align="center" class="newsletterContainer">
        
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterParagraph">
                ${queries.intro}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
    </td>
  </tr>
  <tr>
  <td>
    
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom35px">
      </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  
  <tr>
  <td align="center" class="newsletterContainer">
    
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/outdoor-furniture/"
                )}">
                  <img src="https://beliani.info/newsletter/2022/240223Category1.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
            ${queries.categoryTitle[0]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/outdoor-furniture/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
            ${queries.categoryTitle[1]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/sofas/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategoryLink("https://www.beliani.ch/sofas/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category2.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
  <td class="newsletterBottom20px">
  </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr> 
  </tbody>
  </table>
        
  <table cellspacing="0" cellpadding="0" style="width: 100%;">
  <tbody>
  <tr>
  <td width="50%">
  <a href="${getCategoryLink("https://www.beliani.ch/beds/")}">
  <img src="https://beliani.info/newsletter/2022/240223Category3.png" alt="" style="display: block; max-width: 100%;">
  </a>
  </td>
  <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
  
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
  <td align="center">
  <span class="newsletterTitle">
  ${queries.categoryTitle[2]}
  </span>
  </td>
  </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/beds/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
  ${queries.categoryTitle[3]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/armchairs/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategoryLink("https://www.beliani.ch/armchairs/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category4.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr> 
          </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategoryLink("https://www.beliani.ch/chairs/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category5.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[4]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/chairs/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[5]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/tables/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategoryLink("https://www.beliani.ch/tables/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category6.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr> 
          </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategoryLink("https://www.beliani.ch/storage/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category7.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[6]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/storage/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[7]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/lighting/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategoryLink("https://www.beliani.ch/lighting/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category8.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr> 
          </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/bathtubs-hot-tubs/"
                )}">
                  <img src="https://beliani.info/newsletter/2022/240223Category9.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[8]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/bathtubs-hot-tubs/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[9]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/office-furniture/desks-eng/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/office-furniture/desks-eng/"
                )}">
                  <img src="https://beliani.info/newsletter/2022/240223Category10.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr> 
          </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategoryLink("https://www.beliani.ch/rugs/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category11.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[10]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/rugs/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[11]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/home-accessories/"
                )}" style="color: #000000;  text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
              <td width="50%">
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/home-accessories/"
                )}">
                  <img src="https://beliani.info/newsletter/2022/240223Category12.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr> 
          </tbody>
        </table>
        
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <tbody>
            <tr>
              <td width="50%">
                <a href="${getCategoryLink("https://www.beliani.ch/textiles/")}">
                  <img src="https://beliani.info/newsletter/2022/240223Category13.png" alt="" style="display: block; max-width: 100%;">
                </a>
              </td>
              <td align="center" width="50%" style="vertical-align: middle; width: 50%; background-color: #fee3bf;">
                
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
    <tr>
        <td align="center">
            <span class="newsletterTitle">
                ${queries.categoryTitle[12]}
            </span>
        </td>
    </tr>
  </tbody>
  </table>
  
                <a href="${getCategoryLink(
                  "https://www.beliani.ch/textiles/"
                )}" style="color: #000000; text-decoration: underline;">
                  <span style="color: #000000; " class="newsletterCta">${
                    queries.shopNow
                  }</span>
                </a>
              </td>
            </tr>
            <tr>
            <td>
              
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom20px">
      </td>
  </tr>
  </tbody>
  </table>
  
            </td>
          </tr>
          </tbody>
        </table>
  
        
  </td>
  </tr>
  <tr>
  <td>
    
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
      <td class="newsletterBottom60px">
      </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
  <td align="center" class="newsletterContainer">
    
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
  <tbody>
  <tr>
  <td>
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tbody>
      <tr>
        <td align="center" class="newsletterBottom35px">
          <span class="newsletterTitle">
            ${queries.voucher[0]}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  </td>
  </tr>
  <tr>
  <td>
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
    <tbody>
      <tr>
        <td align="center">
          <span class="newsletterParagraph">
            ${queries.voucher[1]}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
  <td>
    
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
  <td class="newsletterBottom35px">
  </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
  <td class="newsletterContainer">
    
  <table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;">
  <tbody>
      <tr>
          <td>
              <a href="${getCategoryLink("https://www.beliani.ch/gift-cards/")}">
                  <img alt="" src="https://beliani.info/newsletter/2022/240223Voucher.png" style="display: block; width: 100%">
              </a>
          </td>
      </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
  <td>
    
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
  <tbody>
  <tr>
  <td class="newsletterBottom35px">
  </td>
  </tr>
  </tbody>
  </table>
  
  </td>
  </tr>
  <tr>
  <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px;" class="newsletterBottom80px">
    <table cellspacing="0" cellpadding="0" style="width: 100%; ">
      <tbody>
        <tr>
          <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
            <a href="${getCategoryLink(
              "https://www.beliani.ch/gift-cards/"
            )}" style="color:#000; text-decoration: underline;">
              <span class="newsletterCta">${queries.shopNow}</span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
  </tr>
  </tbody></table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;">
              <tbody>
                  <tr>
                      <td align="left">
                          <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                              <tbody>
                              <tr>
                                <td class="newsletterBottom35px" >
                                  ${Line()}
                                </td>
                              </tr>
                                  <tr>
                                      <td align="left" class="newsletterBottom35px">
                                          <span class="newsletterFooterTitle">${getPhrase(
                                            "Shop limited-time deals"
                                          )}</span>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="left" class="newsletterBottom20px">
                                          <a href=${links[4]}>
                                              <img loading="lazy" src=${
                                                links[5]
                                              } style="display: block;" width="100%">
                                          </a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="left" class="newsletterBottom35px">
                                          <a href=${links[6]}>
                                              <img loading="lazy" src=${
                                                links[7]
                                              } style="display: block;" width="100%">
                                          </a>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
              </tbody>
          </table>
      ${Footer(
        {
          id,
          assembly: {
            src: ["AT", "PL", "FR", "UK"].includes(country)
              ? getFooter("Delivery src")
              : getFooter("Asembly src"),
            href: getFooter("Asembly href"),
            exclude: ["SK", "CHIT", "SE", "NO", "FI", "BEFR", "BENL"].includes(
              country
            ),
          },
          workBanner: {
            src: getFooter("Job src"),
            href: getFooter("Job href"),
            exclude: !["PL"].includes(country),
          },
          thousandsMore: {
            title: getFooter("Title"),
            firstCategory: {
              src: getFooter("Category src 1"),
              href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter("Category src 2"),
              href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href: getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter("Category src 5"),
              href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter("Category src 6"),
              href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter("Category src 7"),
              href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter("Category src 8"),
              href: getFooter("Category href 8"),
            },
          },
          klarna: {
            src: getFooter("Klarna src"),
            href: getFooter("Klarna href"),
            exclude: ["SK", "HU", "BEFR", "BENL"].includes(country),
          },
          socials: {
            title: getFooter("Socials Title"),
            instagram: {
              src: getFooter("Instagram src"),
              href: getFooter("Instagram href"),
            },
            facebook: {
              src: getFooter("Facebook src"),
              href: getFooter("Facebook href"),
            },
            youtube: {
              src: getFooter("Youtube src"),
              href: getFooter("Youtube href"),
            },
            pinterest: {
              src: getFooter("Pinterest src"),
              href: getFooter("Pinterest href"),
            },
            Xsocial: {
              src: getFooter("X src"),
              href: getFooter("X href"),
            },
            Tiktok: {
              src: getFooter("Tiktok src"),
              href: getFooter("Tiktok href"),
            },
          },
          advantages: {
            firstAdvantage: {
              src: getFooter("Advantages src 1"),
              href: getFooter("Advantages href 1"),
            },
            secondAdvantage: {
              src: getFooter("Advantages src 2"),
              href: getFooter("Advantages href 2"),
            },
            thirdAdvantage: {
              src: getFooter("Advantages src 3"),
              href: getFooter("Advantages href 3"),
            },
            fourthAdvantage: {
              src: getFooter("Advantages src 4"),
              href: getFooter("Advantages href 4"),
            },
          },
          conditions: {
            conditionsTitle: getFooter("Conditions title"),
            conditionsText: queries.condition,
          },
          companyDetails: {
            title: getFooter("Company Details"),
            address: getFooter("Address"),
            mobileNumber: getFooter("Mobile number"),
            emailAddress: getFooter("Email address"),
            mailTo: getFooter("Mail to"),
            email: getFooter("Email"),
            commercialRegister: getFooter("Commercial register"),
            vat: getFooter("VAT"),
          },
        },
        { type }
      )}
    `;
}
