/* eslint-disable no-unused-vars */

import { Component } from './component';


export class Menu extends Component {
  constructor(public selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `
    <nav class="menu" role="menu">
    <ul class="menu__ul">
    <li class="menu__favorite"><a href="favorite.path">My favorite</a></li>
    </ul>
    </nav>
    `;
  }
}
