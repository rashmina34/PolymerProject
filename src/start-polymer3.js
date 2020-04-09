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
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-card/paper-card.js';
import './another-page';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

class StartPolymer3 extends PolymerElement {
  static get properties() {
    return {
      message: {
        type: String,
        value: '',
      },
      pie: {
        type: Boolean,
        value: false,
        observer: 'togglePie'
      },
      loadComplete: {
        type: Boolean,
        value: false
      },
      selected: {
        type: Number,
        value: 0,
      },
    };
  }

  constructor() {
    // If you override the constructor, always call the 
    // superconstructor first.
    super();
    // Resolve warning about scroll performance 
    // See https://developers.google.com/web/updates/2016/06/passive-event-listeners
    setPassiveTouchGestures(true);
    this.message = `HELLO WORLD !!! I am polymer element. Have a nice day ${new Date()}`;
  }

  ready() {
    // If you override ready, always call super.ready() first.
    super.ready();
    // Output the custom element's HTML tag to the browser console.
    // Open your browser's developer tools to view the output.
    console.log(this.tagName);
    this.$.omgpie.focus();
    if (window.location.pathname === ('/')) {
      this.selected = 0;

    } else if (window.location.pathname === '/page1') {
      this.selected = 1;

    } else {
      this.selected = 2;
    }

  }


  togglePie() {
    debugger
    if (this.pie && !this.loadComplete) {
      // See https://developers.google.com/web/updates/2017/11/dynamic-import
      import('./lazy-element').then((LazyElement) => {
        // `${<p>Hello world</p>}`

        console.log('Lazy Element Loaded', LazyElement);

      }).catch((reason) => {
        console.log("LazyElement failed to load", reason);
      });
      this.loadComplete = true;
    }
  }

  handleClick() {
    alert("Hello You are looking for polymer project and welcome to the project")
  }

  handlePageClick() {
    this.set('route.path', '/page1')
    this.selected = 1
  }

  static get template() {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
    <iron-pages selected=[[selected]]>
    <div>
      <style>
        paper-checkbox {
          --paper-checkbox-checked-ink-color: #FFFFFF;
          --paper-checkbox-unchecked-ink-color: #FFFFFF;
        }
        
        .message{
          color:green;
          font-size:20px;
        }
        .button-style{
          background-color: green;
          color:white;
          margin: 1%;
          height: 30px

        }
        .not_found{
          font-size: 50px;
          text-align: center;
        }
        .card-style{
          width: 30% !important;
        }
        
      </style>
      <app-location route="{{route}}"></app-location>
    
      <ul>
       <li>
        <span on-click="handlePageClick">
         click to Navigate
        </span>
        </li>
      </ul>
      <h1>Start Polymer 3.0</h1>
      <p class='message'>[[message]]</p>
      <button class='button-style' on-click="handleClick">Click me to get message</button>
      </br>
     
      <br/>
      <paper-checkbox id="omgpie"
        toggles
        noink
        checked={{pie}}>Check me to get new component</paper-checkbox>
      <template is="dom-if" if=[[pie]]>
        <lazy-element></lazy-element>
      </template>
      <br/>

<paper-card class="card-style" heading="Emmental" image="http://lorempixel.com/600/400" alt="Emmental">
<div class="card-content">
  Emmentaler or Emmental is a yellow, medium-hard cheese that originated in the area around Emmental, Switzerland. It is one of the cheeses of Switzerland, and is sometimes known as Swiss cheese.
</div>
<div class="card-actions">
  <paper-button>Share</paper-button>
  <paper-button>Explore!</paper-button>
</div>
</paper-card>
          </div>

    <div><another-page></another-page></div>
    
    <div class="not_found">Page Not Found</div>
   
    </iron-pages>
    `;
  }
}

// Register the element with the browser.
customElements.define('start-polymer3', StartPolymer3);
