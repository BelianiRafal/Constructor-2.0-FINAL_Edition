export function getTrackingUrl({ type, id }) {
    switch (type) {
      case "newsletter":
        return "?utm_source=newsletter&utm_medium=email&utm_campaign=" + id;
      case "landing":
        return "";
      default:
        return "";
    }
  }
  