import { Pokemon } from '../model/pokemon';

export class ApiPokemon {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  }

  async getAll() {
    const response = await fetch(this.url);
    const pokeList = await response.json();
    return pokeList.results
  }

  async getPokemon(url: Pokemon['url']) {
    const response = await fetch(url);
    console.log(response);
    return response.json();
  }
}
