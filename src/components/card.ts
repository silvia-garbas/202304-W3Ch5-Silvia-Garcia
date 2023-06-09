import { Component } from './component';
import { Pokemon } from '../model/pokemon';
import { ApiPokemon } from '../data/api.pokemon.repository';
export class Card extends Component {
  pokemon!: Pokemon[];
  repo: ApiPokemon;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    console.log(this.pokemon);
    this.repo = new ApiPokemon();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemon = await this.repo.getAll();
    console.log(this.pokemon);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon
      .map(
        (item: { name: string; url: string }) => `
           <li>
      <p>${item.name.toUpperCase()}</p>
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
