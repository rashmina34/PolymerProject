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
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/iron-image/iron-image.js';

class AnotherPage extends PolymerElement {


  static get template() {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
    <style>
    iron-image {
      width: 40px;
      height: 40px;
      border-radius: 50%
      background-color: lightgray;
      text-align: center;
    }
    .image-style {
      border-radius: 50% !important;
    }
    </style>
      <iron-image class="image-style" sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>
      <h2> Welcome to page1. </h2>
      <h3>Paper slider Example: slide to increase count </h3>
      <paper-slider value="21" dir="rtl" editable></paper-slider>
      </br>
      <h3>Input Elements of polymer project</h3>

      <paper-input label="Full Name Eg. Rashmina Shrestha"></paper-input>
      <paper-input label="Pre Filled example" value="Rashmina Shrestha"></paper-input>
      <paper-textarea label="autoresizing textarea input"></paper-textarea>
      <paper-input label="password input" type="password"></paper-input>
      <p>Gender</p>
      <paper-radio-group attr-for-selected="value">
      <paper-radio-button value="male" name="gender">Male</paper-radio-button>
      <paper-radio-button value="female" name="gender">Female</paper-radio-button>
      <paper-radio-button value="other" name="gender">Other</paper-radio-button>
      </paper-radio-group>

    `;
  }
}

// Register the element with the browser.
customElements.define('another-page', AnotherPage);
