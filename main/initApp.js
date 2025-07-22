import {
  selectCampaignHandler,
  openCampaignHandler,
  openLpHandler,
  handleSlugChange,
  openIssueHandler,
  handleShopChange,
  figmaCardHandler,
} from "./events.js";
import { SpinnerInit } from "../helpers/spinner/spinerOptions.js";
import { addParams } from "../helpers/getQueryLink.js";
import { TemplateHandlers } from "./handlers/handlers.js";
import { wrapTemplate } from "../helpers/wrapTemplate.js";
import { fetchTranslations } from "../api/fetchTranslations.js";
import { normalizeProducts } from "../utils/normalizeProducts.js";
import { isQuotaExceededError } from "../helpers/isQuotaExceededError.js";
import { computeValue } from "../helpers/computeValue.js";
import { getTrackingUrl } from "../utils/geTrackingUrl.js";
import { generateLpLinks } from "../helpers/generateLpLinks.js";

const state = {
  queries: {},
  country: "",
  loading: false,
  ids: {},
  translations: {},
  selectedCampaign: {},
  selectedTemplates: [],
  shop: null,
};
const root = document.querySelector("#app");

export function setState(key, value) {
  state[key] = value;

  if (key === "loading" && value === true) {
    root.innerHTML = "";
    SpinnerInit.spin(root);
  }

  if (key === "loading" && value === false) {
    SpinnerInit.stop(root);
  }
}

export function getState(key) {
  if (key in state) {
    return state[key];
  } else {
    return undefined;
  }
}

