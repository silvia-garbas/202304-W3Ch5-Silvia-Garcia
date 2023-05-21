import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="header">
              <img class="pokemon_logo" src="/pokemon-logo.svg" alt="Pokemon logo" width=350 height=200>
           <div clas="header__title">Welcome to the Pokemon World! Enjoy it!</div>
            </header>`;
  }
}
