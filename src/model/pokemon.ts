export type PokeStructure = {
  id: number;
  name: string;
  image: string;
  isFavorite: boolean;
};

export class Pokemon implements PokeStructure {
  public id!: number;
  public isFavorite: boolean;
  constructor(public name: string, public image: string) {
    this.isFavorite = false;
  }
}
