import { LitElement, html } from "lit-element";
import { createElement } from "react";
import { render } from "react-dom";
import retargetEvent from "react-shadow-dom-retarget-events";

export const rc2wc = (App: React.FC) => {
  return class extends LitElement {
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
  } as typeof LitElement;
};
