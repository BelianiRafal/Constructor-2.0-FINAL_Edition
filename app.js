import { templates } from "./templates/index.js";
import { entities } from "./entities/index.js";
import types from "./utils/types.js";
import SHOPS from "./config/shops.js";
import { initApp } from "./main/initApp.js";

const config = {
  server_url: "https://pictureserver.net/static/2024/",
  campaign_url: "https://www.prologistics.info/news_email.php?id=",
  issue_url: "https://www.prologistics.info/react/logs/issue_logs/",
  alarm_days: 7,
  confetti: true,
  replaceToBrs: true,
  emptyCell: (message) => `<span style='font-size: 20px; background: #ff0000;'>${message || "Cell is empty"}</span>`,
};

/**
 * Aktualizuje rok w konfiguracji na podstawie aktualnego roku systemowego
 * @param {Object} config - Obiekt konfiguracyjny
 * @returns {Object} - Zaktualizowany obiekt konfiguracyjny
 */
function updateConfigWithCurrentYear(config) {
  const currentYear = new Date().getFullYear();
  config.server_url = config.server_url.replace(/\d{4}/, currentYear);
  return config;
}

/**
 * Pobiera i inkrementuje numer wersji dla danego obrazu
 * @param {string} imageName - Nazwa obrazu
 * @returns {number} - Zaktualizowany numer wersji
 */
function getImageVersion(imageName) {
  // Klucz do przechowywania wersji w localStorage
  const storageKey = "image_versions";

  // Pobierz zapisane wersje z localStorage
  let versionsMap = {};
  try {
    const storedVersions = localStorage.getItem(storageKey);
    if (storedVersions) {
      versionsMap = JSON.parse(storedVersions);
    }
  } catch (error) {
    console.warn("Błąd podczas odczytu wersji obrazów:", error);
  }

  // Sprawdź aktualną wersję obrazu lub ustaw domyślną wartość 1
  const currentVersion = versionsMap[imageName] || 1;

  // Inkrementuj wersję
  const newVersion = currentVersion + 1;

  // Zapisz zaktualizowaną wersję
  versionsMap[imageName] = newVersion;
  try {
    localStorage.setItem(storageKey, JSON.stringify(versionsMap));
  } catch (error) {
    console.warn("Błąd podczas zapisu wersji obrazów:", error);
  }

  return newVersion;
}

/**
 * Generuje URL obrazu z automatyczną inkrementacją numeru wersji
 * @param {string} imageName - Nazwa obrazu
 * @param {boolean|string} version - Wersja obrazu:
 *   - true/undefined: automatyczna inkrementacja
 *   - false: używa wersji 1
 *   - string/number: używa konkretnej wersji
 * @returns {string} - Pełny URL obrazu z parametrem wersji
 */
export function getImageUrl(imageName, version) {
  // Aktualizacja roku w konfiguracji
  const updatedConfig = updateConfigWithCurrentYear(config);

  // Obsługa różnych przypadków wersji
  let versionParam;

  // Jeśli wersja jest stringiem lub liczbą, użyj jej bezpośrednio
  if (typeof version === "string" || typeof version === "number") {
    versionParam = version;
  }
  // Jeśli wersja jest false, użyj stałej wartości 1
  else if (version === false) {
    versionParam = 1;
  }
  // W przeciwnym razie (wersja jest undefined, true lub inną wartością) użyj automatycznego wersjonowania
  else {
    versionParam = getImageVersion(imageName);
  }
  // Zwróć pełny URL z parametrem wersji
  return updatedConfig.server_url + imageName + "?ver=" + versionParam;
}

const check = getImageUrl("20250714_cat1.png", true);
console.log(check);

