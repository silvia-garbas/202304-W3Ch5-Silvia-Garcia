import { Component } from './component';

export class Footer extends Component {
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<footer class="footer">
          <p class="footer_text">${this.title}</p>
            </footer>`;
  }
}
