import { LitElement, customElement, html } from "lit-element";
import { createElement } from "react";
import { render } from "react-dom";
import App from "./App";
import retargetEvent from "react-shadow-dom-retarget-events";

@customElement("redux-app")
export class ReactFrame extends LitElement {
  firstUpdated() {
    const mount = this.shadowRoot?.querySelector("main");

    if (mount) {
      render(createElement(App), mount);

      this.dispatchEvent(
        new CustomEvent("init", {
          detail: {
            width: mount.clientWidth,
            height: mount.clientHeight,
          },
        })
      );

      this.shadowRoot && retargetEvent(this.shadowRoot);
    }
  }

  render() {
    return html`<main></main>`;
  }
}
