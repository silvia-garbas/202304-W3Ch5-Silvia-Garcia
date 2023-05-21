import { Component } from './component';

export class Footer extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <footer class="footer">
    <p class="footer_text">${this.title}</p>
    </footer>`;
  }
}

//  <span class="footer__copyright" role="phrase">
//    Pokemon Copyright
//  </span>;
