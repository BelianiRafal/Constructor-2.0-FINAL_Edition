import { incrementId } from "../helpers/incrementId.js";
import { getState, setState } from "./initApp.js";

function openCampaignHandler(id) {
  const config = getState("config");
  if (!id) {
    Toastify({
      text: `Select campaign.`,
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
    return;
  }
  window.open(config.campaign_url + id, "_blank");
}

function openLpHandler(lpLinks, country) {
  if (!lpLinks || !lpLinks[country]) {
    Toastify({
      text: `Select campaign.`,
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
    return;
  }
  window.open(lpLinks[country], "_blank");
}

function openIssueHandler(id) {
  const config = getState("config");

  window.open(config.issue_url + id, "_blank");
}

function figmaCardHandler(url) {
  const config = getState("config");

  window.open(url, "_blank");
}

function selectCampaignHandler(ev, campaigns) {
  const selectedCampaign = campaigns.find(
    (campaign) => campaign.startId === ev.target.value
  );

  if (!selectedCampaign) {
    Toastify({
      text: `Campaign startId ${ev.target.value} not found.`,
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
    return;
  }

  // Dla pewności pokaż całą kampanię w konsoli (do debugowania)
  console.log("selectedCampaign z campaigns:", selectedCampaign);

  // Ustawienie mapy inkrementowanych ID (do "Open campaign")
  setState("ids", incrementId(selectedCampaign.startId, selectedCampaign.version || "old"));

  // Ustawienie wybranej kampanii z najważniejszymi polami
  setState("selectedCampaign", {
    startId: selectedCampaign.startId,
    name: selectedCampaign.name,
    templates: selectedCampaign.templates,
    lpId: selectedCampaign.lpId,
    specialLpIds: selectedCampaign.specialLpIds,
    date: selectedCampaign.date,                // <-- Dodaj, jeśli chcesz
    issueCardId: selectedCampaign.issueCardId,  // <-- Dodaj, jeśli chcesz
    figmaUrl: selectedCampaign.figmaUrl,        // <-- Dodaj, jeśli chcesz
    version: selectedCampaign.version || "old",
    // Dodaj tutaj inne pola, których potrzebujesz!
  });

  // Zwróć całą kampanię i listę templatek
  return { selectedCampaign, templates: selectedCampaign.templates };
}

function handleSlugChange(ev) {
  const slugAndName = ev.target.value.split("-");
  setState("country", slugAndName[0]);
  setState("name", slugAndName[1]);
}

function handleShopChange(ev, shops) {
  const shop = shops.find((item) => item.shopId === ev.target.value);
  setState("shop", shop);
}

export {
  handleSlugChange,
  selectCampaignHandler,
  openCampaignHandler,
  openLpHandler,
  handleShopChange,
  openIssueHandler,
  figmaCardHandler
};