export function initApp({ campaigns, shops, config }) {
  const jsConfetti = new JSConfetti();

  const shops_select = document.querySelector("#shops");
  const languages_select = document.querySelector("#languages");
  const new_products = document.querySelector("#new_products");
  const selectCampaigns = document.querySelector("#campaigns");
  const selectTemplates = document.querySelector("#templates");
  const copyTemplate = document.querySelector(".copyTemplate");
  const openCampaign = document.querySelector(".openCampaign");
  const openIssue = document.querySelector(".openIssue");
  const figmaCard = document.querySelector(".figmaCard");
  const clearStorage = document.querySelector(".clearStorage");
  const openLP = document.querySelector('.openLP');

  setState("config", config);
  selectCampaigns.append(...initCampaigns(campaigns, config));
  setEvents();

  async function render() {
    if (!getState("country")) return;
    const country = getState("country");
    const templateToRender = getState("template");
    const selectedCampaign = getState("selectedCampaign");

    if (!selectedCampaign) {
      Toastify({
        text: "Select campaign.",
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
      return;
    }

    if (!templateToRender) {
      Toastify({
        text: "Select template.",
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
      return;
    }

    // IF data property is NOT provided for CAMPAIGN in app.js
    // and tableQueries array provided EXECUTE function to fetch translations.
    if (!selectedCampaign.data && templateToRender.tableQueries.length > 0) {
      try {
        setState("loading", true);
        const translationsResult = await fetchTranslations({
          tableQueries: templateToRender.tableQueries,
        });
        const queries = {};
        for (const translation of translationsResult) {
          queries[translation.name] = translation.data;
        }
        setState("loading", false);
        setState("queries", queries);
      } catch (error) {
        setState("loading", false);
        console.log(error);

        Toastify({
          text: error,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
        return;
      }
    }

    // IF data property PROVIDED for CAMPAIGN in app.js
    // and tableQueries array provided ADD FALLBACKS to queries.[name]
    if (selectedCampaign.data && templateToRender.tableQueries.length > 0) {
      const queries = {};
      for (const translation of templateToRender.tableQueries) {
        queries[translation.name] = translation.fallback
      }
      setState("queries", queries);
    }

    let slugData = {};
    if (!!selectedCampaign.data) {
      if (country in selectedCampaign.data) {
        slugData = selectedCampaign.data[country] || {};
      } else {
        Toastify({
          text:
            "Country " +
            country +
            " not found in campaign data. For " +
            selectedCampaign.name +
            ".",
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
        return;
      }
    }

    // addParams check the link on "query" key and execute with origin.
    const links = addParams({
      links: templateToRender.links,
    });

    const ids = getState("ids");
    const localProducts = getState("selectedCampaign").products;
    const LSProducts = localProducts || localStorage.getItem("products");
    const parsedProducts = localProducts
    
      ? normalizeProducts(localProducts)
      : LSProducts
      ? JSON.parse(LSProducts)
      : [];
    const campaignProducts = localProducts
      ? parsedProducts
      : parsedProducts.find(
          (item) => item.campaign_id === getState("selectedCampaign").startId
        );

    // We can read data from table.
    // Create fetch request in tableQueries property inside app.js file.
    const handlers = new TemplateHandlers({
      templates: getState("queries").templates,
      header: getState("queries").header,
      footer: getState("queries").footer,
      categoriesLinks: getState("queries").categoriesLinks,
      categoriesTitles: getState("queries").categoriesTitles,
      products: localProducts ? parsedProducts : campaignProducts?.products,
    });

    try {
      const html = await templateToRender.template({
        ...state,
        ...templateToRender,
        background: templateToRender.background || "#ffffff",
        country,
        id: ids[country],
        categories: templateToRender.categories?.map((item) =>
          Array.isArray(item)
            ? item.map((item) => computeValue({ ...item }))
            : computeValue({ ...item })
        ),
        type: templateToRender.type,
        getProductById: handlers.getProductById,
        getCategoryTitle: handlers.getCategoryTitle,
        getCategoryLink: handlers.getCategoryLink,
        getFooter: handlers.getFooter,
        getHeader: handlers.getHeader,
        getPhrase: handlers.getPhrase,
        add_utm: (link) => templateToRender.type == 'newsletter' ? link + '?utm_source=newsletter&utm_medium=email&utm_campaign=' + ids[country] : link,
        getCampaignData: (key) => {
          if (key in slugData) {
            return slugData[key];
          } else {
            return undefined;
          }
        },
        links: links,
        utm: getTrackingUrl({ type: templateToRender.type, id: ids[country] }),
      });

      const withStylesOrNo =
        "css" in templateToRender
          ? `<style>${templateToRender.css}</style>` + html
          : html;

      const wrappedHtml = templateToRender.wrapper
        ? wrapTemplate(templateToRender.wrapper, {
            style: templateToRender.css ?? "",
            html: html,
          })
        : withStylesOrNo;
      setState("html", wrappedHtml);

      if (withStylesOrNo.includes("undefined")) {
        if (confirm("Do you want to render template with undefined value?")) {
          return (root.innerHTML = withStylesOrNo);
        } else {
          Toastify({
            text: "Error rendering. HTML code has undefined value.",
            escapeMarkup: false,
            duration: 3000,
          }).showToast();
        }
      } else {
        root.innerHTML = withStylesOrNo;
      }
    } catch (error) {
      console.log(error);
      Toastify({
        text: "Please check console. " + error.message,
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
  }

  function setEvents() {
    new_products?.addEventListener("click", () => {
      const products = prompt("Provide products");
      if (!products) {
        return Toastify({
          text: "Input incorrect",
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }
      let newProducts;
      try {
        newProducts = JSON.parse(products);
      } catch (error) {
        console.log(error);
        Toastify({
          text: "Products parse error: " + error.message,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }

      const selectedCampaign = getState("selectedCampaign");
      const prev = localStorage.getItem("products");
      try {
        const prevProducts = prev ? JSON.parse(prev) : [];
        const isProductsSetted = prevProducts.find(
          (item) => item.campaign_id === selectedCampaign.startId
        );

        const normalizedProducts = normalizeProducts(newProducts);
        // If products already exists for selected campaign
        if (isProductsSetted) {
          const updatedProducts = prevProducts.map((item) => {
            if (item.campaign_id === selectedCampaign.startId) {
              return {
                ...item,
                products: normalizedProducts,
              };
            }
            return item;
          });
          try {
            localStorage.setItem("products", JSON.stringify(updatedProducts));
            Toastify({
              text: "Products successfully saved.",
              escapeMarkup: false,
              duration: 3000,
            }).showToast();
          } catch (error) {
            const quotaExceededError = isQuotaExceededError(error);
            if (quotaExceededError) {
              const ids = prevProducts.map((item) => item.campaign_id);
              const deleteCampaignId = prompt(
                "Memory exceeded, please enter startId to delete: " +
                  ids.join(",")
              );
              if (!deleteCampaignId) {
                return;
              }
              if (!ids.includes(deleteCampaignId)) {
                Toastify({
                  text: "Co robisz?!?",
                  escapeMarkup: false,
                  duration: 3000,
                }).showToast();
                return;
              }
              const prevCampaigns = prevProducts.filter(
                (item) => item.campaign_id !== deleteCampaignId
              );
              localStorage.setItem(
                "products",
                JSON.stringify([
                  ...prevCampaigns,
                  {
                    campaign_id: selectedCampaign.startId,
                    products: normalizedProducts,
                  },
                ])
              );
              Toastify({
                text: "Products successfully saved.",
                escapeMarkup: false,
                duration: 3000,
              }).showToast();
              return;
            }
          }
          return;
        } else {
          try {
            localStorage.setItem(
              "products",
              JSON.stringify([
                ...prevProducts,
                {
                  campaign_id: selectedCampaign.startId,
                  products: normalizedProducts,
                },
              ])
            );
          } catch (error) {
            const quotaExceededError = isQuotaExceededError(error);
            if (quotaExceededError) {
              const ids = prevProducts.map((item) => item.campaign_id);
              const deleteCampaignId = prompt(
                "Memory exceeded, please enter startId to delete: " +
                  ids.join(",")
              );
              if (!deleteCampaignId) {
                return;
              }
              if (!ids.includes(deleteCampaignId)) {
                Toastify({
                  text: "Co robisz?!?",
                  escapeMarkup: false,
                  duration: 3000,
                }).showToast();
                return;
              }
              const prevCampaigns = prevProducts.filter(
                (item) => item.campaign_id !== deleteCampaignId
              );
              localStorage.setItem(
                "products",
                JSON.stringify([
                  ...prevCampaigns,
                  {
                    campaign_id: selectedCampaign.startId,
                    products: normalizedProducts,
                  },
                ])
              );
              Toastify({
                text: "Products successfully saved.",
                escapeMarkup: false,
                duration: 3000,
              }).showToast();
              return;
            }
          }
        }
      } catch (error) {
        Toastify({
          text: "Products error: " + error.message,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }
    });
    openCampaign?.addEventListener("click", (e) =>
      openCampaignHandler(state.ids[state.country])
    );
    openIssue?.addEventListener("click", (e) => {
      if (!state.selectedCampaign.issueCardId) {
        Toastify({
          text: `Select campaign.`,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
        return;
      }
      openIssueHandler(state.selectedCampaign.issueCardId);
    });
    figmaCard?.addEventListener("click", (e) => {
      if (!state.selectedCampaign.figmaUrl) {
        Toastify({
          text: `Figma url not found.`,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
        return;
      }
      figmaCardHandler(state.selectedCampaign.figmaUrl);
    });
    clearStorage?.addEventListener("click", (e) => {
      if (
        confirm("All data will be removed from localstorage! Are you sure?")
      ) {
        localStorage.clear();
      }
    });
    const countriesOrdering = [
      "CHDE", "CHFR", "UK", "DE", "FR", "AT", "ES", "PL", "NL", "PT", "IT", "SE",
      "HU", "DK", "CZ", "FI", "NO", "SK", "BENL", "BEFR", "RO"
    ];

    const openLP = document.querySelector('.openLP');
    openLP?.addEventListener('click', () => {
      const selectedCampaign = getState('selectedCampaign');
      console.log('selectedCampaign', selectedCampaign);
      if (!selectedCampaign.lpId) {
        Toastify({
          text: 'You not selected campaign or not set LP id in app.js.',
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
        return;
      }

      console.log("selectedCampaign:", selectedCampaign);
      console.log("specialLpIds:", selectedCampaign.specialLpIds);

      const countryOrderOld = [
        "CHDE", "CHFR", "UK", "DE", "FR", "AT", "ES", "PL", "NL", "PT",
        "IT", "SE", "HU", "DK", "CZ", "FI", "NO", "SK", "BENL", "BEFR", "RO"
      ];
      
      const countryOrderNew = [
        "CHDE", "CHFR", "UK", "DE", "FR", "AT", "ES", "PL", "NL",
        "BENL", "BEFR", "PT", "IT", "SE", "HU", "DK", "CZ", "FI", "NO", "SK", "RO"
      ];
      
      const selectedCountryOrder = selectedCampaign.version === "new"
        ? countryOrderNew
        : countryOrderOld;

      console.log("selectedCampaign.version:", selectedCampaign.version);
      console.log("selectedCountryOrder:", selectedCountryOrder);
      
      const lpLinks = generateLpLinks(
        selectedCampaign.lpId,
        selectedCountryOrder,
        selectedCampaign.name,
        selectedCampaign.specialLpIds
      );
      openLpHandler(lpLinks, state.country);
    });

    const options = [];
    for (const shop of shops) {
      const option = document.createElement("option");
      option.value = shop.shopId;
      option.textContent = shop.seller;
      options.push(option);
    }
    const option = document.createElement("option");
    option.value = "default";
    option.textContent = "Select shop";
    option.defaultSelected = true;
    options.push(option);
    shops_select.append(...options);

    shops_select.addEventListener("change", (ev) => {
      if (ev.target.value === "default") {
        return;
      }
      handleShopChange(ev, shops);
      const shop = getState("shop");
      languages_select.innerHTML = "";
      const lang_options = [];
      for (const { language } of shop.languages) {
        const option = document.createElement("option");
        option.value = language.slug + "-" + language.name;
        option.textContent = language.name;
        option.style.textTransform = "capitalize";
        lang_options.push(option);
      }
      const option = document.createElement("option");
      option.value = "default";
      option.textContent = "Select language";
      option.defaultSelected = true;
      lang_options.push(option);
      languages_select.append(...lang_options);
      languages_select.style.display = "block";
    });

    languages_select.addEventListener("change", (ev) => {
      if (ev.target.value === "default") {
        return;
      }
      handleSlugChange(ev);
      render();
    });

    copyTemplate?.addEventListener("click", () => {
      const html = getState("html");
      if (!html) {
        Toastify({
          text: `Render HTML.`,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
        return;
      }
      if (state.config?.confetti) {
        jsConfetti.addConfetti({
          emojiSize: 20,
          confettiNumber: 80,
        });
      }

      navigator.clipboard.writeText(html);
    });

    selectCampaigns.addEventListener("change", (ev) => {
      if (ev.target.value === "default") {
        return;
      }
      const { selectedCampaign, templates } = selectCampaignHandler(
        ev,
        campaigns
      );

      root.innerHTML = "";
      selectTemplates.innerHTML =
        '<option value="default">Select template</option>';
      selectTemplates.append(...renderAvailableTemplates(templates));

      setState("selectedTemplates", templates);
      setState("selectedCampaign", selectedCampaign);
      setState("optimizeImg", selectedCampaign.optimizeImg || false);
    });

    selectTemplates.addEventListener("change", (ev) => {
      if (ev.target.value === "default") {
        return;
      }

      setSelectedTemplate(ev);
      render();
    });
  }

  function setSelectedTemplate(ev) {
    const selectedTemplates = getState("selectedTemplates");
    const selectedTemplate = selectedTemplates.find(
      (template) => template.type + "_" + template.name === ev.target.value
    );
    if (!selectedTemplate) {
      Toastify({
        text: `Template ${ev.target.value} not found.`,
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
    new_products.style.display = "block";
    if (selectedTemplate.type === "banner") {
      openCampaign.style.display = "none";
    } else {
      openCampaign.style.display = "block";
    }
    setState("template", selectedTemplate);
  }
}
