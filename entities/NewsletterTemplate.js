import { TemplateLinks } from "./TemplateLinks.js";

function Template() {
  return "Template not found.";
}

export class NewsletterTemplate {
  name;
  type;
  wrapper;
  css;
  links;
  tableQueries;
  template;
  background = "#ffffff"
  constructor({ type, wrapper, name, css, links, tableQueries, template, background }) {
    if (!(links instanceof TemplateLinks)) {
      throw new Error(
        "Please, use TemplateLinks to define links in Template."
      );
    }
    this.type = type;
    this.wrapper = wrapper;
    this.name = name;
    this.css = css;
    this.links = links.links
    this.tableQueries = tableQueries;
    this.template = template || Template;
    this.background = background || this.background
  }

}
