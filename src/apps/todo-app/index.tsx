import { LitElement, customElement, html } from 'lit-element';
import { render } from 'react-dom';
import retargetEvent from 'react-shadow-dom-retarget-events';
import { createElement } from 'react';
import App from './App';

@customElement('todo-app')
export class ReactFrame extends LitElement {
  static formAssociated = true;
  
  firstUpdated() {
    const mount = this.shadowRoot?.querySelector('main');

    if (mount) {
      render(createElement(App), mount);

      this.dispatchEvent(
        new CustomEvent('init', {
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

