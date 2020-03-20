/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class LazyElement extends PolymerElement {



  static get template() {
    var host = document.querySelector('#shadowDom');
    var shadowRoot = host.createShadowRoot();
    var div = document.createElement('div')
    div.textContent = "you ccan see me now";
    shadowRoot.appendChild(div);
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
    <div id="shadowDom"> I'm Shadow DOM</div>
    `;
  }
}

// Register the element with the browser.
customElements.define('lazy-element', LazyElement);
