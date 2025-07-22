import { Footer } from "../components/footer.js";
import FreebiesGenerator from "../components/FreebiesGenerator.js";
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
  OfferPartCodes,
  TopImageTitle,
  Timer,
  shopNow
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { priceFree } from "../helpers/priceFree.js";
import { getCodes } from "../utils/getCodes.js";


/**
 * Funkcja generująca sekcje kategorii dla newslettera/landing page
 * Kolejność parametrów zgodna z wymaganiami
 */
function generateCategoriesSection(categories, queries, background, add_utm, white_line, full_img_width, getCategoryTitle, getProductById, getPhrase, getCategoryLink, id, typeCamp, specialHref) {
  let categoriesHTML = '';

  // Sprawdź czy tablica categories istnieje i ma elementy
  if (!categories || !categories.length) {
    return categoriesHTML;
  }
  
  // Sprawdź czy mamy tablicę queries.filters i określ jej długość
  const filtersLength = queries?.filters?.length || 0;
  let usedFiltersCount = 0; // Licznik użytych filtrów
  
  // Iteruj przez kategorie i generuj odpowiednie sekcje
  categories.forEach((category, index) => {
    // Określ typ kategorii na początku, bo będzie potrzebny też dla paddingu
    let categoryType = category.type || "monday"; // Domyślny typ
    
    // Sprawdź czy kategoria jest typem "no_products" (ma nazwę, ale nie ma produktów lub ma flagę isCategoriesDB)
    if ((category.name && (!category.products || category.products.length === 0)) || category.isCategoriesDB) {
      categoryType = "no_products";
    }
    
    // Sprawdź czy kategoria jest typem "image" (nie ma nazwy lub nazwa jest pusta)
    if (!category.name || category.name === "") {
      categoryType = "image";
    }
    
    // Użyj określonego typu jeśli jest już ustawiony
    if (category.type) {
      categoryType = category.type;
    }
    
    // Dodaj spacer dla każdej kategorii z odpowiednią klasą
    // Dla pierwszego elementu typu "monday" (z produktami) użyj newsletterBottom60px
    // Dla pozostałych pierwszy element bez klasy
    categoriesHTML += `
      <tr>
        <td style="background-color: ${category?.background || background};">
          ${index === 0 && categoryType === "wednesday" 
            ? Space({ className: "newsletterBottom60px" })
            : ''
          }
        </td>
      </tr>
    `;
     
    // Określ właściwy href na podstawie walidacji
    let categoryHref;
    
    // Sprawdź czy kategoria ma własny href
    if (category.href && category.href !== "") {
      // Jeśli kategoria ma już określony href, użyj go
      try {
        if (typeof getCategoryLink === 'function') {
          //const newLink = queries.catLink + '?utm_source=newsletter&utm_medium=email&utm_campaign=' + id
          categoryHref = getCategoryLink(category.href)
          
            // if  (category.name === 'King'){
            //   categoryHref = newLink

            // } 
        

          
        } else {
          categoryHref = category.href;
        }
      } catch (e) {
        // Jeśli getCategoryLink nie działa, użyj oryginalnego href
        categoryHref = category.href;
      }
    } else if (categories.href) {
      // Użyj ogólnego href dla wszystkich kategorii jeśli jest dostępny
      try {
        if (typeof getCategoryLink === 'function') {
          categoryHref = getCategoryLink(categories.href);
        } else {
          categoryHref = categories.href;
        }
      } catch (e) {
        // Jeśli getCategoryLink nie działa, użyj oryginalnego href
        categoryHref = categories.href;
      }
    } else if (usedFiltersCount < filtersLength) {
      // Jeśli href jest pusty i mamy dostępne filtry, użyj kolejnego filtra
      categoryHref = add_utm(queries.filters[usedFiltersCount]);
      usedFiltersCount++; // Zwiększ licznik użytych filtrów
    } else {
      // W przeciwnym razie użyj pustego stringa
      categoryHref = "";
    }
    
    // Przygotuj bezpieczne wywołanie getPhrase
    const safeGetPhrase = (text) => {
      try {
        if (typeof getPhrase === 'function') {
          return getPhrase(text);
        }
        return text;
      } catch (e) {
        return text;
      }
    };
     const newLink = typeCamp === 'newsletter' ? queries.catLink + '?utm_source=newsletter&utm_medium=email&utm_campaign=' + id : queries.catLink
    function split_categories(arr,index, includeIntro = false, isIntro = false){
      const name = [];
      const intro = [];
         if (includeIntro) {
          for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
              name.push(arr[i]);
            } else {
              intro.push(arr[i]);
            }
          }
          if(isIntro){
            return intro[index];
          }
          else{
            return name[index];
          }
          
        } else {
          return arr[index]; 
        }  
  }
    // Dodaj sekcję kategorii
    categoriesHTML += `
      <tr>
        <td style="background-color: ${category?.background || background}; color: ${category?.color || "#000000"}">
          ${Category({
            href: specialHref,
            name: queries?.categories && queries.categories[index]
              ? split_categories(queries.categories, index, true)
              : getCategoryTitle(category.name || ""),
            desc:split_categories(queries.categories, index, true, true),
            src: typeof category.src === 'object' && category.src.value ? category.src.value : category.src,
            cta: safeGetPhrase("Shop now"),
            color: category?.color,
            type: console.log(categoryType),
            img_class: (full_img_width === false ? "newsletterContainer" : ""),
            products: category.products ? category.products.map((item) =>
              getProductById(item.id, item.src, item.name)
            ) : [],
            // Dodaj dodatkowe parametry dla różnych typów
            classCtaSpace: index == categories.length - 1 ? "newsletterBottom35px" : 'newsletterBottom80px',
            idx: index, 
            len: categories.length - 1, // Ostatni element
            align: "left", // Ustawione na "left" zamiast "center"
            line: (white_line === true || white_line === "true") ? "https://pictureserver.net/static/2024/white_line.jpg" : "https://beliani.info/newsletter/2022/line.jpg",
          })}
        </td>
      </tr>
    `;
  });
  
  return categoriesHTML;
}

