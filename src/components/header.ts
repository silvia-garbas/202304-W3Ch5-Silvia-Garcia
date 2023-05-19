/* eslint-disable no-unused-vars */

import { Component } from './component';

export class Header extends Component {
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
    <header class="main-header">ei
      <h1 class="main-title">My Series</h1>
      <img class="pokemon-logo" src="/pokemon-logo.svg" alt="Pokemon">
    </header>
    `;
  }
}
