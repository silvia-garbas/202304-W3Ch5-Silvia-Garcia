/* eslint-disable no-unused-vars */

import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
    <header class="main-header">
      <img class="pokemon-logo" src="/pokemon-logo.svg" alt="Pokemon logo">
      <h1 class="main-title">WELCOME TO THE POKEMON WORLD! ENJOY IT!</h1>
    </header>
    `;
  }
}
