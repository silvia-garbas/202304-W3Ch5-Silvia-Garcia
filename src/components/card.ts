import { Component } from './component';
import { Pokemon } from '../model/pokemon';
import { PokeAki } from '../data/api.pokemon';
export class Card extends Component {
  pokemon!: Pokemon[];
  repository: PokeAki;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    console.log(this.pokemon);
    this.repository = new PokeAki();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemon = await this.repository.getAll();
    console.log(this.pokemon);
    console.log(this.pokemon.results);

    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon.results
      .map(
        (item: { name: string; url: string }) => `
           <li>
      <p>${item.name}</p>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
        item.url.split('/')[6]
      }.gif" heigh=100 width=100>
      <span data-id="${item.url}"></span>
    </li>`
      )
      .join('');

    return `
      <ul class="ul_main">${list}</ul>
      `;
  }
}
