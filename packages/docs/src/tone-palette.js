export class TonePalette extends HTMLElement {
  constructor() {
    super();

    this.template = document.querySelector("#tone-palette");
  }

  connectedCallback() {
    const el = this.template.content.cloneNode(true);
    this.innerHTML = "";
    this.append(el);
  }
}

window.customElements.define("tone-palette", TonePalette);