try {
  initApp({
    campaigns: [
      //18.08.25
      new entities.Campaign({
        startId: "35798",
        name: "Newsletter August peak 3rd",
        date: "2025.08.18",
        issueCardId: "371996",
        figmaUrl:
          "https://www.figma.com/design/kIc7sPOX4zT7l65pYOp17b/2025.08---Newsletter---August-Peak--Copy---Copy---Copy-?node-id=10002-646&p=f&t=z6f9YFfz85btltfx-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: false,
        white_line: false,
        full_img_width: false,
        alarm: {
          isActive: false,
        },
        isArchive: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.FrenchDays,
            background: "#FFCEB5",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCEB5",
              color: "#000000",
              align: "center",
            },
            categories: [
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat1.png", true),
                  },
                  href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat2.png", true),
                  },
                  href: "https://www.beliani.ch/sofas/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat3.png", true),
                  },
                  href: "https://www.beliani.ch/beds/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat4.png", true),
                  },
                  href: "https://www.beliani.ch/armchairs/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat5.png", true),
                  },
                  href: "https://www.beliani.ch/chairs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat6.png", true),
                  },
                  href: "https://www.beliani.ch/tables/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat7.png", true),
                  },
                  href: "https://www.beliani.ch/storage/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat8.png", true),
                  },
                  href: "https://www.beliani.ch/children-room/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat9.png", true),
                  },
                  href: "https://www.beliani.ch/textiles/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat10.png", true),
                  },
                  href: "https://www.beliani.ch/lighting/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat11.png", true),
                  },
                  href: "https://www.beliani.ch/bathtubs-hot-tubs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat12.png", true),
                  },
                  href: "https://www.beliani.ch/office-furniture/desks-eng/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat13.png", true),
                  },
                  href: "https://www.beliani.ch/rugs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat14.png", true),
                  },
                  href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                },
              ],
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-18",
                },
              },
              {
                value: getImageUrl("20250818_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-08",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250808b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250807b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "18.08.25 - August Peak 3rd!",
                tableRange: "13",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "26",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "18.08.25 - August Peak 3rd!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
{
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.FrenchDays,
            background: "#FFCEB5",
            css: types.CSS.LP,
            intro: {
              background: "#FFCEB5",
              color: "#000000",
              align: "center",
            },
            categories: [
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat1.png", true),
                  },
                  href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat2.png", true),
                  },
                  href: "https://www.beliani.ch/sofas/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat3.png", true),
                  },
                  href: "https://www.beliani.ch/beds/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat4.png", true),
                  },
                  href: "https://www.beliani.ch/armchairs/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat5.png", true),
                  },
                  href: "https://www.beliani.ch/chairs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat6.png", true),
                  },
                  href: "https://www.beliani.ch/tables/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat7.png", true),
                  },
                  href: "https://www.beliani.ch/storage/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat8.png", true),
                  },
                  href: "https://www.beliani.ch/children-room/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat9.png", true),
                  },
                  href: "https://www.beliani.ch/textiles/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat10.png", true),
                  },
                  href: "https://www.beliani.ch/lighting/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat11.png", true),
                  },
                  href: "https://www.beliani.ch/bathtubs-hot-tubs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat12.png", true),
                  },
                  href: "https://www.beliani.ch/office-furniture/desks-eng/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat13.png", true),
                  },
                  href: "https://www.beliani.ch/rugs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "38",
                    value:
                      getImageUrl("20250818_cat14.png", true),
                  },
                  href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                },
              ],
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-18",
                },
              },
              {
                value: getImageUrl("20250818_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-08",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250808b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250807b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "18.08.25 - August Peak 3rd!",
                tableRange: "13",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "26",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "18.08.25 - August Peak 3rd!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
{
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
        startId: "35766",
        name: "Newsleter August peak 2nd",
        date: "2025.08.11",
        issueCardId: "371996",
        figmaUrl:
          "https://www.figma.com/design/kIc7sPOX4zT7l65pYOp17b/2025.08---Newsletter---August-Peak--Copy---Copy---Copy-?node-id=10002-646&p=f&t=z6f9YFfz85btltfx-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: false,
        white_line: false,
        full_img_width: false,
        alarm: {
          isActive: false,
        },
        isArchive: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FEE3BF",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FEE3BF",
              color: "#000000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchair",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chair",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat8.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Lightning",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat9.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                name: "Bath",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat10.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desk",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat11.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat12.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accesories",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat13.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-11",
                },
              },
              {
                value: getImageUrl("20250811_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-31",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250731b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "26",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "30:31",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "13:25",
                name: "categories",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FEE3BF",
            css: types.CSS.LP,
            intro: {
              background: "#FEE3BF",
              color: "#000000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchair",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chair",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat8.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Lightning",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat9.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                name: "Bath",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat10.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desk",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat11.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat12.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accesories",
                background: "#FEE3BF",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250811Cat13.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-11",
                },
              },
              {
                value: getImageUrl("20250811_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-31",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250731b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "26",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "30:31",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "11.08.25 - August Peak 2nd!",
                tableRange: "13:25",
                name: "categories",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      //28.07.25
     new entities.Campaign({
        date: "2025.07.28",
        issueCardId: "384178",
        name: "Free picnic blanket",
        startId: "35606",
        figmaUrl:
          "https://www.figma.com/design/r6jH4RVhSlcO5zRaon2xi5/2025.07.28---Newsletter---Free-picnic-blankets--Copy-?node-id=10002-9061&t=F8gimslEysau97n0-0",
        alarm: {
          isActive: false,
        },
        isArchive: false,
        optimizeImg: false,
        under_intro_line: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250728Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
                products: [
                  {
                    id: "521156",
                    src: getImageUrl("20250728Category11.png", true),
                  },
                  {
                    id: "197502",
                    src: getImageUrl("20250728Category12.png", true),
                  },
                  {
                    id: "580449",
                    src: getImageUrl("20250728Category13.png", true),
                  },
                  {
                    id: "108682",
                    src: getImageUrl("20250728Category14.png", true),
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250728Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
                products: [
                  {
                    id: "311209",
                    src: getImageUrl("20250728Category21.png", true),
                  },
                  {
                    id: "82212",
                    src: getImageUrl("20250728Category22.png", true),
                  },
                  {
                    id: "555774",
                    src: getImageUrl("20250728Category23.png", true),
                  },
                  {
                    id: "517382",
                    src: getImageUrl("20250728Category24.png", true),
                  },
                ],
              },
              {
                name: "Benches",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250728Category3.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
                products: [
                  {
                    id: "585509",
                    src: getImageUrl("20250728Category31.png", true),
                  },
                  {
                    id: "365818",
                    src: getImageUrl("20250728Category32.png", true),
                  },
                  {
                    id: "441941",
                    src: getImageUrl("20250728Category33.png", true),
                  },
                  {
                    id: "385897",
                    src: getImageUrl("20250728Category34.png", true),
                  },
                ],
              },
              {
                name: "Outdoor cushions",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250728Category4.png", true),
                href: "https://www.beliani.ch/outdoor-textiles/cushions-for-garden/",
                products: [
                  {
                    id: "613583",
                    src: getImageUrl("20250728Category41.png", true),
                  },
                  {
                    id: "613091",
                    src: getImageUrl("20250728Category42.png", true),
                  },
                  {
                    id: "613451",
                    src: getImageUrl("20250728Category43.png", true),
                  },
                  {
                    id: "613111 ",
                    src: getImageUrl("20250728Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250728_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-28",
                },
              },
              {
                value: getImageUrl("20250728_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-18",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250718b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250717b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "31:35",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "40",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "36:39",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "45:47",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "564690",
                      src: getImageUrl("20250728Freebie1.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                      size: '150 x 200 cm',
                    },
                    {
                      id: "564651",
                      src: getImageUrl("20250728Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                      size: '150 x 200 cm',
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "564480",
                      src: getImageUrl("20250728Freebie3.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                      size: '150 x 200 cm',
                    },
                    {
                      id: "564461",
                      src: getImageUrl("20250728Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                      size: '150 x 200 cm',
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250728Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
                products: [
                  {
                    id: "521156",
                    src: getImageUrl("20250728Category11.png", true),
                  },
                  {
                    id: "197502",
                    src: getImageUrl("20250728Category12.png", true),
                  },
                  {
                    id: "580449",
                    src: getImageUrl("20250728Category13.png", true),
                  },
                  {
                    id: "108682",
                    src: getImageUrl("20250728Category14.png", true),
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250728Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
                products: [
                  {
                    id: "311209",
                    src: getImageUrl("20250728Category21.png", true),
                  },
                  {
                    id: "82212",
                    src: getImageUrl("20250728Category22.png", true),
                  },
                  {
                    id: "555774",
                    src: getImageUrl("20250728Category23.png", true),
                  },
                  {
                    id: "517382",
                    src: getImageUrl("20250728Category24.png", true),
                  },
                ],
              },
              {
                name: "Benches",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250728Category3.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
                products: [
                  {
                    id: "585509",
                    src: getImageUrl("20250728Category31.png", true),
                  },
                  {
                    id: "365818",
                    src: getImageUrl("20250728Category32.png", true),
                  },
                  {
                    id: "441941",
                    src: getImageUrl("20250728Category33.png", true),
                  },
                  {
                    id: "385897",
                    src: getImageUrl("20250728Category34.png", true),
                  },
                ],
              },
              {
                name: "Outdoor cushions",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250728Category4.png", true),
                href: "https://www.beliani.ch/outdoor-textiles/cushions-for-garden/",
                products: [
                  {
                    id: "613583",
                    src: getImageUrl("20250728Category41.png", true),
                  },
                  {
                    id: "613091",
                    src: getImageUrl("20250728Category42.png", true),
                  },
                  {
                    id: "613451",
                    src: getImageUrl("20250728Category43.png", true),
                  },
                  {
                    id: "613111 ",
                    src: getImageUrl("20250728Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250728_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-28",
                },
              },
              {
                value: getImageUrl("20250728_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-18",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250718b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250717b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "31:35",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "40",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "36:39",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.07.25 - Free picnic blankets!",
                tableRange: "45:47",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "564690",
                      src: getImageUrl("20250728Freebie1.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                    },
                    {
                      id: "564651",
                      src: getImageUrl("20250728Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "564480",
                      src: getImageUrl("20250728Freebie3.png", true),
                      style: "padding-right: 5px; padding-left: 10px;",
                    },
                    {
                      id: "564461",
                      src: getImageUrl("20250728Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 5px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      //21.07.25
      new entities.Campaign({
        date: "2025.07.21",
        issueCardId: "381552",
        name: "Free wall art",
        startId: "35380",
        figmaUrl:
          "https://www.figma.com/design/dglbBtHL4nvc5RDvR1iN7M/2025.07.21---Free-wall-art--Copy-?node-id=0-1&p=f&t=FdYEj8itumbJ3k7S-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        under_intro_line: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250721Category1.png", true),
                href: "https://www.beliani.ch/beds/",
                products: [
                  {
                    id: "619891",
                    src: getImageUrl("20250721Category11.png", true),
                  },
                  {
                    id: "616415",
                    src: getImageUrl("20250721Category12.png", true),
                  },
                  {
                    id: "610567",
                    src: getImageUrl("20250721Category13.png", true),
                  },
                  {
                    id: "518913",
                    src: getImageUrl("20250721Category14.png", true),
                  },
                ],
              },
              {
                name: "Mattresses",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250721Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/mattresses/",
                products: [
                  {
                    id: "414109",
                    src: getImageUrl("20250721Category21.png", true),
                  },
                  {
                    id: "610414",
                    src: getImageUrl("20250721Category22.png", true),
                  },
                  {
                    id: "570747",
                    src: getImageUrl("20250721Category23.png", true),
                  },
                  {
                    id: "495205",
                    src: getImageUrl("20250721Category24.png", true),
                  },
                ],
              },
              {
                name: "Bedside tables",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250721Category3.png", true),
                href: "https://www.beliani.ch/storage/bedside-tables/",
                products: [
                  {
                    id: "624200",
                    src: getImageUrl("20250721Category31.png", true),
                  },
                  {
                    id: "609457",
                    src: getImageUrl("20250721Category32.png", true),
                  },
                  {
                    id: "607518",
                    src: getImageUrl("20250721Category33.png", true),
                  },
                  {
                    id: "391691",
                    src: getImageUrl("20250721Category34.png", true),
                  },
                ],
              },
              {
                name: "Dressing tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250721Category4.png", true),
                href: "https://www.beliani.ch/storage/dressing-tables/",
                products: [
                  {
                    id: "214136",
                    src: getImageUrl("20250721Category41.png", true),
                  },
                  {
                    id: "361452",
                    src: getImageUrl("20250721Category42.png", true),
                  },
                  {
                    id: "361361",
                    src: getImageUrl("20250721Category43.png", true),
                  },
                  {
                    id: "360774",
                    src: getImageUrl("20250721Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250721_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-21",
                },
              },
              {
                value: getImageUrl("20250721_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250711b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250710b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "15:16",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "18:22",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "27:28",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "33",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "24",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "22",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "29:32",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "38:40",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "226413",
                      src: getImageUrl("20250721Freebie1.png", true),
                      style: "padding-right: 5px; padding-left: 0px;",
                    },
                    {
                      id: "226327",
                      src: getImageUrl("20250721Freebie2.png", true),
                      style: "padding-right: 5px; padding-left: 5px;",
                    },
                    {
                      id: "226448",
                      src: getImageUrl("20250721Freebie3.png", true),
                      style: "padding-right: 0px; padding-left: 5px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "226449",
                      src: getImageUrl("20250721Freebie4.png", true),
                      style: "padding-right: 5px; padding-left: 0px;",
                    },
                    {
                      id: "231007",
                      src: getImageUrl("20250721Freebie5.png", true),
                      style: "padding-right: 5px; padding-left: 5px;",
                    },
                    {
                      id: "226459",
                      src: getImageUrl("20250721Freebie6.png", true),
                      style: "padding-right: 0px; padding-left: 5px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250721Category1.png", true),
                href: "https://www.beliani.ch/beds/",
                products: [
                  {
                    id: "619891",
                    src: getImageUrl("20250721Category11.png", true),
                  },
                  {
                    id: "616415",
                    src: getImageUrl("20250721Category12.png", true),
                  },
                  {
                    id: "610567",
                    src: getImageUrl("20250721Category13.png", true),
                  },
                  {
                    id: "518913",
                    src: getImageUrl("20250721Category14.png", true),
                  },
                ],
              },
              {
                name: "Mattresses",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250721Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/mattresses/",
                products: [
                  {
                    id: "414109",
                    src: getImageUrl("20250721Category21.png", true),
                  },
                  {
                    id: "610414",
                    src: getImageUrl("20250721Category22.png", true),
                  },
                  {
                    id: "570747",
                    src: getImageUrl("20250721Category23.png", true),
                  },
                  {
                    id: "495205",
                    src: getImageUrl("20250721Category24.png", true),
                  },
                ],
              },
              {
                name: "Bedside tables",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250721Category3.png", true),
                href: "https://www.beliani.ch/storage/bedside-tables/looks/",
                products: [
                  {
                    id: "624200",
                    src: getImageUrl("20250721Category31.png", true),
                  },
                  {
                    id: "609457",
                    src: getImageUrl("20250721Category32.png", true),
                  },
                  {
                    id: "607518",
                    src: getImageUrl("20250721Category33.png", true),
                  },
                  {
                    id: "391691",
                    src: getImageUrl("20250721Category34.png", true),
                  },
                ],
              },
              {
                name: "Dressing tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250721Category4.png", true),
                href: "https://www.beliani.ch/storage/dressing-tables/",
                products: [
                  {
                    id: "214136",
                    src: getImageUrl("20250721Category41.png", true),
                  },
                  {
                    id: "361452",
                    src: getImageUrl("20250721Category42.png", true),
                  },
                  {
                    id: "361361",
                    src: getImageUrl("20250721Category43.png", true),
                  },
                  {
                    id: "360774",
                    src: getImageUrl("20250721Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250721_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-21",
                },
              },
              {
                value: getImageUrl("20250721_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250711b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250710b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "15:16",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "18:22",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "27:28",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "33",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "24",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "22",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "29:32",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 21.07.25 - Free wall art!",
                tableRange: "38:40",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "226413",
                      src: getImageUrl("20250721Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "226327",
                      src: getImageUrl("20250721Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "226448",
                      src: getImageUrl("20250721Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "226449",
                      src: getImageUrl("20250721Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "231007",
                      src: getImageUrl("20250721Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "226459",
                      src: getImageUrl("20250721Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      //If you need img under Category
      new entities.Campaign({
        date: "2025.07.14",
        issueCardId: "378714",
        name: "Free tables",
        startId: "35220",
        figmaUrl:
          "https://www.figma.com/design/eETTfGpbqQsGbbq5gC77oC/Newsletter-Free-parasol---Monday-2025.07.14--Copy-?node-id=0-1&p=f&t=fCzmXljP1WKLFpXB-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        under_intro_line: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Outdoor furniture",
                background: "#FFCCB7",
                color: "#000000",
                align: 'center',
                src: getImageUrl("20250714Category1.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat1.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat2.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat3.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat4.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                  },
                ],
              },
              {
                name: "Outdoor accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category2.png", true),
                href: "https://www.beliani.ch/garden-furniture/garden-accessories/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat5.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/garden-accessories/fire-pits/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat6.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/garden-lanterns/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat7.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat8.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/garden-fountains/",
                  },
                ],
              },
              {
                name: "Outdoor seating",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category3.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat9.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat10.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat11.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat12.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/outdoor-pouffes/",
                  },
                ],
              },
              {
                name: "Outdoor dining",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat13.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat14.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/picnic-basket/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat15.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-textiles/picnic-blankets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat16.png", true),
                    },
                    href: "https://www.beliani.ch/home-accessories/kitchenware-tableware/",
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250714_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-14",
                },
              },
              {
                value: getImageUrl("20250714_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250704b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250703b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "15:16",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "18:22",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "27:28",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "49",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "24",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "22",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "29:32",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "54:56",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "56278",
                      src: getImageUrl("20250714Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "116296",
                      src: getImageUrl("20250714Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "56284",
                      src: getImageUrl("20250714Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "56281",
                      src: getImageUrl("20250714Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            tit: {
              color: "#000000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Outdoor furniture",
                background: "#FFCCB7",
                color: "#000000",
                align: 'center',
                src: getImageUrl("20250714Category1.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat1.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat2.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat3.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat4.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                  },
                ],
              },
              {
                name: "Outdoor accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category2.png", true),
                href: "https://www.beliani.ch/garden-furniture/garden-accessories/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat5.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/garden-accessories/fire-pits/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat6.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/garden-lanterns/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat7.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat8.png", true),
                    },
                    href: "https://www.beliani.ch/garden-accessories/garden-fountains/",
                  },
                ],
              },
              {
                name: "Outdoor seating",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category3.png", true),
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat9.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat10.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat11.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat12.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/outdoor-pouffes/",
                  },
                ],
              },
              {
                name: "Outdoor dining",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250714Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/",

                productImg: [
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat13.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat14.png", true),
                    },
                    href: "https://www.beliani.ch/garden-furniture/picnic-basket/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat15.png", true),
                    },
                    href: "https://www.beliani.ch/outdoor-textiles/picnic-blankets/",
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("20250714_cat16.png", true),
                    },
                    href: "https://www.beliani.ch/home-accessories/kitchenware-tableware/",
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250714_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-14",
                },
              },
              {
                value: getImageUrl("20250714_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250704b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250703b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "15:16",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "18:22",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "27:28",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "49",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "24",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "22",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "29:32",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 14.07.25 - Free parasol!",
                tableRange: "54:56",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "56278",
                      src: getImageUrl("20250714Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "116296",
                      src: getImageUrl("20250714Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "56284",
                      src: getImageUrl("20250714Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "56281",
                      src: getImageUrl("20250714Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),

      //Если что-то нужно будет в 08.04 отключить benl/befr
      new entities.Campaign({
        startId: "34641",
        name: "Newsletter August peak start",
        date: "2025.08.04",
        issueCardId: "371993",
        figmaUrl:
          "https://www.figma.com/design/kIc7sPOX4zT7l65pYOp17     b/2025.08---Newsletter---August-Peak--Copy---Copy---Copy-?node-id=10002-646&p=f&t=z6f9YFfz85btltfx-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: true,
        white_line: false,
        full_img_width: false,
        alarm: {
          isActive: false,
        },
        isArchive: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              color: "#000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Living Room",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat2.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Dining Room",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat3.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat4.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat5.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Office",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat6.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat7.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Kids",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat8.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-04",
                },
              },
              {
                value: getImageUrl("20250804_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250717b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250716b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "16",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "25",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "29:30",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "17:24",
                name: "categories",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              color: "#000000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Living Room",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat2.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Dining Room",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat3.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat4.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat5.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Office",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat6.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat7.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Kids",
                background: "#FFCCB7",
                color: "#000000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250804Cat8.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-08-04",
                },
              },
              {
                value: getImageUrl("20250804_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250717b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250716b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "16",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "25",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "29:30",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "04.08.25 - August Peak Start!",
                tableRange: "17:24",
                name: "categories",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.07.07",
        issueCardId: "376859",
        name: "Free animal rug",
        startId: "34609",
        figmaUrl:
          "https://www.figma.com/design/SOQnnTb5HPKdvatVTepxGL/2025.07.07---Newsletter---Free-animal-rug--Copy-?node-id=0-1&p=f&t=sfsBH8sQ8CfWEr1A-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250707Category1.png", true),
                href: "https://www.beliani.ch/children-room/kids-beds/?sort=newest",
                products: [
                  {
                    id: "618593",
                    src: getImageUrl("20250707Category11.png", true),
                  },
                  {
                    id: "618592",
                    src: getImageUrl("20250707Category12.png", true),
                  },
                  {
                    id: "610012",
                    src: getImageUrl("20250707Category13.png", true),
                  },
                  {
                    id: "595122",
                    src: getImageUrl("20250707Category14.png", true),
                  },
                ],
              },
              {
                name: "Textiles and playmats",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250707Category2.png", true),
                href: "https://www.beliani.ch/children-room/kids-duvet-covers-and-sheets/?sort=newest",
                products: [
                  {
                    id: "613828",
                    src: getImageUrl("20250707Category21.png", true),
                  },
                  {
                    id: "613886",
                    src: getImageUrl("20250707Category22.png", true),
                  },
                  {
                    id: "612996",
                    src: getImageUrl("20250707Category23.png", true),
                  },
                  {
                    id: "457133",
                    src: getImageUrl("20250707Category24.png", true),
                  },
                ],
              },
              {
                name: "Chairs and tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250707Category3.png", true),
                href: "https://www.beliani.ch/children-room/kids-chairs/?sort=newest",
                products: [
                  {
                    id: "609650",
                    src: getImageUrl("20250707Category31.png", true),
                  },
                  {
                    id: "610683",
                    src: getImageUrl("20250707Category32.png", true),
                  },
                  {
                    id: "609498",
                    src: getImageUrl("20250707Category33.png", true),
                  },
                  {
                    id: "593319",
                    src: getImageUrl("20250707Category34.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250707Category4.png", true),
                href: "https://www.beliani.ch/children-room/kids-storage/?sort=newest",
                products: [
                  {
                    id: "575422",
                    src: getImageUrl("20250707Category41.png", true),
                  },
                  {
                    id: "571428",
                    src: getImageUrl("20250707Category42.png", true),
                  },
                  {
                    id: "525379",
                    src: getImageUrl("20250707Category43.png", true),
                  },
                  {
                    id: "575345",
                    src: getImageUrl("20250707Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250707_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-07",
                },
              },
              {
                value: getImageUrl("20250707_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-27",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250627b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-26",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250626b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "37",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "33:36",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "41:43",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "407826",
                      src: getImageUrl("20250707Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "407724",
                      src: getImageUrl("20250707Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "407690",
                      src: getImageUrl("20250707Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    //if you have 5 freebies 4 and 5 added 60px
                    {
                      id: "407670",
                      src: getImageUrl("20250707Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 60px;",
                    },
                    {
                      id: "409966",
                      src: getImageUrl("20250707Freebie5.png", true),
                      style: "padding-right: 60px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250707Category1.png", true),
                href: "https://www.beliani.ch/children-room/kids-beds/?sort=newest",
                products: [
                  {
                    id: "618593",
                    src: getImageUrl("20250707Category11.png", true),
                  },
                  {
                    id: "618592",
                    src: getImageUrl("20250707Category12.png", true),
                  },
                  {
                    id: "610012",
                    src: getImageUrl("20250707Category13.png", true),
                  },
                  {
                    id: "595122",
                    src: getImageUrl("20250707Category14.png", true),
                  },
                ],
              },
              {
                name: "Textiles and playmats",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250707Category2.png", true),
                href: "https://www.beliani.ch/children-room/kids-duvet-covers-and-sheets/?sort=newest",
                products: [
                  {
                    id: "613828",
                    src: getImageUrl("20250707Category21.png", true),
                  },
                  {
                    id: "613886",
                    src: getImageUrl("20250707Category22.png", true),
                  },
                  {
                    id: "612996",
                    src: getImageUrl("20250707Category23.png", true),
                  },
                  {
                    id: "457133",
                    src: getImageUrl("20250707Category24.png", true),
                  },
                ],
              },
              {
                name: "Chairs and tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250707Category3.png", true),
                href: "https://www.beliani.ch/children-room/kids-chairs/?sort=newest",
                products: [
                  {
                    id: "609650",
                    src: getImageUrl("20250707Category31.png", true),
                  },
                  {
                    id: "610683",
                    src: getImageUrl("20250707Category32.png", true),
                  },
                  {
                    id: "609498",
                    src: getImageUrl("20250707Category33.png", true),
                  },
                  {
                    id: "593319",
                    src: getImageUrl("20250707Category34.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250707Category4.png", true),
                href: "https://www.beliani.ch/children-room/kids-storage/?sort=newest",
                products: [
                  {
                    id: "575422",
                    src: getImageUrl("20250707Category41.png", true),
                  },
                  {
                    id: "571428",
                    src: getImageUrl("20250707Category42.png", true),
                  },
                  {
                    id: "525379",
                    src: getImageUrl("20250707Category43.png", true),
                  },
                  {
                    id: "575345",
                    src: getImageUrl("20250707Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("202507-07_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-07",
                },
              },
              {
                value: getImageUrl("20250707_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-27",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250627b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-26",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250626b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "37",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "33:36",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.07.25 - Free animal rug!",
                tableRange: "41:43",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "407826",
                      src: getImageUrl("20250707Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "407724",
                      src: getImageUrl("20250707Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "407690",
                      src: getImageUrl("20250707Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "407670",
                      src: getImageUrl("20250707Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "409966",
                      src: getImageUrl("20250707Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.06.30",
        issueCardId: "374523",
        name: "Free tables",
        startId: "34513",
        figmaUrl:
          "https://www.figma.com/design/4fvUHnNL0FrbBN59xA5d9e/2025.06.30-Free-outdoor-cushion-set--Copy-?node-id=0-1&p=f&t=oJHBNBhbtub2l6qQ-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FF2F00",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,

            offerPart: {
              type: "code",
              color: "#FFFFFF",
              background: "#FF2F00",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250630Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
                products: [
                  {
                    id: "580449",
                    src: getImageUrl("20250630Category11.png", true),
                  },
                  {
                    id: "207309",
                    src: getImageUrl("20250630Category12.png", true),
                  },
                  {
                    id: "203277",
                    src: getImageUrl("20250630Category13.png", true),
                  },
                  {
                    id: "557328",
                    src: getImageUrl("20250630Category14.png", true),
                  },
                ],
              },
              {
                name: "Benches",
                background: "#FF2F00",
                color: "#ffffff",
                src: getImageUrl("20250630Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
                products: [
                  {
                    id: "585546",
                    src: getImageUrl("20250630Category21.png", true),
                  },
                  {
                    id: "198621",
                    src: getImageUrl("20250630Category22.png", true),
                  },
                  {
                    id: "185580",
                    src: getImageUrl("20250630Category23.png", true),
                  },
                  {
                    id: "385897",
                    src: getImageUrl("20250630Category24.png", true),
                  },
                ],
              },
              {
                name: "Swings",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250630Category3.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/swings/",
                products: [
                  {
                    id: "591546",
                    src: getImageUrl("20250630Category31.png", true),
                  },
                  {
                    id: "58864",
                    src: getImageUrl("20250630Category32.png", true),
                  },
                  {
                    id: "591734",
                    src: getImageUrl("20250630Category33.png", true),
                  },
                  {
                    id: "30189",
                    src: getImageUrl("20250630Category34.png", true),
                  },
                ],
              },
              {
                name: "Hanging chairs",
                background: "#FF2F00",
                color: "#ffffff",
                src: getImageUrl("20250630Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-hanging-chairs/",
                products: [
                  {
                    id: "311616",
                    src: getImageUrl("20250630Category41.png", true),
                  },
                  {
                    id: "356643",
                    src: getImageUrl("20250630Category42.png", true),
                  },
                  {
                    id: "590717",
                    src: getImageUrl("20250630Category43.png", true),
                  },
                  {
                    id: "612997",
                    src: getImageUrl("20250630Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-30",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250630_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-30",
                },
              },
              {
                value: getImageUrl("20250630_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-29",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250529b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250528b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "41:43",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#fff",
                background: "#FF2F00",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "420616",
                      src: getImageUrl("20250630Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "418329",
                      src: getImageUrl("20250630Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "419369",
                      src: getImageUrl("20250630Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "418963",
                      src: getImageUrl("20250630Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "420499",
                      src: getImageUrl("20250630Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "418352",
                      src: getImageUrl("20250630Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FF2F00",
            css: types.CSS.LP,
            tit: {
              color: "#fff",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#FFFFFF",
              background: "#FF2F00",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },

            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250630Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
                products: [
                  {
                    id: "580449",
                    src: getImageUrl("20250630Category11.png", true),
                  },
                  {
                    id: "207309",
                    src: getImageUrl("20250630Category12.png", true),
                  },
                  {
                    id: "203277",
                    src: getImageUrl("20250630Category13.png", true),
                  },
                  {
                    id: "557328",
                    src: getImageUrl("20250630Category14.png", true),
                  },
                ],
              },
              {
                name: "Benches",
                background: "#FF2F00",
                color: "#ffffff",
                src: getImageUrl("20250630Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
                products: [
                  {
                    id: "585546",
                    src: getImageUrl("20250630Category21.png", true),
                  },
                  {
                    id: "198621",
                    src: getImageUrl("20250630Category22.png", true),
                  },
                  {
                    id: "185580",
                    src: getImageUrl("20250630Category23.png", true),
                  },
                  {
                    id: "385897",
                    src: getImageUrl("20250630Category24.png", true),
                  },
                ],
              },
              {
                name: "Swings",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250630Category3.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/swings/",
                products: [
                  {
                    id: "591546",
                    src: getImageUrl("20250630Category31.png", true),
                  },
                  {
                    id: "58864",
                    src: getImageUrl("20250630Category32.png", true),
                  },
                  {
                    id: "591734",
                    src: getImageUrl("20250630Category33.png", true),
                  },
                  {
                    id: "30189",
                    src: getImageUrl("20250630Category34.png", true),
                  },
                ],
              },
              {
                name: "Hanging chairs",
                background: "#FF2F00",
                color: "#ffffff",
                src: getImageUrl("20250630Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-hanging-chairs/",
                products: [
                  {
                    id: "311616",
                    src: getImageUrl("20250630Category41.png", true),
                  },
                  {
                    id: "356643",
                    src: getImageUrl("20250630Category42.png", true),
                  },
                  {
                    id: "590717",
                    src: getImageUrl("20250630Category43.png", true),
                  },
                  {
                    id: "612997",
                    src: getImageUrl("20250630Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-30",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250630_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-30",
                },
              },
              {
                value: getImageUrl("20250630_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250704b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-07-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250703b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 30.06.2025 - Free outdoor cushion set!",
                tableRange: "41:43",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#fff",
                background: "#FF2F00",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "420616",
                      src: getImageUrl("20250630Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "418329",
                      src: getImageUrl("20250630Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "419369",
                      src: getImageUrl("20250630Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "418963",
                      src: getImageUrl("20250630Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "420499",
                      src: getImageUrl("20250630Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "418352",
                      src: getImageUrl("20250630Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.06.23",
        issueCardId: "372845",
        name: "Free tables",
        startId: "34385",
        figmaUrl:
          "https://www.figma.com/design/T8S8HlV1wJSAtS3l8h6Qmq/2025.06.30-Free-outdoor-cushion-set--Copy-?node-id=0-1&p=f&t=6Jmwb37VSOnEGO1o-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebies,
            background: "#F6E7E6",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,

            offerPart: {
              type: "code",
              color: "#000000",
              background: "#F6E7E6",
            },
            inside: {
              color: "#fff",
              background: "#F6E7E6",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "CARDIGAN",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250623Category1.png", true),
                href: "https://www.beliani.ch/search/cardigan/",
                products: [
                  {
                    id: "612619",
                    src: getImageUrl("20250623Category11.png", true),
                  },
                  {
                    id: "612563",
                    src: getImageUrl("20250623Category12.png", true),
                  },
                  {
                    id: "612525",
                    src: getImageUrl("20250623Category13.png", true),
                  },
                  {
                    id: "612118",
                    src: getImageUrl("20250623Category14.png", true),
                  },
                ],
              },
              {
                name: "GLASTONBURY",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250623Category2.png", true),
                href: "https://www.beliani.ch/search/glastonbury/",
                products: [
                  {
                    id: "607688",
                    src: getImageUrl("20250623Category21.png", true),
                  },
                  {
                    id: "607763",
                    src: getImageUrl("20250623Category22.png", true),
                  },
                  {
                    id: "607613",
                    src: getImageUrl("20250623Category23.png", true),
                  },
                  {
                    id: "607537",
                    src: getImageUrl("20250623Category24.png", true),
                  },
                ],
              },
              {
                name: "BLYTHE",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250623Category3.png", true),
                href: "https://www.beliani.ch/search/blythe/",
                products: [
                  {
                    id: "601034",
                    src: getImageUrl("20250623Category31.png", true),
                  },
                  {
                    id: "599151",
                    src: getImageUrl("20250623Category32.png", true),
                  },
                  {
                    id: "600918",
                    src: getImageUrl("20250623Category33.png", true),
                  },
                  {
                    id: "600938",
                    src: getImageUrl("20250623Category34.png", true),
                  },
                ],
              },
              {
                name: "ALBANY",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250623Category4.png", true),
                href: "https://www.beliani.ch/search/albany/",
                products: [
                  {
                    id: "594165",
                    src: getImageUrl("20250623Category41.png", true),
                  },
                  {
                    id: "594184",
                    src: getImageUrl("20250623Category42.png", true),
                  },
                  {
                    id: "594261",
                    src: getImageUrl("20250623Category43.png", true),
                  },
                  {
                    id: "594299",
                    src: getImageUrl("20250623Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-23",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250623_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-23",
                },
              },
              {
                value: getImageUrl("202500623_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-23",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250523b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-22",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250522b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-23",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_20250630.gif", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "40:42",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#F6E7E6",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "172265",
                      src: getImageUrl("20250623Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "172266",
                      src: getImageUrl("20250623Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "336969",
                      src: getImageUrl("20250623Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferFreeebies,
            background: "#F6E7E6",
            css: types.CSS.LP,
            tit: {
              color: "#000000",
              type: "standart",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "##F6E7E6",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "CARDIGAN",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250623Category1.png", true),
                href: "https://www.beliani.ch/search/cardigan/",
                products: [
                  {
                    id: "612619",
                    src: getImageUrl("20250623Category11.png", true),
                  },
                  {
                    id: "612563",
                    src: getImageUrl("20250623Category12.png", true),
                  },
                  {
                    id: "612525",
                    src: getImageUrl("20250623Category13.png", true),
                  },
                  {
                    id: "612118",
                    src: getImageUrl("20250623Category14.png", true),
                  },
                ],
              },
              {
                name: "GLASTONBURY",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250623Category2.png", true),
                href: "https://www.beliani.ch/search/glastonbury/",
                products: [
                  {
                    id: "607688",
                    src: getImageUrl("20250623Category21.png", true),
                  },
                  {
                    id: "607763",
                    src: getImageUrl("20250623Category22.png", true),
                  },
                  {
                    id: "607613",
                    src: getImageUrl("20250623Category23.png", true),
                  },
                  {
                    id: "607537",
                    src: getImageUrl("20250623Category24.png", true),
                  },
                ],
              },
              {
                name: "BLYTHE",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250623Category3.png", true),
                href: "https://www.beliani.ch/search/blythe/",
                products: [
                  {
                    id: "601034",
                    src: getImageUrl("20250623Category31.png", true),
                  },
                  {
                    id: "599151",
                    src: getImageUrl("20250623Category32.png", true),
                  },
                  {
                    id: "600918",
                    src: getImageUrl("20250623Category33.png", true),
                  },
                  {
                    id: "600938",
                    src: getImageUrl("20250623Category34.png", true),
                  },
                ],
              },
              {
                name: "ALBANY",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250623Category4.png", true),
                href: "https://www.beliani.ch/search/albany/",
                products: [
                  {
                    id: "594165",
                    src: getImageUrl("20250623Category41.png", true),
                  },
                  {
                    id: "594184",
                    src: getImageUrl("20250623Category42.png", true),
                  },
                  {
                    id: "594261",
                    src: getImageUrl("20250623Category43.png", true),
                  },
                  {
                    id: "594299",
                    src: getImageUrl("20250623Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-23",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250623_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-23",
                },
              },
              {
                value: getImageUrl("202500623_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-23",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250523b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-22",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250522b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 23.06.25 - Free tables!",
                tableRange: "40:42",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#F6E7E6",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "172265",
                      src: getImageUrl("20250623Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "172266",
                      src: getImageUrl("20250623Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "336969",
                      src: getImageUrl("20250623Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "33840",
        name: "Beliani Birthday 3",
        date: "2025.06.16",
        issueCardId: "359497",
        figmaUrl:
          "https://www.figma.com/design/rxc8ngekcsg4hd8sqKe9XN/Beliani-Birthday-3---Monday-2025.06.16--Copy---Copy-?node-id=1-99&t=DQEboyFp7OBlhRoX-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: false,
        white_line: false,
        full_img_width: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FD9000",
              color: "#000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat1.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchairs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chairs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat8.png", true),
                },
                href: "https://www.beliani.co.uk/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Bathtubs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desks",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat10.png", true),
                },
                href: "https://www.beliani.ch/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accessories",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-09",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250606b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "14",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "27",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "31:32",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "15:26",
                name: "categories",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            css: types.CSS.LP,
            intro: {
              background: "#FD9000",
              color: "#000",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat1.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchairs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chairs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat8.png", true),
                },
                href: "https://www.beliani.co.uk/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Bathtubs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desks",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat10.png", true),
                },
                href: "https://www.beliani.ch/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accessories",
                background: "#FD9000",
                color: "#000",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616Cat12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250616_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-09",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250606b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "14",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "27",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "31:32",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "16.06.25 - Beliani Birthday 3!",
                tableRange: "15:26",
                name: "categories",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
        startId: "33776",
        name: "Beliani Birthday 2",
        date: "2025.06.09",
        issueCardId: "359294",
        figmaUrl:
          "https://www.figma.com/design/54wLNano2eXcQDhl2772p8/Beliani-Birthday-2---Monday-2025.06.09--Copy-?node-id=0-1&p=f&t=jGGZ8LD9WBtbeTy3-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: false,
        white_line: true,
        full_img_width: true,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#750000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#750000",
              color: "#fff",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Garden",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat2.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Living room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat3.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Home Office",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat4.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat5.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat6.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Dining room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat7.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Accessories",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat8.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
              {
                isCategoriesDB: true,
                name: "Kids room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat9.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-09",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250528b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-22",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250522b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "14",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "24",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "28:29",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "15:23",
                name: "categories",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#750000",
            css: types.CSS.LP,
            intro: {
              background: "#750000",
              color: "#FFFFFF",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Garden",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat2.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Living room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat3.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Home Office",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat4.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat5.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat6.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Dining room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat7.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Accessories",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat8.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
              {
                isCategoriesDB: true,
                name: "Kids room",
                background: "#750000",
                color: "#FFFFFF",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609Cat9.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-09",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250609_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250528b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-22",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250522b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "14",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "24",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "28:29",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "09.06.25 - Beliani Birthday 2!",
                tableRange: "15:23",
                name: "categories",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
        startId: "32965",
        name: "Beliani Birthday Start",
        date: "2025.06.02",
        issueCardId: "359284",
        figmaUrl:
          "https://www.figma.com/design/fu1KpVQ9E8u07abWbbUa4w/Beliani-Birthday-start---Monday-2025.06.02--Copy-?t=Wl9NAacsA1p65rAf-0",
        optimizeImg: false,
        single_image: true,
        soon_banners: true,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchairs",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chairs",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat8.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Bathtubs",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desks",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat10.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accessories",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-02",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250515b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250514b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "15",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "16:27",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Sofas",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                name: "Beds",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                name: "Armchairs",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                name: "Chairs",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                name: "Tables",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                name: "Storage",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                name: "Textiles",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat8.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                name: "Bathtubs",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat9.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                name: "Desks",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat10.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                name: "Rugs",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat11.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                name: "Accessories",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602Cat12.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-02",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250602_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250515b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250514b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "15",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "02.06.25 - Beliani Birthday Start!",
                tableRange: "16:27",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.05.26",
        issueCardId: "364246",
        name: "Free sun lounger",
        startId: "33383",
        figmaUrl:
          "https://www.figma.com/design/5hkoDgfABWaQIHwMg8keaU/2025.05.26---Newsletter---Free-sun-lounger--Copy-?node-id=8001-3604&p=f&t=xUy00hkcuPWm21Kf-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        single_image: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            inside: {
              background: "#FD9000", 
              color: "#fff",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250526Category1.png", true),
                href: "",
                products: [
                  {
                    id: "584253", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250526Category11.png", true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
                  },
                  {
                    id: "581094",
                    src: getImageUrl("20250526Category12.png", true),
                  },
                  {
                    id: "207163",
                    src: getImageUrl("20250526Category13.png", true),
                  },
                  {
                    id: "338035",
                    src: getImageUrl("20250526Category14.png", true),
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250526Category2.png", true),
                href: "",
                products: [
                  {
                    id: "523743",
                    src: getImageUrl("20250526Category21.png", true),
                  },
                  {
                    id: "517382",
                    src: getImageUrl("20250526Category22.png", true),
                  },
                  {
                    id: "508284",
                    src: getImageUrl("20250526Category23.png", true),
                  },
                  {
                    id: "76376",
                    src: getImageUrl("20250526Category24.png", true),
                  },
                ],
              },
              {
                name: "Benches",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250526Category3.png", true),
                href: "",
                products: [
                  {
                    id: "587255",
                    src: getImageUrl("20250526Category31.png", true),
                  },
                  {
                    id: "76238",
                    src: getImageUrl("20250526Category32.png", true),
                  },
                  {
                    id: "365818",
                    src: getImageUrl("20250526Category33.png", true),
                  },
                  {
                    id: "31213",
                    src: getImageUrl("20250526Category34.png", true),
                  },
                ],
              },
              {
                name: "Balcony furniture",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250526Category4.png", true),
                href: "",
                products: [
                  {
                    id: "522681",
                    src: getImageUrl("20250526Category41.png", true),
                  },
                  {
                    id: "508211",
                    src: getImageUrl("20250526Category42.png", true),
                  },
                  {
                    id: "294064",
                    src: getImageUrl("20250526Category43.png", true),
                  },
                  {
                    id: "269842",
                    src: getImageUrl("20250526Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-26",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250526_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-26",
                },
              },
              {
                value: getImageUrl("20250526_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250516b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250515b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-06-23",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_20250630.gif", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "41",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "33:36",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "37:40",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "45:47",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "386767",
                      src: getImageUrl("20250526Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "386749",
                      src: getImageUrl("20250526Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "386818",
                      src: getImageUrl("20250526Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "71369",
                      src: getImageUrl("20250526Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250526Category1.png", true),
                href: "",
                products: [
                  {
                    id: "584253", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250526Category11.png", true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
                  },
                  {
                    id: "581094",
                    src: getImageUrl("20250526Category12.png", true),
                  },
                  {
                    id: "207163",
                    src: getImageUrl("20250526Category13.png", true),
                  },
                  {
                    id: "338035",
                    src: getImageUrl("20250526Category14.png", true),
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250526Category2.png", true),
                href: "",
                products: [
                  {
                    id: "523743",
                    src: getImageUrl("20250526Category21.png", true),
                  },
                  {
                    id: "517382",
                    src: getImageUrl("20250526Category22.png", true),
                  },
                  {
                    id: "508284",
                    src: getImageUrl("20250526Category23.png", true),
                  },
                  {
                    id: "76376",
                    src: getImageUrl("20250526Category24.png", true),
                  },
                ],
              },
              {
                name: "Benches",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250526Category3.png", true),
                href: "",
                products: [
                  {
                    id: "587255",
                    src: getImageUrl("20250526Category31.png", true),
                  },
                  {
                    id: "76238",
                    src: getImageUrl("20250526Category32.png", true),
                  },
                  {
                    id: "365818",
                    src: getImageUrl("20250526Category33.png", true),
                  },
                  {
                    id: "31213",
                    src: getImageUrl("20250526Category34.png", true),
                  },
                ],
              },
              {
                name: "Balcony furniture",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250526Category4.png", true),
                href: "",
                products: [
                  {
                    id: "522681",
                    src: getImageUrl("20250526Category41.png", true),
                  },
                  {
                    id: "508211",
                    src: getImageUrl("20250526Category42.png", true),
                  },
                  {
                    id: "294064",
                    src: getImageUrl("20250526Category43.png", true),
                  },
                  {
                    id: "269842",
                    src: getImageUrl("20250526Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-26",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250526_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-26",
                },
              },
              {
                value: getImageUrl("20250526_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250516b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250515b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "41",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "33:36",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "37:40",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 26.05.25 - Free sun lounger!",
                tableRange: "45:47",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "386767",
                      src: getImageUrl("20250526Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "386749",
                      src: getImageUrl("20250526Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "386818",
                      src: getImageUrl("20250526Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "71369",
                      src: getImageUrl("20250526Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.05.19",
        issueCardId: "362680",
        name: "Free Vases",
        startId: "33255",
        figmaUrl:
          "https://www.figma.com/design/OkcK6SQVW485r046NVuBLX/2025.05.19-Free-vase--Copy-?node-id=0-1&p=f&t=QK1WEZdD2eP6nnsS-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        single_image: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#750000",
              color: "#FFFFFF",
            },
            categories: [
              {
                name: "Sofas",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250519Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/sofas/",
                products: [
                  {
                    id: "592842", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250519Category11.png", true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
                  },
                  {
                    id: "588942",
                    src: getImageUrl("20250519Category12.png", true),
                  },
                  {
                    id: "604506",
                    src: getImageUrl("20250519Category13.png", true),
                  },
                  {
                    id: "231623",
                    src: getImageUrl("20250519Category14.png", true),
                  },
                ],
              },
              {
                name: "Coffee tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250519Category2.png", true),
                href: "https://www.beliani.ch/tables/coffee-tables/",
                products: [
                  {
                    id: "597212",
                    src: getImageUrl("20250519Category21.png", true),
                  },
                  {
                    id: "584688",
                    src: getImageUrl("20250519Category22.png", true),
                  },
                  {
                    id: "571047",
                    src: getImageUrl("20250519Category23.png", true),
                  },
                  {
                    id: "563549",
                    src: getImageUrl("20250519Category24.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250519Category3.png", true),
                href: "https://www.beliani.ch/armchairs/",
                products: [
                  {
                    id: "603218",
                    src: getImageUrl("20250519Category31.png", true),
                  },
                  {
                    id: "598655",
                    src: getImageUrl("20250519Category32.png", true),
                  },
                  {
                    id: "598104",
                    src: getImageUrl("20250519Category33.png", true),
                  },
                  {
                    id: "596472",
                    src: getImageUrl("20250519Category34.png", true),
                  },
                ],
              },
              {
                name: "Lighting",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250519Category4.png", true),
                href: "https://www.beliani.ch/lighting/",
                products: [
                  {
                    id: "574544",
                    src: getImageUrl("20250519Category41.png", true),
                  },
                  {
                    id: "583053",
                    src: getImageUrl("20250519Category42.png", true),
                  },
                  {
                    id: "581706",
                    src: getImageUrl("20250519Category43.png", true),
                  },
                  {
                    id: "519665",
                    src: getImageUrl("20250519Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-19",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250519_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-19",
                },
              },
              {
                value: getImageUrl("20250519_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-08",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250508b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250507b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "19:23",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "25:26",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "39",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "33",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "23",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "27:30",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "47:49",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "290044",
                      src: getImageUrl("20250519Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "289992",
                      src: getImageUrl("20250519Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "553238",
                      src: getImageUrl("20250519Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "290152",
                      src: getImageUrl("20250519Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "526774",
                      src: getImageUrl("20250519Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "527212",
                      src: getImageUrl("20250519Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#750000",
              color: "#FFFFFF",
            },
            categories: [
              {
                name: "Sofas",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250519Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/sofas/",
                products: [
                  {
                    id: "592842", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250519Category11.png", true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
                  },
                  {
                    id: "588942",
                    src: getImageUrl("20250519Category12.png", true),
                  },
                  {
                    id: "604506",
                    src: getImageUrl("20250519Category13.png", true),
                  },
                  {
                    id: "231623",
                    src: getImageUrl("20250519Category14.png", true),
                  },
                ],
              },
              {
                name: "Coffee tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250519Category2.png", true),
                href: "https://www.beliani.ch/tables/coffee-tables/",
                products: [
                  {
                    id: "597212",
                    src: getImageUrl("20250519Category21.png", true),
                  },
                  {
                    id: "584688",
                    src: getImageUrl("20250519Category22.png", true),
                  },
                  {
                    id: "571047",
                    src: getImageUrl("20250519Category23.png", true),
                  },
                  {
                    id: "563549",
                    src: getImageUrl("20250519Category24.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250519Category3.png", true),
                href: "https://www.beliani.ch/armchairs/",
                products: [
                  {
                    id: "603218",
                    src: getImageUrl("20250519Category31.png", true),
                  },
                  {
                    id: "598655",
                    src: getImageUrl("20250519Category32.png", true),
                  },
                  {
                    id: "598104",
                    src: getImageUrl("20250519Category33.png", true),
                  },
                  {
                    id: "596472",
                    src: getImageUrl("20250519Category34.png", true),
                  },
                ],
              },
              {
                name: "Lighting",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250519Category4.png", true),
                href: "https://www.beliani.ch/lighting/",
                products: [
                  {
                    id: "574544",
                    src: getImageUrl("20250519Category41.png", true),
                  },
                  {
                    id: "583053",
                    src: getImageUrl("20250519Category42.png", true),
                  },
                  {
                    id: "581706",
                    src: getImageUrl("20250519Category43.png", true),
                  },
                  {
                    id: "519665",
                    src: getImageUrl("20250519Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-19",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250519_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-19",
                },
              },
              {
                value: getImageUrl("20250519_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-08",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250508b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250507b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "19:23",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "25:26",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "39",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "33",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "23",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "27:30",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 19.05.25 - Free Vases!",
                tableRange: "47:49",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "290044",
                      src: getImageUrl("20250519Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "289992",
                      src: getImageUrl("20250519Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "553238",
                      src: getImageUrl("20250519Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "290152",
                      src: getImageUrl("20250519Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "526774",
                      src: getImageUrl("20250519Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "527212",
                      src: getImageUrl("20250519Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.05.12",
        issueCardId: "360550",
        name: "Free parasol or swing",
        startId: "32932",
        figmaUrl:
          "https://www.figma.com/design/L1R2HFXoTV8yrLVCzVH4dj/2025.05.12---Newsletter---Free-parasol-or-swing--Copy-?node-id=0-1&p=f&t=znYbjjWPYgQPErIW-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        single_image: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#750000",
              color: "#FFFFFF",
            },
            categories: [
              {
                name: "Dining sets",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250512Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
                products: [
                  {
                    id: "588455", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250512Category11.png", true), //origin.includes("HU") ? getImageUrl("20250512Category11.png", true) : getImageUrl("20250512huCategory11.png", true),
                  },
                  {
                    id: "520673",
                    src: getImageUrl("20250512Category12.png", true),
                  },
                  {
                    id: "515130",
                    src: getImageUrl("20250512Category13.png", true),
                  },
                  {
                    id: "318366",
                    src: getImageUrl("20250512Category14.png", true),
                  },
                ],
              },
              {
                name: "Outdoor kitchen",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250512Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/",
                products: [
                  {
                    id: "603741",
                    src: getImageUrl("20250512Category21.png", true),
                  },
                  {
                    id: "603546",
                    src: getImageUrl("20250512Category22.png", true),
                  },
                  {
                    id: "524312",
                    src: getImageUrl("20250512Category23.png", true),
                  },
                  {
                    id: "526547",
                    src: getImageUrl("20250512Category24.png", true),
                  },
                ],
              },
              {
                name: "Fire pits & grills",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250512Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/",
                products: [
                  {
                    id: "197917",
                    src: getImageUrl("20250512Category31.png", true),
                  },
                  {
                    id: "301788",
                    src: getImageUrl("20250512Category32.png", true),
                  },
                  {
                    id: "315858",
                    src: getImageUrl("20250512Category33.png", true),
                  },
                  {
                    id: "197914",
                    src: getImageUrl("20250512Category34.png", true),
                  },
                ],
              },
              {
                name: "Lanterns",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250512Category4.png", true),
                href: "https://www.beliani.ch/garden-accessories/garden-lanterns/",
                products: [
                  {
                    id: "200059",
                    src: getImageUrl("20250512Category41.png", true),
                  },
                  {
                    id: "106078",
                    src: getImageUrl("20250512Category42.png", true),
                  },
                  {
                    id: "325520",
                    src: getImageUrl("20250512Category43.png", true),
                  },
                  {
                    id: "199499",
                    src: getImageUrl("20250512Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250512_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-12",
                },
              },
              {
                value: getImageUrl("20250512_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-02",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250502b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-01",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250501b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "37",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "33:36",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "41:43",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "57652",
                      src: getImageUrl("20250512Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "57653",
                      src: getImageUrl("20250512Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "130931",
                      src: getImageUrl("20250512Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "145059",
                      src: getImageUrl("20250512Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "	30178",
                      src: getImageUrl("20250512Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "30179",
                      src: getImageUrl("20250512Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#FD9000",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#750000",
              color: "#FFFFFF",
            },
            categories: [
              {
                name: "Dining sets",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250512Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
                products: [
                  {
                    id: "588455", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250512Category11.png", true), //origin.includes("HU") ? getImageUrl("20250512Category11.png", true) : getImageUrl("20250512huCategory11.png", true),
                  },
                  {
                    id: "520673",
                    src: getImageUrl("20250512Category12.png", true),
                  },
                  {
                    id: "515130",
                    src: getImageUrl("20250512Category13.png", true),
                  },
                  {
                    id: "318366",
                    src: getImageUrl("20250512Category14.png", true),
                  },
                ],
              },
              {
                name: "Outdoor kitchen",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250512Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/",
                products: [
                  {
                    id: "603741",
                    src: getImageUrl("20250512Category21.png", true),
                  },
                  {
                    id: "603546",
                    src: getImageUrl("20250512Category22.png", true),
                  },
                  {
                    id: "524312",
                    src: getImageUrl("20250512Category23.png", true),
                  },
                  {
                    id: "526547",
                    src: getImageUrl("20250512Category24.png", true),
                  },
                ],
              },
              {
                name: "Fire pits & grills",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250512Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/",
                products: [
                  {
                    id: "197917",
                    src: getImageUrl("20250512Category31.png", true),
                  },
                  {
                    id: "301788",
                    src: getImageUrl("20250512Category32.png", true),
                  },
                  {
                    id: "315858",
                    src: getImageUrl("20250512Category33.png", true),
                  },
                  {
                    id: "197914",
                    src: getImageUrl("20250512Category34.png", true),
                  },
                ],
              },
              {
                name: "Lanterns",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250512Category4.png", true),
                href: "https://www.beliani.ch/garden-accessories/garden-lanterns/",
                products: [
                  {
                    id: "200059",
                    src: getImageUrl("20250512Category41.png", true),
                  },
                  {
                    id: "106078",
                    src: getImageUrl("20250512Category42.png", true),
                  },
                  {
                    id: "325520",
                    src: getImageUrl("20250512Category43.png", true),
                  },
                  {
                    id: "199499",
                    src: getImageUrl("20250512Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250512_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-12",
                },
              },
              {
                value: getImageUrl("20250512_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-02",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250502b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-01",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250501b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "19:20",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "22:26",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "31:32",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "37",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "28",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "26",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "33:36",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 12.05.25 - Free parasol or swing!",
                tableRange: "41:43",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "57652",
                      src: getImageUrl("20250512Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "57653",
                      src: getImageUrl("20250512Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "130931",
                      src: getImageUrl("20250512Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "145059",
                      src: getImageUrl("20250512Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "	30178",
                      src: getImageUrl("20250512Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "30179",
                      src: getImageUrl("20250512Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.05.05",
        issueCardId: "359646",
        name: "Free towels",
        startId: "32868",
        figmaUrl:
          "https://www.figma.com/design/K7HaPqvuMU6GAiXJYE3HgR/Free-towels---2025.05.05--Copy-?node-id=6057-1156&t=RYCpsnfjoPgY0iKH-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        single_image: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#F6E7E6",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#F6E7E6",
            },
            intro: {
              background: "#FF2F00",
              color: "#FFFFFF",
            },
            categories: [
              {
                name: "Bathtubs",
                background: "#FF2F00",
                color: "#FFFFFF",
                src: getImageUrl("20250505Category1.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/",
                products: [
                  {
                    id: "431804", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250505Category11.png", true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
                  },
                  {
                    id: "193528",
                    src: getImageUrl("20250505Category12.png", true),
                  },
                  {
                    id: "417089",
                    src: getImageUrl("20250505Category13.png", true),
                  },
                  {
                    id: "310394",
                    src: getImageUrl("20250505Category14.png", true),
                  },
                ],
              },
              {
                name: "Basins",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250505Category2.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/basins/",
                products: [
                  {
                    id: "510877",
                    src: getImageUrl("20250505Category21.png", true),
                  },
                  {
                    id: "509797",
                    src: getImageUrl("20250505Category22.png", true),
                  },
                  {
                    id: "509870",
                    src: getImageUrl("20250505Category23.png", true),
                  },
                  {
                    id: "510572",
                    src: getImageUrl("20250505Category24.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FF2F00",
                color: "#FFFFFF",
                src: getImageUrl("20250505Category3.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/storage/",
                products: [
                  {
                    id: "588752",
                    src: getImageUrl("20250505Category31.png", true),
                  },
                  {
                    id: "572074",
                    src: getImageUrl("20250505Category32.png", true),
                  },
                  {
                    id: "589152",
                    src: getImageUrl("20250505Category33.png", true),
                  },
                  {
                    id: "427654",
                    src: getImageUrl("20250505Category34.png", true),
                  },
                ],
              },
              {
                name: "Mirrors",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250505Category4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/mirrors/",
                products: [
                  {
                    id: "522740",
                    src: getImageUrl("20250505Category41.png", true),
                  },
                  {
                    id: "360158",
                    src: getImageUrl("20250505Category42.png", true),
                  },
                  {
                    id: "203165",
                    src: getImageUrl("20250505Category43.png", true),
                  },
                  {
                    id: "580809",
                    src: getImageUrl("20250505Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-05",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250505_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-05",
                },
              },
              {
                value: getImageUrl("20250505_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-30",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250430b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250424b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "39:41",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#F6E7E6",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "356111",
                      src: getImageUrl("20250505Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "357862",
                      src: getImageUrl("20250505Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "357898",
                      src: getImageUrl("20250505Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "357844",
                      src: getImageUrl("20250505Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "357825",
                      src: getImageUrl("20250505Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "357916",
                      src: getImageUrl("20250505Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayRegularNslt,
            background: "#F6E7E6",
            css: types.CSS.LP,
            tit: {
              color: "#000",
              type: "standard",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#F6E7E6",
            },
            intro: {
              background: "#FF2F00",
              color: "#FFFFFF",
            },
            categories: [
              {
                name: "Bathtubs",
                background: "#FF2F00",
                color: "#FFFFFF",
                src: getImageUrl("20250505Category1.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/",
                products: [
                  {
                    id: "431804", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250505Category11.png", true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
                  },
                  {
                    id: "193528",
                    src: getImageUrl("20250505Category12.png", true),
                  },
                  {
                    id: "417089",
                    src: getImageUrl("20250505Category13.png", true),
                  },
                  {
                    id: "310394",
                    src: getImageUrl("20250505Category14.png", true),
                  },
                ],
              },
              {
                name: "Basins",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250505Category2.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/basins/",
                products: [
                  {
                    id: "510877",
                    src: getImageUrl("20250505Category21.png", true),
                  },
                  {
                    id: "509797",
                    src: getImageUrl("20250505Category22.png", true),
                  },
                  {
                    id: "509870",
                    src: getImageUrl("20250505Category23.png", true),
                  },
                  {
                    id: "510572",
                    src: getImageUrl("20250505Category24.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FF2F00",
                color: "#FFFFFF",
                src: getImageUrl("20250505Category3.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/storage/",
                products: [
                  {
                    id: "588752",
                    src: getImageUrl("20250505Category31.png", true),
                  },
                  {
                    id: "572074",
                    src: getImageUrl("20250505Category32.png", true),
                  },
                  {
                    id: "589152",
                    src: getImageUrl("20250505Category33.png", true),
                  },
                  {
                    id: "427654",
                    src: getImageUrl("20250505Category34.png", true),
                  },
                ],
              },
              {
                name: "Mirrors",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250505Category4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/mirrors/",
                products: [
                  {
                    id: "522740",
                    src: getImageUrl("20250505Category41.png", true),
                  },
                  {
                    id: "360158",
                    src: getImageUrl("20250505Category42.png", true),
                  },
                  {
                    id: "203165",
                    src: getImageUrl("20250505Category43.png", true),
                  },
                  {
                    id: "580809",
                    src: getImageUrl("20250505Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-05",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250505_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-05-05",
                },
              },
              {
                value: getImageUrl("20250505_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-30",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250430b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250424b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 05.05.25 - Free towels!",
                tableRange: "39:41",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#F6E7E6",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "356111",
                      src: getImageUrl("20250505Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "357862",
                      src: getImageUrl("20250505Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "357898",
                      src: getImageUrl("20250505Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "357844",
                      src: getImageUrl("20250505Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "357825",
                      src: getImageUrl("20250505Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "357916",
                      src: getImageUrl("20250505Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "Only LP CHDE",
        issueCardId: "356826",
        name: "landing page for Switzerland",
        startId: "00001",
        figmaUrl:
          "https://www.figma.com/design/lQjEZ6ixjvFG5Iz7ArNY4y/2025.04---10--Landing-Page?node-id=8020-1035&p=f&t=Yso7cxdxwX9X8KGz-0",
        alarm: {
          isActive: false,
        },
        isArchive: false,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebiesCategoryFilters,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#F6E7E6",
              color: "#000000",
            },
            categories: [
              {
                name: "Cosy for Two",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                products: [
                  {
                    id: "522681", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250428Category11.png", true), //origin.includes("HU") ? getImageUrl("20250428Category11.png", true) : getImageUrl("20250428huCategory11.png", true),
                  },
                  {
                    id: "596587",
                    src: getImageUrl("20250428Category12.png", true),
                  },
                  {
                    id: "557385",
                    src: getImageUrl("20250428Category13.png", true),
                  },
                  {
                    id: "294544",
                    src: getImageUrl("20250428Category14.png", true),
                  },
                ],
              },
              {
                name: "Ideal for four",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category2.png", true),
                href: "",
                products: [
                  {
                    id: "588436",
                    src: getImageUrl("20250428Category21.png", true),
                  },
                  {
                    id: "525622",
                    src: getImageUrl("20250428Category22.png", true),
                  },
                  {
                    id: "257696",
                    src: getImageUrl("20250428Category23.png", true),
                  },
                  {
                    id: "569903",
                    src: getImageUrl("20250428Category24.png", true),
                  },
                ],
              },
              {
                name: "Spacious for six",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category3.png", true),
                href: "",
                products: [
                  {
                    id: "585606",
                    src: getImageUrl("20250428Category31.png", true),
                  },
                  {
                    id: "523743",
                    src: getImageUrl("20250428Category32.png", true),
                  },
                  {
                    id: "419180",
                    src: getImageUrl("20250428Category33.png", true),
                  },
                  {
                    id: "294731",
                    src: getImageUrl("20250428Category34.png", true),
                  },
                ],
              },
              {
                name: "Ultimate 8-seater sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category4.png", true),
                href: "",
                products: [
                  {
                    id: "192221",
                    src: getImageUrl("20250428Category41.png", true),
                  },
                  {
                    id: "140721",
                    src: getImageUrl("20250428Category42.png", true),
                  },
                  {
                    id: "146646",
                    src: getImageUrl("20250428Category43.png", true),
                  },
                  {
                    id: "71531",
                    src: getImageUrl("20250428Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250428_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-28",
                },
              },
              {
                value: getImageUrl("20250428_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250410b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "38",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "35:37",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "42:44",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197902",
                      src: getImageUrl("20250428Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197914",
                      src: getImageUrl("20250428Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197884",
                      src: getImageUrl("20250428Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197917",
                      src: getImageUrl("20250428Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.CategoriesGrid,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              color: "#000000",
              conditions:
                "Ausschliesslich ein Gutschein pro Person und Bestellung einlösbar. Der Gutschein ist nicht mit anderen Gutscheinaktionen kombinierbar. Dieses Angebot ist gültig bis zum 31.05.2025. Dieser Voucher gilt nicht für offene Bestellungen. Dieses Angebot richtet sich nicht an Wiederverkäufer. Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.",
            },
            categories: [
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat1.png",
                  },
                  href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat2.png",
                  },
                  href: "https://www.beliani.ch/sofas/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat3.png",
                  },
                  href: "https://www.beliani.ch/beds/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat4.png",
                  },
                  href: "https://www.beliani.ch/armchairs/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat5.png",
                  },
                  href: "https://www.beliani.ch/chairs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat6.png",
                  },
                  href: "https://www.beliani.ch/tables/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat7.png",
                  },
                  href: "https://www.beliani.ch/storage/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat8.png",
                  },
                  href: "https://www.beliani.ch/children-room/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat9.png",
                  },
                  href: "https://www.beliani.ch/textiles/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat10.png",
                  },
                  href: "https://www.beliani.ch/lighting/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat11.png",
                  },
                  href: "https://www.beliani.ch/bathtubs-hot-tubs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat12.png",
                  },
                  href: "https://www.beliani.ch/office-furniture/desks-eng/",
                },
              ],
              [
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat13.png",
                  },
                  href: "https://www.beliani.ch/rugs/",
                },
                {
                  src: {
                    type: "relation",
                    relyOn: "slug",
                    placeholderPosition: "45",
                    value: "https://upload.pictureserver.net/static/2024/20241223_cat14.png",
                  },
                  href: "https://www.beliani.ch/home-accessories/",
                },
              ],
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/rabatt10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("rabatt10.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/rabatt10",
                },
              },
              {
                value: getImageUrl("20250428_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250410b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "38",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "35:37",
                name: "filters",
              },
              {
                tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
                tableName: "Voucher - 22.01.24 - Winter sale 2nd reminder!",
                tableRange: "81",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197902",
                      src: getImageUrl("20250428Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197914",
                      src: getImageUrl("20250428Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197884",
                      src: getImageUrl("20250428Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197917",
                      src: getImageUrl("20250428Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.04.28",
        issueCardId: "357067",
        name: "Free fire pit",
        startId: "32676",
        figmaUrl:
          "https://www.figma.com/design/WHq6Ct6hUbUP4IS35T8uRz/2025.04.28--Free-fire-pit--Copy-?node-id=6061-772&t=SIHDcr1oxf6X2bOo-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        single_image: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebiesCategoryFilters,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            tit: {
              color: "#000",
              type: "twoSameLines",
            },
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#F6E7E6",
              color: "#000000",
            },
            categories: [
              {
                name: "Cosy for Two",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                products: [
                  {
                    id: "522681", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250428Category11.png", true), //origin.includes("HU") ? getImageUrl("20250428Category11.png", true) : getImageUrl("20250428huCategory11.png", true),
                  },
                  {
                    id: "596587",
                    src: getImageUrl("20250428Category12.png", true),
                  },
                  {
                    id: "557385",
                    src: getImageUrl("20250428Category13.png", true),
                  },
                  {
                    id: "294544",
                    src: getImageUrl("20250428Category14.png", true),
                  },
                ],
              },
              {
                name: "Ideal for four",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category2.png", true),
                href: "",
                products: [
                  {
                    id: "588436",
                    src: getImageUrl("20250428Category21.png", true),
                  },
                  {
                    id: "525622",
                    src: getImageUrl("20250428Category22.png", true),
                  },
                  {
                    id: "257696",
                    src: getImageUrl("20250428Category23.png", true),
                  },
                  {
                    id: "569903",
                    src: getImageUrl("20250428Category24.png", true),
                  },
                ],
              },
              {
                name: "Spacious for six",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category3.png", true),
                href: "",
                products: [
                  {
                    id: "585606",
                    src: getImageUrl("20250428Category31.png", true),
                  },
                  {
                    id: "523743",
                    src: getImageUrl("20250428Category32.png", true),
                  },
                  {
                    id: "419180",
                    src: getImageUrl("20250428Category33.png", true),
                  },
                  {
                    id: "294731",
                    src: getImageUrl("20250428Category34.png", true),
                  },
                ],
              },
              {
                name: "Ultimate 8-seater sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category4.png", true),
                href: "",
                products: [
                  {
                    id: "192221",
                    src: getImageUrl("20250428Category41.png", true),
                  },
                  {
                    id: "140721",
                    src: getImageUrl("20250428Category42.png", true),
                  },
                  {
                    id: "146646",
                    src: getImageUrl("20250428Category43.png", true),
                  },
                  {
                    id: "71531",
                    src: getImageUrl("20250428Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250428_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-28",
                },
              },
              {
                value: getImageUrl("20250428_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250410b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "38",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "35:37",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "42:44",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197902",
                      src: getImageUrl("20250428Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197914",
                      src: getImageUrl("20250428Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197884",
                      src: getImageUrl("20250428Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197917",
                      src: getImageUrl("20250428Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferFreeebiesCategoryFilters,
            background: "#FFCCB7",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#F6E7E6",
              color: "#000000",
            },
            categories: [
              {
                name: "Cosy for Two",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                products: [
                  {
                    id: "522681", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250428Category11.png", true), //origin.includes("HU") ? getImageUrl("20250428Category11.png", true) : getImageUrl("20250428huCategory11.png", true),
                  },
                  {
                    id: "596587",
                    src: getImageUrl("20250428Category12.png", true),
                  },
                  {
                    id: "557385",
                    src: getImageUrl("20250428Category13.png", true),
                  },
                  {
                    id: "294544",
                    src: getImageUrl("20250428Category14.png", true),
                  },
                ],
              },
              {
                name: "Ideal for four",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category2.png", true),
                href: "",
                products: [
                  {
                    id: "588436",
                    src: getImageUrl("20250428Category21.png", true),
                  },
                  {
                    id: "525622",
                    src: getImageUrl("20250428Category22.png", true),
                  },
                  {
                    id: "257696",
                    src: getImageUrl("20250428Category23.png", true),
                  },
                  {
                    id: "569903",
                    src: getImageUrl("20250428Category24.png", true),
                  },
                ],
              },
              {
                name: "Spacious for six",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category3.png", true),
                href: "",
                products: [
                  {
                    id: "585606",
                    src: getImageUrl("20250428Category31.png", true),
                  },
                  {
                    id: "523743",
                    src: getImageUrl("20250428Category32.png", true),
                  },
                  {
                    id: "419180",
                    src: getImageUrl("20250428Category33.png", true),
                  },
                  {
                    id: "294731",
                    src: getImageUrl("20250428Category34.png", true),
                  },
                ],
              },
              {
                name: "Ultimate 8-seater sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category4.png", true),
                href: "",
                products: [
                  {
                    id: "192221",
                    src: getImageUrl("20250428Category41.png", true),
                  },
                  {
                    id: "140721",
                    src: getImageUrl("20250428Category42.png", true),
                  },
                  {
                    id: "146646",
                    src: getImageUrl("20250428Category43.png", true),
                  },
                  {
                    id: "71531",
                    src: getImageUrl("20250428Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250428_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-28",
                },
              },
              {
                value: getImageUrl("20250428_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250410b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "38",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "35:37",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "42:44",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197902",
                      src: getImageUrl("20250428Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197914",
                      src: getImageUrl("20250428Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197884",
                      src: getImageUrl("20250428Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                    {
                      id: "197917",
                      src: getImageUrl("20250428Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display:inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.04.21",
        issueCardId: "334022",
        name: "March Peak - Earth Day",
        startId: "32388",
        figmaUrl:
          "https://www.figma.com/design/IjK9bpuYSsDvyYGnJwhnQG/2025.04.07-Free-scatter-cushion-(Copy)?m=auto&fuid=1328681953229888224",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.MondayEarthDayNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            earth: {
              background: "#FFCCB7",
              color: "#000000",
            },
            EarthDaySrc: [
              {
                src: getImageUrl("20250421Earth1.png", true),
              },
              {
                src: getImageUrl("20250421Earth2.png", true),
              },
              {
                src: getImageUrl("20250421Earth3.png", true),
              },
            ],
            categories: [
              {
                name: "Natural materials",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category1.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "514447",
                    src: getImageUrl("20250421Category11.png", true),
                  },
                  {
                    id: "371401",
                    src: getImageUrl("20250421Category12.png", true),
                  },
                  {
                    id: "408516",
                    src: getImageUrl("20250421Category13.png", true),
                  },
                  {
                    id: "433272",
                    src: getImageUrl("20250421Category14.png", true),
                  },
                ],
              },
              {
                name: "Outdoor spaces",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250421Category2.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "76376",
                    src: getImageUrl("20250421Category21.png", true),
                  },
                  {
                    id: "207309",
                    src: getImageUrl("20250421Category22.png", true),
                  },
                  {
                    id: "598184",
                    src: getImageUrl("20250421Category23.png", true),
                  },
                  {
                    id: "587558",
                    src: getImageUrl("20250421Category24.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category3.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "315442",
                    src: getImageUrl("20250421Category31.png", true),
                  },
                  {
                    id: "426151",
                    src: getImageUrl("20250421Category32.png", true),
                  },
                  {
                    id: "437955",
                    src: getImageUrl("20250421Category33.png", true),
                  },
                  {
                    id: "558373",
                    src: getImageUrl("20250421Category34.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250421_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250411b.png", true),
                },
              },
              // {
              //   query: true,
              //   href: {
              //     type: "relation",
              //     relyOn: "origin",
              //     placeholderPosition: "0",
              //     value: "content/lp25-03-03",
              //   },
              // },
              // {
              //   src: {
              //     type: "relation",
              //     relyOn: "slug",
              //     placeholderPosition: "38",
              //     value:
              //       getImageUrl("_20250307.png", true),
              //   },
              // },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "13",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "17:18",
                name: "introEarth",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "19:22",
                name: "EarthDayPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "24",
                name: "earthHref",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "23",
                name: "earthCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "31",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "25:30",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "14:16",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "36:37",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            footer_cat: [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_01.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_02.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_03.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_04.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_05.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_06.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_07.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_cat_08.png", true),
                },
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.MondayEarthDayNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            earth: {
              background: "#FFCCB7",
              color: "#000000",
            },
            EarthDaySrc: [
              {
                src: getImageUrl("20250421Earth1.png", true),
              },
              {
                src: getImageUrl("20250421Earth2.png", true),
              },
              {
                src: getImageUrl("20250421Earth3.png", true),
              },
            ],
            categories: [
              {
                name: "Natural materials",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category1.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "514447",
                    src: getImageUrl("20250421Category11.png", true),
                  },
                  {
                    id: "371401",
                    src: getImageUrl("20250421Category12.png", true),
                  },
                  {
                    id: "408516",
                    src: getImageUrl("20250421Category13.png", true),
                  },
                  {
                    id: "433272",
                    src: getImageUrl("20250421Category14.png", true),
                  },
                ],
              },
              {
                name: "Outdoor spaces",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250421Category2.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "76376",
                    src: getImageUrl("20250421Category21.png", true),
                  },
                  {
                    id: "207309",
                    src: getImageUrl("20250421Category22.png", true),
                  },
                  {
                    id: "598184",
                    src: getImageUrl("20250421Category23.png", true),
                  },
                  {
                    id: "587558",
                    src: getImageUrl("20250421Category24.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category3.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "315442",
                    src: getImageUrl("20250421Category31.png", true),
                  },
                  {
                    id: "426151",
                    src: getImageUrl("20250421Category32.png", true),
                  },
                  {
                    id: "437955",
                    src: getImageUrl("20250421Category33.png", true),
                  },
                  {
                    id: "558373",
                    src: getImageUrl("20250421Category34.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250421_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-11",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250411b.png", true),
                },
              },
              // {
              //   query: true,
              //   href: {
              //     type: "relation",
              //     relyOn: "origin",
              //     placeholderPosition: "0",
              //     value: "content/lp25-03-03",
              //   },
              // },
              // {
              //   src: {
              //     type: "relation",
              //     relyOn: "slug",
              //     placeholderPosition: "38",
              //     value:
              //       getImageUrl("_20250307.png", true),
              //   },
              // },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "13",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "11",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "17:18",
                name: "introEarth",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "19:22",
                name: "EarthDayPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "24",
                name: "earthHref",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "23",
                name: "earthCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "31",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "25:30",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "14:16",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "36:37",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
        startId: "30425",
        name: "March Peak reminder",
        date: "2025.04.14",
        issueCardId: "334000",
        figmaUrl: "https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23/2025-MarchPeak-(Copy)?t=EtPECgGgl5ApEN30-0",
        optimizeImg: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.CategoriesRows,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor ",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Living Room",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat2.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Dining Room ",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat3.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat4.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway ",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat5.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat6.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Kids ",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat7.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
              {
                isCategoriesDB: true,
                name: "Office",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat8.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250404b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250403b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "21",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "25:26",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "13:20",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.CategoriesRows,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                name: "Outdoor ",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Living Room",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat2.png", true),
                },
                href: "https://www.beliani.ch/living-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Dining Room ",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat3.png", true),
                },
                href: "https://www.beliani.ch/dining-room-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Bedroom",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat4.png", true),
                },
                href: "https://www.beliani.ch/bedroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Hallway ",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat5.png", true),
                },
                href: "https://www.beliani.ch/hallway/",
              },
              {
                isCategoriesDB: true,
                name: "Bathroom",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat6.png", true),
                },
                href: "https://www.beliani.ch/bathroom-furniture/",
              },
              {
                isCategoriesDB: true,
                name: "Kids ",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat7.png", true),
                },
                href: "https://www.beliani.ch/children-room/",
              },
              {
                isCategoriesDB: true,
                name: "Office",
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414Cat8.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250414_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-04",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250404b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250403b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "10",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "21",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "25:26",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.04.25 - March Peak reminder!",
                tableRange: "13:20",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.04.07",
        issueCardId: "350971",
        name: "Free scatter cushion",
        startId: "32082",
        figmaUrl:
          "https://www.figma.com/design/IjK9bpuYSsDvyYGnJwhnQG/2025.04.07-Free-scatter-cushion-(Copy)?m=auto&fuid=1328681953229888224",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebies,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            inside: {
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Living room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250407Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: origin.includes("HU") ? "306283" : "231605", //id: "306283",
                    src: origin.includes("HU")
                      ? getImageUrl("20250407Category11.png", true)
                      : getImageUrl("20250407huCategory11.png", true),
                  },
                  {
                    id: "421836",
                    src: getImageUrl("20250407Category12.png", true),
                  },
                  {
                    id: "383651",
                    src: getImageUrl("20250407Category13.png", true),
                  },
                  {
                    id: "290095",
                    src: getImageUrl("20250407Category14.png", true),
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250407Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "92894",
                    src: getImageUrl("20250407Category21.png", true),
                  },
                  {
                    id: "440882",
                    src: getImageUrl("20250407Category22.png", true),
                  },
                  {
                    id: "363379",
                    src: getImageUrl("20250407Category23.png", true),
                  },
                  {
                    id: "71096",
                    src: getImageUrl("20250407Category24.png", true),
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250407Category3.png", true),
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "567944",
                    src: getImageUrl("20250407Category31.png", true),
                  },
                  {
                    id: "216522",
                    src: getImageUrl("20250407Category32.png", true),
                  },
                  {
                    id: "330604",
                    src: getImageUrl("20250407Category33.png", true),
                  },
                  {
                    id: "438918",
                    src: getImageUrl("20250407Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250407Category4.png", true),
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                products: [
                  {
                    id: "319891",
                    src: getImageUrl("20250407Category41.png", true),
                  },
                  {
                    id: "555070",
                    src: getImageUrl("20250407Category42.png", true),
                  },
                  {
                    id: "527231",
                    src: getImageUrl("20250407Category43.png", true),
                  },
                  {
                    id: "523836",
                    src: getImageUrl("20250407Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250407_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-07",
                },
              },
              {
                value: getImageUrl("20250407_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250328b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-27",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250327b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_20250307.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "42:44",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "358248",
                      src: getImageUrl("20250407Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "357493",
                      src: getImageUrl("20250407Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "357745",
                      src: getImageUrl("20250407Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "357826",
                      src: getImageUrl("20250407Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "358029",
                      src: getImageUrl("20250407Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "358108",
                      src: getImageUrl("20250407Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferFreeebies,
            background: "#FD9000",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            inside: {
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Living room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250407Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: origin.includes("HU") ? "306283" : "231605", //id: "306283",
                    src: origin.includes("HU")
                      ? getImageUrl("20250407Category11.png", true)
                      : getImageUrl("20250407huCategory11.png", true),
                  },
                  {
                    id: "421836",
                    src: getImageUrl("20250407Category12.png", true),
                  },
                  {
                    id: "383651",
                    src: getImageUrl("20250407Category13.png", true),
                  },
                  {
                    id: "290095",
                    src: getImageUrl("20250407Category14.png", true),
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250407Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "92894",
                    src: getImageUrl("20250407Category21.png", true),
                  },
                  {
                    id: "440882",
                    src: getImageUrl("20250407Category22.png", true),
                  },
                  {
                    id: "363379",
                    src: getImageUrl("20250407Category23.png", true),
                  },
                  {
                    id: "71096",
                    src: getImageUrl("20250407Category24.png", true),
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250407Category3.png", true),
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "567944",
                    src: getImageUrl("20250407Category31.png", true),
                  },
                  {
                    id: "216522",
                    src: getImageUrl("20250407Category32.png", true),
                  },
                  {
                    id: "330604",
                    src: getImageUrl("20250407Category33.png", true),
                  },
                  {
                    id: "438918",
                    src: getImageUrl("20250407Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250407Category4.png", true),
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                products: [
                  {
                    id: "319891",
                    src: getImageUrl("20250407Category41.png", true),
                  },
                  {
                    id: "555070",
                    src: getImageUrl("20250407Category42.png", true),
                  },
                  {
                    id: "527231",
                    src: getImageUrl("20250407Category43.png", true),
                  },
                  {
                    id: "523836",
                    src: getImageUrl("20250407Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250407_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-07",
                },
              },
              {
                value: getImageUrl("20250407_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250328b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-27",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250327b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_20250307.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "42:44",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "358248",
                      src: getImageUrl("20250407Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "357493",
                      src: getImageUrl("20250407Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "357745",
                      src: getImageUrl("20250407Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "357826",
                      src: getImageUrl("20250407Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "358029",
                      src: getImageUrl("20250407Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "358108",
                      src: getImageUrl("20250407Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.03.31",
        issueCardId: "347548",
        name: "Free picnic blanket",
        startId: "31985",
        figmaUrl:
          "https://www.figma.com/design/68HlN7mNSJbis5cCSv0STr/2025.03.31---Newsletter---Free-picnic-blanket-(Copy)?node-id=8001-3604&p=f&t=SFSV70dWPMFhyYW0-0",
        alarm: {
          isActive: true,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebiesCategoryFilters,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            inside: {
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Sofas",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250331Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "465437",
                    src: getImageUrl("20250331Category11.png", true),
                  },
                  {
                    id: "393959",
                    src: getImageUrl("20250331Category12.png", true),
                  },
                  {
                    id: "368029",
                    src: getImageUrl("20250331Category13.png", true),
                  },
                  {
                    id: "330865",
                    src: getImageUrl("20250331Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250331Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "582048",
                    src: getImageUrl("20250331Category21.png", true),
                  },
                  {
                    id: "338111",
                    src: getImageUrl("20250331Category22.png", true),
                  },
                  {
                    id: "196119",
                    src: getImageUrl("20250331Category23.png", true),
                  },
                  {
                    id: "128772",
                    src: getImageUrl("20250331Category24.png", true),
                  },
                ],
              },
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250331Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "573785",
                    src: getImageUrl("20250331Category31.png", true),
                  },
                  {
                    id: "526429",
                    src: getImageUrl("20250331Category32.png", true),
                  },
                  {
                    id: "508878",
                    src: getImageUrl("20250331Category33.png", true),
                  },
                  {
                    id: "322972",
                    src: getImageUrl("20250331Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250331Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "517828",
                    src: getImageUrl("20250331Category41.png", true),
                  },
                  {
                    id: "586120",
                    src: getImageUrl("20250331Category42.png", true),
                  },
                  {
                    id: "414452",
                    src: getImageUrl("20250331Category43.png", true),
                  },
                  {
                    id: "259633",
                    src: getImageUrl("20250331Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-31",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250331_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-31",
                },
              },
              {
                value: getImageUrl("20250331_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250321b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_20250307.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "24:28",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "31",
                name: "ChooseFrom",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "33:34",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "39:42",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "43",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "30",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "28",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "35:38",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "49:51",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "564537",
                      src: getImageUrl("20250331Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "568836",
                      src: getImageUrl("20250331Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564575",
                      src: getImageUrl("20250331Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "564499",
                      src: getImageUrl("20250331Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564422",
                      src: getImageUrl("20250331Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferFreeebiesCategoryFilters,
            background: "#FD9000",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            inside: {
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Sofas",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250331Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "465437",
                    src: getImageUrl("20250331Category11.png", true),
                  },
                  {
                    id: "393959",
                    src: getImageUrl("20250331Category12.png", true),
                  },
                  {
                    id: "368029",
                    src: getImageUrl("20250331Category13.png", true),
                  },
                  {
                    id: "330865",
                    src: getImageUrl("20250331Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250331Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "582048",
                    src: getImageUrl("20250331Category21.png", true),
                  },
                  {
                    id: "338111",
                    src: getImageUrl("20250331Category22.png", true),
                  },
                  {
                    id: "196119",
                    src: getImageUrl("20250331Category23.png", true),
                  },
                  {
                    id: "128772",
                    src: getImageUrl("20250331Category24.png", true),
                  },
                ],
              },
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250331Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "573785",
                    src: getImageUrl("20250331Category31.png", true),
                  },
                  {
                    id: "526429",
                    src: getImageUrl("20250331Category32.png", true),
                  },
                  {
                    id: "508878",
                    src: getImageUrl("20250331Category33.png", true),
                  },
                  {
                    id: "322972",
                    src: getImageUrl("20250331Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250331Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "517828",
                    src: getImageUrl("20250331Category41.png", true),
                  },
                  {
                    id: "586120",
                    src: getImageUrl("20250331Category42.png", true),
                  },
                  {
                    id: "414452",
                    src: getImageUrl("20250331Category43.png", true),
                  },
                  {
                    id: "259633",
                    src: getImageUrl("20250331Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-31",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250331_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-31",
                },
              },
              {
                value: getImageUrl("20250331_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250321b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("_20250307.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "24:27",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "21:22",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "33:34",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "39:42",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "43",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "30",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "28",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "35:38",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "49:51",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "564537",
                      src: getImageUrl("20250331Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "568836",
                      src: getImageUrl("20250331Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564575",
                      src: getImageUrl("20250331Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "564499",
                      src: getImageUrl("20250331Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564422",
                      src: getImageUrl("20250331Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "30264",
        name: "March Peak reminder outdoor",
        date: "2025.03.24",
        issueCardId: "333992",
        figmaUrl: "https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23/2025-MarchPeak-(Copy)?t=EtPECgGgl5ApEN30-0",
        optimizeImg: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferLines,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat1.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat2.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat3.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat4.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat5.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat6.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat7.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/swings/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat8.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat9.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat10.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/fire-pits/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat11.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/parasols/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat12.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/garden-rugs/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat13.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/ ",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("202503024_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250320b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250313b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "18",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "63",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "67:68",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "19:45",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferLines,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat1.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat2.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat3.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat4.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat5.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat6.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat7.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/swings/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat8.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat9.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat10.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/fire-pits/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat11.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/parasols/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat12.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/garden-rugs/ ",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250324Cat13.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/ ",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("202503024_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250320b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250313b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "18",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "16",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "63",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "67:68",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "19:45",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.03.17",
        issueCardId: "344481",
        name: "Free gift",
        startId: "31472",
        figmaUrl:
          "https://www.figma.com/design/d2XPbTDDNIt82s3guRFQJp/2025.03.17---Newsletter---Free-gift-(Copy)?t=BlBdPm1wSLDVexuy-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebiesCategoryFilters,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#F6E7E6",
              color: "#000000",
            },
            categories: [
              {
                name: "Sofas",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250317Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "566687",
                    src: getImageUrl("20250317Category11.png", true),
                  },
                  {
                    id: "569789",
                    src: getImageUrl("20250317Category12.png", true),
                  },
                  {
                    id: "440319",
                    src: getImageUrl("20250317Category13.png", true),
                  },
                  {
                    id: "341074",
                    src: getImageUrl("20250317Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250317Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "564289",
                    src: getImageUrl("20250317Category21.png", true),
                  },
                  {
                    id: "392016",
                    src: getImageUrl("20250317Category22.png", true),
                  },
                  {
                    id: "567546",
                    src: getImageUrl("20250317Category23.png", true),
                  },
                  {
                    id: "402616",
                    src: getImageUrl("20250317Category24.png", true),
                  },
                ],
              },
              {
                name: "Beds",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250317Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "514638",
                    src: getImageUrl("20250317Category31.png", true),
                  },
                  {
                    id: "469323",
                    src: getImageUrl("20250317Category32.png", true),
                  },
                  {
                    id: "148274",
                    src: getImageUrl("20250317Category33.png", true),
                  },
                  {
                    id: "341548",
                    src: getImageUrl("20250317Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250317Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "346247",
                    src: getImageUrl("20250317Category41.png", true),
                  },
                  {
                    id: "261953",
                    src: getImageUrl("20250317Category42.png", true),
                  },
                  {
                    id: "199476",
                    src: getImageUrl("20250317Category43.png", true),
                  },
                  {
                    id: "409469",
                    src: getImageUrl("20250317Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250317_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-17",
                },
              },
              {
                value: getImageUrl("20250317_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250307b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "35:38",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "39",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "46:48",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "290338",
                      src: getImageUrl("20250317Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "291248",
                      src: getImageUrl("20250317Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "247880",
                      src: getImageUrl("20250317Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "189198",
                      src: getImageUrl("20250317Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferFreeebiesCategoryFilters,
            background: "#FFCCB7",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#F6E7E6",
              color: "#000000",
            },
            categories: [
              {
                name: "Sofas",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250317Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "566687",
                    src: getImageUrl("20250317Category11.png", true),
                  },
                  {
                    id: "569789",
                    src: getImageUrl("20250317Category12.png", true),
                  },
                  {
                    id: "440319",
                    src: getImageUrl("20250317Category13.png", true),
                  },
                  {
                    id: "341074",
                    src: getImageUrl("20250317Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250317Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "564289",
                    src: getImageUrl("20250317Category21.png", true),
                  },
                  {
                    id: "392016",
                    src: getImageUrl("20250317Category22.png", true),
                  },
                  {
                    id: "567546",
                    src: getImageUrl("20250317Category23.png", true),
                  },
                  {
                    id: "402616",
                    src: getImageUrl("20250317Category24.png", true),
                  },
                ],
              },
              {
                name: "Beds",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250317Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "514638",
                    src: getImageUrl("20250317Category31.png", true),
                  },
                  {
                    id: "469323",
                    src: getImageUrl("20250317Category32.png", true),
                  },
                  {
                    id: "148274",
                    src: getImageUrl("20250317Category33.png", true),
                  },
                  {
                    id: "341548",
                    src: getImageUrl("20250317Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250317Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "346247",
                    src: getImageUrl("20250317Category41.png", true),
                  },
                  {
                    id: "261953",
                    src: getImageUrl("20250317Category42.png", true),
                  },
                  {
                    id: "199476",
                    src: getImageUrl("20250317Category43.png", true),
                  },
                  {
                    id: "409469",
                    src: getImageUrl("20250317Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250317_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-17",
                },
              },
              {
                value: getImageUrl("20250317_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250307b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "35:38",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "39",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "46:50",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "290338",
                      src: getImageUrl("20250317Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                    },
                    {
                      id: "291248",
                      src: getImageUrl("20250317Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "247880",
                      src: getImageUrl("20250317Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                    },
                    {
                      id: "189198",
                      src: getImageUrl("20250317Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.03.10",
        issueCardId: "338780",
        name: "Free cover",
        startId: "31280",
        figmaUrl: "",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebies,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "green",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250310Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "574032",
                    src: getImageUrl("20250310Category11.png", true),
                  },
                  {
                    id: "523214",
                    src: getImageUrl("20250310Category12.png", true),
                  },
                  {
                    id: "519685",
                    src: getImageUrl("20250310Category13.png", true),
                  },
                  {
                    id: "573785",
                    src: getImageUrl("20250310Category14.png", true),
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250310Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/?sort=newest",
                products: [
                  {
                    id: "555717",
                    src: getImageUrl("20250310Category21.png", true),
                  },
                  {
                    id: "523724",
                    src: getImageUrl("20250310Category22.png", true),
                  },
                  {
                    id: "511075",
                    src: getImageUrl("20250310Category23.png", true),
                  },
                  {
                    id: "585356",
                    src: getImageUrl("20250310Category24.png", true),
                  },
                ],
              },
              {
                name: "Fire pits",
                background: "#FD9000",
                color: "#000000",
                src: (origin = ["PT", "RO"]
                  ? getImageUrl("other20250310Category3.png", true)
                  : getImageUrl("20250310Category3.png", true)),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: (origin = ["PT", "RO"] ? "85075" : "584193"),
                    src: (origin = ["PT", "RO"]
                      ? getImageUrl("other20250310Category31.png", true)
                      : getImageUrl("20250310Category31.png", true)),
                  },
                  {
                    id: (origin = ["PT", "RO"] ? "86988" : "584867"),
                    src: (origin = ["PT", "RO"]
                      ? getImageUrl("other20250310Category32.png", true)
                      : getImageUrl("20250310Category32.png", true)),
                  },
                  {
                    id: (origin = ["PT", "RO"] ? "197884" : "584370"),
                    src: (origin = ["PT", "RO"]
                      ? getImageUrl("other20250310Category33.png", true)
                      : getImageUrl("20250310Category33.png", true)),
                  },
                  {
                    id: (origin = ["PT", "RO"] ? "197909" : "584274"),
                    src: (origin = ["PT", "RO"]
                      ? getImageUrl("other20250310Category34.png", true)
                      : getImageUrl("20250310Category34.png", true)),
                  },
                ],
              },
              {
                name: "Outdoor kitchen",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250310Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "522129",
                    src: getImageUrl("20250310Category41.png", true),
                  },
                  {
                    id: "524199",
                    src: getImageUrl("20250310Category42.png", true),
                  },
                  {
                    id: "526467",
                    src: getImageUrl("20250310Category43.png", true),
                  },
                  {
                    id: "405331",
                    src: getImageUrl("20250310Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  //value: "content/lp25-03-10",
                  value: (origin = ["PT", "IT", "ES"] ? "content/lp25-03-18" : "content/lp25-03-19"),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250310_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-10",
                },
              },
              {
                value: getImageUrl("20250310_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250228b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "38:40",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "258744",
                      src: getImageUrl("202500310Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                      size: "145 x 110 x 80 cm",
                    },
                    {
                      id: "258740",
                      src: getImageUrl("202500310Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                      size: "160 x 160 x 90 cm",
                    },
                    {
                      id: "258743",
                      src: getImageUrl("202500310Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                      size: "110 x 100 x 70 cm",
                    },
                  ],
                },
              ],
              items1: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "258741",
                      src: getImageUrl("202500310Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 60px;",
                      size: "150 x 120 x 70 cm",
                    },
                    {
                      id: "258739",
                      src: getImageUrl("202500310Freebie5.png", true),
                      style: "padding-right: 60px; padding-left: 6px;",
                      size: "120 x 90 x 65 cm",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferFreeebies,
            background: "#FFCCB7",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250310Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "574032",
                    src: getImageUrl("20250310Category11.png", true),
                  },
                  {
                    id: "523214",
                    src: getImageUrl("20250310Category12.png", true),
                  },
                  {
                    id: "519685",
                    src: getImageUrl("20250310Category13.png", true),
                  },
                  {
                    id: "573785",
                    src: getImageUrl("20250310Category14.png", true),
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250310Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/?sort=newest",
                products: [
                  {
                    id: "555717",
                    src: getImageUrl("20250310Category21.png", true),
                  },
                  {
                    id: "523724",
                    src: getImageUrl("20250310Category22.png", true),
                  },
                  {
                    id: "511075",
                    src: getImageUrl("20250310Category23.png", true),
                  },
                  {
                    id: "585356",
                    src: getImageUrl("20250310Category24.png", true),
                  },
                ],
              },
              {
                name: "Fire pits",
                background: "#FD9000",
                color: "#000000",
                src: (origin = ["PT", "RO"]
                  ? getImageUrl("other20250310Category3.png", true)
                  : getImageUrl("20250310Category3.png", true)),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: (origin = ["PT", "RO"] ? "85075" : "584193"),
                    src: (origin = ["PT", "RO"]
                      ? getImageUrl("other20250310Category31.png", true)
                      : getImageUrl("20250310Category31.png", true)),
                  },
                  {
                    id: (origin = ["PT", "RO"] ? "86988" : "584867"),
                    src: (origin = ["PT", "RO"]
                      ? getImageUrl("other20250310Category32.png", true)
                      : getImageUrl("20250310Category32.png", true)),
                  },
                  {
                    id: (origin = ["PT", "RO"] ? "197884" : "584370"),
                    src: (origin = ["PT", "RO"]
                      ? getImageUrl("other20250310Category33.png", true)
                      : getImageUrl("20250310Category33.png", true)),
                  },
                  {
                    id: (origin = ["PT", "RO"] ? "197909" : "584274"),
                    src: (origin = ["PT", "RO"]
                      ? getImageUrl("other20250310Category34.png", true)
                      : getImageUrl("20250310Category34.png", true)),
                  },
                ],
              },
              {
                name: "Outdoor kitchen",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250310Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "522129",
                    src: getImageUrl("20250310Category41.png", true),
                  },
                  {
                    id: "524199",
                    src: getImageUrl("20250310Category42.png", true),
                  },
                  {
                    id: "526467",
                    src: getImageUrl("20250310Category43.png", true),
                  },
                  {
                    id: "405331",
                    src: getImageUrl("20250310Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250310_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-10",
                },
              },
              {
                value: getImageUrl("20250310_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250228b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "38:41",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "258744",
                      src: getImageUrl("202500310Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                      size: "145 x 110 x 80 cm",
                    },
                    {
                      id: "258740",
                      src: getImageUrl("202500310Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                      size: "160 x 160 x 90 cm",
                    },
                    {
                      id: "258743",
                      src: getImageUrl("202500310Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                      size: "110 x 100 x 70 cm",
                    },
                  ],
                },
              ],
              items1: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "258741",
                      src: getImageUrl("202500310Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 60px; display: inline-flex;",
                      size: "150 x 120 x 70 cm",
                    },
                    {
                      id: "258739",
                      src: getImageUrl("202500310Freebie5.png", true),
                      style: "padding-right: 60px; padding-left: 6px; display: inline-flex;",
                      size: "120 x 90 x 65 cm",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "30008",
        name: "March Peak Start",
        date: "2025.03.03",
        issueCardId: "333957",
        figmaUrl: "https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23/2025-MarchPeak-(Copy)?t=EtPECgGgl5ApEN30-0",
        optimizeImg: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferLines,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat8.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat9.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat10.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat11.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat12.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat13.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250220b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250213b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "18",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "63",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "67:68",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "19:45",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferLines,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat8.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat9.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat10.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat11.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat12.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303Cat13.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250303_gif.gif", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "18",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "63",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "67:68",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "19:45",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.02.24",
        issueCardId: "338780",
        name: "Free table lamp",
        startId: "30653",
        figmaUrl: "",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebies,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250224Category1.png", true),
                href: "https://www.beliani.ch/children-room/kids-beds/",
                products: [
                  {
                    id: "570248",
                    src: getImageUrl("20250224Category11.png", true),
                  },
                  {
                    id: "560617",
                    src: getImageUrl("20250224Category12.png", true),
                  },
                  {
                    id: "553500",
                    src: getImageUrl("20250224Category13.png", true),
                  },
                  {
                    id: "494188",
                    src: getImageUrl("20250224Category14.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250224Category2.png", true),
                href: "https://www.beliani.ch/children-room/kids-storage/",
                products: [
                  {
                    id: "575287",
                    src: getImageUrl("20250224Category21.png", true),
                  },
                  {
                    id: "571428",
                    src: getImageUrl("20250224Category22.png", true),
                  },
                  {
                    id: "525454",
                    src: getImageUrl("20250224Category23.png", true),
                  },
                  {
                    id: "574696",
                    src: getImageUrl("20250224Category24.png", true),
                  },
                ],
              },
              {
                name: "Chairs and tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250224Category3.png", true),
                href: "https://www.beliani.ch/children-room/kids-chairs/",
                products: [
                  {
                    id: "571941",
                    src: getImageUrl("20250224Category31.png", true),
                  },
                  {
                    id: "574110",
                    src: getImageUrl("20250224Category32.png", true),
                  },
                  {
                    id: "580048",
                    src: getImageUrl("20250224Category33.png", true),
                  },
                  {
                    id: "522357",
                    src: getImageUrl("20250224Category34.png", true),
                  },
                ],
              },
              {
                name: "Decor",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250224Category4.png", true),
                href: "https://www.beliani.ch/children-room/kids-decor/",
                products: [
                  {
                    id: "563320",
                    src: getImageUrl("20250224Category41.png", true),
                  },
                  {
                    id: "346059",
                    src: getImageUrl("20250224Category42.png", true),
                  },
                  {
                    id: "438813",
                    src: getImageUrl("20250224Category43.png", true),
                  },
                  {
                    id: "367235",
                    src: getImageUrl("20250224Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250224_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-24",
                },
              },
              {
                value: getImageUrl("20250224_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250213b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250212b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "38:40",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "358561",
                      src: getImageUrl("202500224Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "356263",
                      src: getImageUrl("202500224Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "337836",
                      src: getImageUrl("202500224Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "337874",
                      src: getImageUrl("202500224Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "315163",
                      src: getImageUrl("202500224Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "406189",
                      src: getImageUrl("202500224Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferFreeebies,
            background: "#FD9000",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250224Category1.png", true),
                href: "https://www.beliani.ch/children-room/kids-beds/",
                products: [
                  {
                    id: "570248",
                    src: getImageUrl("20250224Category11.png", true),
                  },
                  {
                    id: "560617",
                    src: getImageUrl("20250224Category12.png", true),
                  },
                  {
                    id: "553500",
                    src: getImageUrl("20250224Category13.png", true),
                  },
                  {
                    id: "494188",
                    src: getImageUrl("20250224Category14.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250224Category2.png", true),
                href: "https://www.beliani.ch/children-room/kids-storage/",
                products: [
                  {
                    id: "575287",
                    src: getImageUrl("20250224Category21.png", true),
                  },
                  {
                    id: "571428",
                    src: getImageUrl("20250224Category22.png", true),
                  },
                  {
                    id: "525454",
                    src: getImageUrl("20250224Category23.png", true),
                  },
                  {
                    id: "574696",
                    src: getImageUrl("20250224Category24.png", true),
                  },
                ],
              },
              {
                name: "Chairs and tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250224Category3.png", true),
                href: "https://www.beliani.ch/children-room/kids-chairs/",
                products: [
                  {
                    id: "571941",
                    src: getImageUrl("20250224Category31.png", true),
                  },
                  {
                    id: "574110",
                    src: getImageUrl("20250224Category32.png", true),
                  },
                  {
                    id: "580048",
                    src: getImageUrl("20250224Category33.png", true),
                  },
                  {
                    id: "522357",
                    src: getImageUrl("20250224Category34.png", true),
                  },
                ],
              },
              {
                name: "Decor",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250224Category4.png", true),
                href: "https://www.beliani.ch/children-room/kids-decor/",
                products: [
                  {
                    id: "563320",
                    src: getImageUrl("20250224Category41.png", true),
                  },
                  {
                    id: "346059",
                    src: getImageUrl("20250224Category42.png", true),
                  },
                  {
                    id: "438813",
                    src: getImageUrl("20250224Category43.png", true),
                  },
                  {
                    id: "367235",
                    src: getImageUrl("20250224Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250224_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-24",
                },
              },
              {
                value: getImageUrl("20250224_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250213b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250212b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "38:41",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "358561",
                      src: getImageUrl("202500224Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "356263",
                      src: getImageUrl("202500224Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "337836",
                      src: getImageUrl("202500224Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "337874",
                      src: getImageUrl("202500224Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "315163",
                      src: getImageUrl("202500224Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "406189",
                      src: getImageUrl("202500224Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "31070",
        name: "Gardenshopopening",
        date: "2025.02.19",
        issueCardId: "323851",
        figmaUrl:
          "https://www.figma.com/design/nF95r6ICvR9kgwWrYJrQ5w/2025.02.19-Garden-shop-opening-(Copy)?node-id=0-1&p=f&t=Uklzgdb5sEKg4tN3-0",
        optimizeImg: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferLines,
            background: "#FFF4E6",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFF4E6",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category1.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category2.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category3.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/sun-loungers/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category4.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category5.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category6.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category7.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/swings/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category8.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category9.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category10.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/fire-pits/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category11.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/patio-heaters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category12.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/parasols/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category13.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/garden-rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category14.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-19",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-19",
                },
              },
              {
                src: {
                  type: "relation",
                  value: getImageUrl("20250219GIF.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250212b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250207b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "13:26",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferLines,
            background: "#FFF4E6",
            css: types.CSS.LP,
            intro: {
              background: "#FFF4E6",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category1.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category2.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category3.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category4.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category5.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category6.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category7.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/swings/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category8.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category9.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category10.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/fire-pits/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category11.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/patio-heaters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category12.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/parasols/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category13.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/garden-rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219Category14.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-19",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250219_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-19",
                },
              },
              {
                src: {
                  type: "relation",
                  value: getImageUrl("20250219GIF.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250212b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250207b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "13:26",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.02.17",
        issueCardId: "337508",
        name: "Newsletter Mix & match",
        startId: "30621",
        figmaUrl:
          "https://www.figma.com/design/5mpqATyBA5uPWx8OqNRgvx/2025.02.17--Mix-%26-match-(Copy)?t=0hWOrao9GwzCv6Pn-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebies,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Sofas",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250217Category1.png", true),
                href: "https://www.beliani.ch/sofas/",
                products: [
                  {
                    id: "306304",
                    src: getImageUrl("20250217Category11.png", true),
                  },
                  {
                    id: "372692",
                    src: getImageUrl("20250217Category12.png", true),
                  },
                  {
                    id: "129456",
                    src: getImageUrl("20250217Category13.png", true),
                  },
                  {
                    id: "561262",
                    src: getImageUrl("20250217Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250217Category2.png", true),
                href: "https://www.beliani.ch/armchairs/",
                products: [
                  {
                    id: "201302",
                    src: getImageUrl("20250217Category21.png", true),
                  },
                  {
                    id: "410138",
                    src: getImageUrl("20250217Category22.png", true),
                  },
                  {
                    id: "383583",
                    src: getImageUrl("20250217Category23.png", true),
                  },
                  {
                    id: "392053",
                    src: getImageUrl("20250217Category24.png", true),
                  },
                ],
              },
              {
                name: "Scatter cushions",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250217Category3.png", true),
                href: "https://www.beliani.ch/accessories-decor/home-scatter-cushions/",
                products: [
                  {
                    id: "328593",
                    src: getImageUrl("20250217Category31.png", true),
                  },
                  {
                    id: "348602",
                    src: getImageUrl("20250217Category32.png", true),
                  },
                  {
                    id: "381698",
                    src: getImageUrl("20250217Category33.png", true),
                  },
                  {
                    id: "204409",
                    src: getImageUrl("20250217Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250217Category4.png", true),
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                products: [
                  {
                    id: "523725",
                    src: getImageUrl("20250217Category41.png", true),
                  },
                  {
                    id: "562922",
                    src: getImageUrl("20250217Category42.png", true),
                    name: "ALZIRA/UTIEL",
                  },
                  {
                    id: "527250",
                    src: getImageUrl("20250217Category43.png", true),
                  },
                  {
                    id: "437677",
                    src: getImageUrl("20250217Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250217_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-17",
                },
              },
              {
                value: getImageUrl("20250217GIF.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250207b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250206b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "20:23",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "28:29",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "34",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "25",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "23",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "30:33",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "37:39",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "195998",
                      src: getImageUrl("20250217Freebies1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "119655",
                      src: getImageUrl("20250217Freebies2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "194769",
                      src: getImageUrl("20250217Freebies3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "194763",
                      src: getImageUrl("20250217Freebies4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferFreeebies,
            background: "#FD9000",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Sofas",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250217Category1.png", true),
                href: "https://www.beliani.ch/sofas/",
                products: [
                  {
                    id: "306304",
                    src: getImageUrl("20250217Category11.png", true),
                  },
                  {
                    id: "372692",
                    src: getImageUrl("20250217Category12.png", true),
                  },
                  {
                    id: "129456",
                    src: getImageUrl("20250217Category13.png", true),
                  },
                  {
                    id: "561262",
                    src: getImageUrl("20250217Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250217Category2.png", true),
                href: "https://www.beliani.ch/armchairs/",
                products: [
                  {
                    id: "201302",
                    src: getImageUrl("20250217Category21.png", true),
                  },
                  {
                    id: "410138",
                    src: getImageUrl("20250217Category22.png", true),
                  },
                  {
                    id: "383583",
                    src: getImageUrl("20250217Category23.png", true),
                  },
                  {
                    id: "392053",
                    src: getImageUrl("20250217Category24.png", true),
                  },
                ],
              },
              {
                name: "Scatter cushions",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250217Category3.png", true),
                href: "https://www.beliani.ch/accessories-decor/home-scatter-cushions/",
                products: [
                  {
                    id: "328593",
                    src: getImageUrl("20250217Category31.png", true),
                  },
                  {
                    id: "348602",
                    src: getImageUrl("20250217Category32.png", true),
                  },
                  {
                    id: "381698",
                    src: getImageUrl("20250217Category33.png", true),
                  },
                  {
                    id: "204409",
                    src: getImageUrl("20250217Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250217Category4.png", true),
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                products: [
                  {
                    id: "523725",
                    src: getImageUrl("20250217Category41.png", true),
                  },
                  {
                    id: "562922",
                    src: getImageUrl("20250217Category42.png", true),
                    name: "ALZIRA/UTIEL",
                  },
                  {
                    id: "527250",
                    src: getImageUrl("20250217Category43.png", true),
                  },
                  {
                    id: "437677",
                    src: getImageUrl("20250217Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250217_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-17",
                },
              },
              {
                value: getImageUrl("20250217GIF.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250207b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250206b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "20:23",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "28:29",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "34",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "25",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "23",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "30:33",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "37:39",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "195998",
                      src: getImageUrl("20250217Freebies1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "119655",
                      src: getImageUrl("20250217Freebies2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "194769",
                      src: getImageUrl("20250217Freebies3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "194763",
                      src: getImageUrl("20250217Freebies4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.02.10",
        issueCardId: "335604",
        name: "Free bathroom set",
        startId: "30489",
        figmaUrl: "",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebies,
            background: "#F6E7E6",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#F6E7E6",
            },
            intro: {
              background: "#750000",
              color: "#FFFFFF",
            },
            categories: [
              {
                name: "Baths",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250210Category1.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/",
                products: [
                  {
                    id: "415278",
                    src: getImageUrl("20250210Category11.png", true),
                  },
                  {
                    id: "59969",
                    src: getImageUrl("20250210Category12.png", true),
                  },
                  {
                    id: "303990",
                    src: getImageUrl("20250210Category13.png", true),
                  },
                  {
                    id: "200441",
                    src: getImageUrl("20250210Category14.png", true),
                  },
                ],
              },
              {
                name: "Showers",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250210Category2.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/showers/",
                products: [
                  {
                    id: "568228",
                    src: getImageUrl("20250210Category21.png", true),
                  },
                  {
                    id: "567335",
                    src: getImageUrl("20250210Category22.png", true),
                  },
                  {
                    id: "231147",
                    src: getImageUrl("20250210Category23.png", true),
                  },
                  {
                    id: "567506",
                    src: getImageUrl("20250210Category24.png", true),
                  },
                ],
              },
              {
                name: "Fittings",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250210Category3.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathroom-fittings/",
                products: [
                  {
                    id: "193860",
                    src: getImageUrl("20250210Category31.png", true),
                  },
                  {
                    id: "198082",
                    src: getImageUrl("20250210Category32.png", true),
                  },
                  {
                    id: "198206",
                    src: getImageUrl("20250210Category33.png", true),
                  },
                  {
                    id: "93729",
                    src: getImageUrl("20250210Category34.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250210Category4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/storage/",
                products: [
                  {
                    id: "571961",
                    src: getImageUrl("20250210Category41.png", true),
                  },
                  {
                    id: "527059",
                    src: getImageUrl("20250210Category42.png", true),
                    name: "ALZIRA/UTIEL",
                  },
                  {
                    id: "257939",
                    src: getImageUrl("20250210Category43.png", true),
                  },
                  {
                    id: "370307",
                    src: getImageUrl("20250210Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250210_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-10",
                },
              },
              {
                value: getImageUrl("20250210_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-30",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250130b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-23",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250123b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "20:23",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "28:29",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "34",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "25",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "23",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "30:33",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "39:41",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#F6E7E6",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "316613",
                      src: getImageUrl("202500210Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320593",
                      src: getImageUrl("202500210Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320574",
                      src: getImageUrl("202500210Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "320521",
                      src: getImageUrl("202500210Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320503",
                      src: getImageUrl("202500210Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "316805",
                      src: getImageUrl("202500210Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferFreeebies,
            background: "#750000",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#F6E7E6",
            },
            intro: {
              background: "#750000",
              color: "#FFFFFF",
            },
            categories: [
              {
                name: "Baths",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250210Category1.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/",
                products: [
                  {
                    id: "415278",
                    src: getImageUrl("20250210Category11.png", true),
                  },
                  {
                    id: "59969",
                    src: getImageUrl("20250210Category12.png", true),
                  },
                  {
                    id: "303990",
                    src: getImageUrl("20250210Category13.png", true),
                  },
                  {
                    id: "200441",
                    src: getImageUrl("20250210Category14.png", true),
                  },
                ],
              },
              {
                name: "Showers",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250210Category2.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/showers/",
                products: [
                  {
                    id: "568228",
                    src: getImageUrl("20250210Category21.png", true),
                  },
                  {
                    id: "567335",
                    src: getImageUrl("20250210Category22.png", true),
                  },
                  {
                    id: "231147",
                    src: getImageUrl("20250210Category23.png", true),
                  },
                  {
                    id: "567506",
                    src: getImageUrl("20250210Category24.png", true),
                  },
                ],
              },
              {
                name: "Fittings",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250210Category3.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathroom-fittings/",
                products: [
                  {
                    id: "193860",
                    src: getImageUrl("20250210Category31.png", true),
                  },
                  {
                    id: "198082",
                    src: getImageUrl("20250210Category32.png", true),
                  },
                  {
                    id: "198206",
                    src: getImageUrl("20250210Category33.png", true),
                  },
                  {
                    id: "93729",
                    src: getImageUrl("20250210Category34.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250210Category4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/storage/",
                products: [
                  {
                    id: "571961",
                    src: getImageUrl("20250210Category41.png", true),
                  },
                  {
                    id: "527059",
                    src: getImageUrl("20250210Category42.png", true),
                  },
                  {
                    id: "257939",
                    src: getImageUrl("20250210Category43.png", true),
                  },
                  {
                    id: "370307",
                    src: getImageUrl("20250210Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250210_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-10",
                },
              },
              {
                value: getImageUrl("20250210_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-30",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250130b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-23",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250123b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "20:23",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "28:29",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "34",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "25",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "23",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "30:33",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "39:41",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#F6E7E6",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "316613",
                      src: getImageUrl("202500210Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320593",
                      src: getImageUrl("202500210Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320574",
                      src: getImageUrl("202500210Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "320521",
                      src: getImageUrl("202500210Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320503",
                      src: getImageUrl("202500210Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "316805",
                      src: getImageUrl("202500210Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.02.03",
        issueCardId: "333236",
        name: "Free bean bag cove",
        startId: "29976",
        figmaUrl:
          "https://www.figma.com/design/CaysvOMPkrgsrV7nT8a2nG/Newsletter-Free-bean-bag-cover---Monday-2025.02.03_v2?node-id=0-1&p=f&t=clsJLQorJPlZDjaG-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferSingleFreeebies,
            background: "#750000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#FFFFFF",
              background: "#750000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Living room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250203Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: "576282",
                    src: getImageUrl("20250203Category11.png", true),
                  },
                  {
                    id: "571047",
                    src: getImageUrl("20250203Category12.png", true),
                  },
                  {
                    id: "460136",
                    src: getImageUrl("20250203Category13.png", true),
                  },
                  {
                    id: "563149",
                    src: getImageUrl("20250203Category14.png", true),
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250203Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "565888",
                    src: getImageUrl("20250203Category21.png", true),
                  },
                  {
                    id: "571124",
                    src: getImageUrl("20250203Category22.png", true),
                  },
                  {
                    id: "580448",
                    src: getImageUrl("20250203Category23.png", true),
                  },
                  {
                    id: "419977",
                    src: getImageUrl("20250203Category24.png", true),
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250203Category3.png", true),
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "563777",
                    src: getImageUrl("20250203Category31.png", true),
                  },
                  {
                    id: "579839",
                    src: getImageUrl("20250203Category32.png", true),
                  },
                  {
                    id: "394733",
                    src: getImageUrl("20250203Category33.png", true),
                  },
                  {
                    id: "311077",
                    src: getImageUrl("20250203Category34.png", true),
                  },
                ],
              },
              {
                name: "Bathroom",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250203Category4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/",
                products: [
                  {
                    id: "572170",
                    src: getImageUrl("20250203Category41.png", true),
                  },
                  {
                    id: "568020",
                    src: getImageUrl("20250203Category42.png", true),
                  },
                  {
                    id: "561339",
                    src: getImageUrl("20250203Category43.png", true),
                  },
                  {
                    id: "522969",
                    src: getImageUrl("20250203Category44.png", true),
                  },
                ],
              },
              {
                name: "FUZZY",
                type: "one_freebie",
                color: "#ffffff",
                src: getImageUrl("202500203Freebie1.png", true),
                href: "https://www.beliani.ch/bean-bags-eng/bean-bag-covers/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250203_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-03",
                },
              },
              {
                value: getImageUrl("20250203_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250116b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250115b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "21:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "40:42",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#FFFFFF",
                background: "#750000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 1,
                  },
                  products: [
                    {
                      id: "324975",
                      src: getImageUrl("202500203Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferSingleFreeebies,
            background: "#750000",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#FFFFFF",
              background: "#750000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Living room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250203Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: "576282",
                    src: getImageUrl("20250203Category11.png", true),
                  },
                  {
                    id: "571047",
                    src: getImageUrl("20250203Category12.png", true),
                  },
                  {
                    id: "460136",
                    src: getImageUrl("20250203Category13.png", true),
                  },
                  {
                    id: "563149",
                    src: getImageUrl("20250203Category14.png", true),
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250203Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "565888",
                    src: getImageUrl("20250203Category21.png", true),
                  },
                  {
                    id: "571124",
                    src: getImageUrl("20250203Category22.png", true),
                  },
                  {
                    id: "580448",
                    src: getImageUrl("20250203Category23.png", true),
                  },
                  {
                    id: "419977",
                    src: getImageUrl("20250203Category24.png", true),
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250203Category3.png", true),
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "563777",
                    src: getImageUrl("20250203Category31.png", true),
                  },
                  {
                    id: "579839",
                    src: getImageUrl("20250203Category32.png", true),
                  },
                  {
                    id: "394733",
                    src: getImageUrl("20250203Category33.png", true),
                  },
                  {
                    id: "311077",
                    src: getImageUrl("20250203Category34.png", true),
                  },
                ],
              },
              {
                name: "Bathroom",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250203Category4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/",
                products: [
                  {
                    id: "572170",
                    src: getImageUrl("20250203Category41.png", true),
                  },
                  {
                    id: "568020",
                    src: getImageUrl("20250203Category42.png", true),
                  },
                  {
                    id: "561339",
                    src: getImageUrl("20250203Category43.png", true),
                  },
                  {
                    id: "522969",
                    src: getImageUrl("20250203Category44.png", true),
                  },
                ],
              },
              {
                name: "FUZZY",
                type: "one_freebie",
                color: "#ffffff",
                src: getImageUrl("202500203Freebie1.png", true),
                href: "https://www.beliani.ch/bean-bags-eng/bean-bag-covers/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250203_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-03",
                },
              },
              {
                value: getImageUrl("20250203_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250116b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250115b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "21:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "40:42",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#FFFFFF",
                background: "#750000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 1,
                  },
                  products: [
                    {
                      id: "324975",
                      src: getImageUrl("202500203Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
    ],
    shops: SHOPS,

    config: {
      server_url: "https://pictureserver.net/static/2024/",
      campaign_url: "https://www.prologistics.info/news_email.php?id=",
      issue_url: "https://www.prologistics.info/react/logs/issue_logs/",
      alarm_days: 7,
      confetti: true,
      replaceToBrs: true,
      emptyCell: (message) =>
        `<span style='font-size: 20px; background: #ff0000;'>${message || "Cell is empty"}</span>`,
    },
  });
} catch (error) {
  console.log(error);
  Toastify({
    text: error.message || "Something went wrong. More details in console.",
    escapeMarkup: false,
    duration: 3000,
  }).showToast();
}