export async function fridayDziwnyNsltr({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  shop,
  utm,
  country,
  type,
  categories,
  freebies,
  background,
  tit,
  offerPart,
  intro,
  inside,
  date,
  add_utm,
  single_image,
  soon_banners,
  startId,
  white_line,
  full_img_width,
  gif_src,
}) {console.log(shop.slug)
  const codes = getCodes(queries);
  
const u_t_m = "?utm_source=newsletter&utm_medium=email&utm_campaign="  + id
  const categoriesSectionHTML = generateCategoriesSection(
    categories, 
    queries, 
    background, 
    add_utm,
    white_line,
    full_img_width,
    getCategoryTitle,
    getProductById, 
    getPhrase,
    getCategoryLink,
    id,
    type,
    type === "landing" ? queries.categoriesLink : queries.categoriesLink + u_t_m,
  );
  //console.log('origin includes PL:', origin);

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
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">
        <tbody>

              <tr>
                <td align="center">
                  ${(type === "newsletter" || !queries.tit) 
                    ? ImageWithLink({
                        href: links[0],
                        src: links[1],
                      })
                    : 
                    (!single_image ?

                      TopImageTitle({
                        href: links[0],
                        title1: queries.tit[0],
                        title2: queries.tit[1],
                        color: tit?.color || "#000",
                        type: tit?.type || "up_to",
                      })
                    :
                    ``)
                  }
                </td>
              </tr>
              <!-- Sprawdź czy masz dodany parametr single_image w Campaign jeśli się nie wyświetla -->
              ${!single_image ? 
                `<tr>
                    <td align="center">
                      ${ImageWithLink({
                        href: links[0],
                        src: links[3],
                      })}
                    </td>
                </tr>`
              : 
                ``
              }

              ${!inside || inside.type == "timer" ?
              `
                <tr>
                  <td style="background-color: ${background};">
                    ${Space()}
                  </td>
                </tr>
              `
              :
              `<tr>
                  <td style="background-color: ${inside.background || background}; color: ${inside.color || "#000"};">
                    ${Space()}
                    ${ImageWithLink({
                      href: links[8],
                      src: links[9],
                    })}
                    
                  </td>
              </tr>`
              }
             
              ${intro && intro.type != "paragraph" ? 
                `
                <tr>
                
                    <td class="newsletterContainer" style="background-color: #FEB24D;">
                    
                        ${Intro({
                          data: queries.intro,
                          color: intro?.color,
                          type: categories.some(cat => cat.products && cat.products.length > 0) ? undefined : "paragraph",
                          align: categories.some(cat => cat.products && cat.products.length > 0) ? undefined : "center",
                          title: {
                            className: "newsletterIntroTitle",
                          },
                        })}
                    </td>
                </tr>` 
                : `<tr>
                    <td class="newsletterContainer" style="background-color: #FEB24D;">
                        ${Intro({
                          data: queries.intro,
                          color: intro?.color,
                          type: "paragraph",
                          align: categories.some(cat => cat.products && cat.products.length > 0) ? undefined : "center",
                          title: {
                            className: "newsletterIntroTitle",
                          },
                        })}
                    </td>
                </tr>`
              }
              ${shopNow({
                href: type === "landing" ? queries.categoriesLink : queries.categoriesLink + u_t_m,
                cta: queries.cta,
                textColor: "#000000",
                backgorund: "#FEB24D",
              })}

              ${inside && inside.type == "timer" ?
              `<tr>
                  <td style="background-color:#FEB24D; color: ${intro.color || "#000"};">
                    ${Space()}
                  </td>
                </tr>
                <tr>
                  <td style="background-color:${inside.background || background}; color: ${inside.color || "#000"};">
                  ${Timer({
                    title:queries.timer[0],
                    subtitle: queries.timer[1],
                    href: links[2],
                    imageSrc: gif_src[country],
                    style: {
                      bgColor: inside.background,
                      textColor: inside.color,
                      align: "center",
                    },
                    cta: getPhrase("Shop now"),
                  })}
                  ${Space({ className: "newsletterBottom20px" })}
                  ${ImageWithLink({
                    href: links[2],
                    src: inside.src,
                  })}
                  </td>
                </tr>`
              :
              ``
              }
              
               ${!single_image ? 
                `<tr><td class="newsletterBottom60px"></td></tr>
                <tr>
                    <td align="center">
                      ${ImageWithLink({
                        href: type === "landing" ? queries.categoriesLink : queries.categoriesLink + u_t_m,
                        src: links[5],
                      })}
                    </td>
                </tr>
                <tr><td class="newsletterBottom35px"></td></tr>
                <tr>
                    <td class="newsletterContainer" style="background-color: ${intro.background || background};">
                        ${Intro({
                          data: queries.paragraph,
                          color: intro?.color,
                          type: "paragraph",
                          align: categories.some(cat => cat.products && cat.products.length > 0) ? undefined : "center",
                          title: {
                            className: "newsletterIntroTitle",
                          },
                        })}
                    </td>
                </tr>
                <tr><td class="newsletterBottom35px"></td></tr>`
              : 
                ``
              }
               ${freebies ?
              `
              
              <tr>
                <td style="background-color: ${ freebies.options.background || background }; color: ${ freebies.options?.color || "#000" };">
                ${FreebiesGenerator({
                  background,
                  freebies: freebies.items1,
                  getProductById,
                  normalPrice: true,
                })}
                  </td>
              </tr>
              <tr>
                  <td style="background-color: ${ freebies.options.background || background }; color: ${ freebies.options?.color || "#000" };">
                      ${Space({ className: "newsletterBottom35px" })}
                  </td>
              </tr>
             `
              :
              ''
              }
              <!-- Wstawienie wygenerowanych dynamicznie sekcji kategorii -->
              
              ${categoriesSectionHTML}

              ${!single_image ? 
                `<tr><td ></td></tr>
                <tr>
                    <td align="center">
                      ${ImageWithLink({
                        href: type === "landing" ? queries.categoriesLink : queries.categoriesLink + u_t_m,
                        src: links[6],
                      })}
                    </td>
                </tr>
                <tr><td class="newsletterBottom35px"></td></tr>
                <tr>
                    <td class="newsletterContainer" style="background-color: ${intro.background || background};">
                        ${new Paragraph({
                          paragraph: queries.split,
                          type: "split",
                          align: 'center',
                        }).htmlOutput }
                        
                    </td>
                </tr>
                <tr><td class="newsletterBottom35px"></td></tr>`
              : 
                ``
              }
               ${freebies ?
              `
              
              <tr>
                <td style="background-color: ${ freebies.options.background || background }; color: ${ freebies.options?.color || "#000" };">
                ${FreebiesGenerator({
                  background,
                  freebies: freebies.items2,
                  getProductById,
                  normalPrice: true,
                })}
                  </td>
              </tr>
              
             `
              :
              ''
              }
              ${shopNow({
                href: type === "landing" ? queries.categoriesLink : queries.categoriesLink + u_t_m,
                cta: queries.cta,
                textColor: "#000000",
                space: 80,
                backgorund: freebies.options.background
              })}
          <tbody>
      </table>
      ${ (type === "landing" && !soon_banners) || type === "newsletter"
        ?
        `<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
          <tbody>
            <tr>
              <td align="left">
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td>${Line()}</td>
                    </tr>
                    <tr>
                      <td class="newsletterBottom35px"></td>
                    </tr>
                    <tr>
                      <td align="left" class="newsletterBottom35px">
                        <span class="newsletterFooterTitle">${getPhrase("Shop limited-time deals")}</span>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" class="newsletterBottom20px">
                        ${ImageWithLink({
                          href: links[links.length - 4], // Przedostatnia para linków (href)
                          src: links[links.length - 3],  // Przedostatnia para linków (src)
                        })}
                      </td>
                    </tr>
                    <tr>
                      <td align="left" class="newsletterBottom35px">
                        ${ImageWithLink({
                          href: links[links.length - 2], // Ostatnia para linków (href)
                          src: links[links.length - 1],  // Ostatnia para linków (src)
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>`
        :
        ''
      }
       ${Footer(
        {
          id,
          assembly: {
            src: ["AT", "PL", "FR", "UK"].includes(country)
              ? getFooter("Delivery src")
              : getFooter("Asembly src"),
            href: getFooter("Asembly href"),
            exclude: ["CHIT"].includes(country),
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
              href: getCategoryLink("https://www.beliani.co.uk/sofas/all+products"),//href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter("Category src 2"),
              href: getCategoryLink("https://www.beliani.co.uk/beds/all+products"),//href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href: getCategoryLink("https://www.beliani.co.uk/tables/coffee-tables"),//href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href: getCategoryLink("https://www.beliani.co.uk/chairs/all+products"),//href: getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter("Category src 5"),
              href: getCategoryLink("https://www.beliani.co.uk/armchairs/all+products"),//href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter("Category src 6"),
              href: getCategoryLink("https://www.beliani.co.uk/storage/sideboards"),//href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter("Category src 7"),
              href: getCategoryLink("https://www.beliani.co.uk/lighting/all+products"),//href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter("Category src 8"),
              href: getCategoryLink("https://www.beliani.co.uk/rugs/all+products"),//href: getFooter("Category href 8"),
            },
          },
          klarna: {
            src: getFooter("Klarna src"),
            href: getFooter("Klarna href"),
            //exclude: ["HU"].includes(country),
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
