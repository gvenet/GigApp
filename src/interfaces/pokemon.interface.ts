export interface PokemonInterface {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type?: [string?, string?];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    SpAttack: number;
    SpDefense: number;
    Speed: number;
  };
  species?: string;
  description?: string;
  evolution?: {
    prev?: [string?, string?];
    next?: [
      [string?, string?]?,
      [string?, string?]?,
      [string?, string?]?,
      [string?, string?]?,
      [string?, string?]?,
      [string?, string?]?,
      [string?, string?]?,
      [string?, string?]?,
    ];
  };
  profile?: {
    height?: string;
    weight?: string;
    egg?: [string?, string?];
    ability?: [[string?, string?]?, [string?, string?]?, [string?, string?]?];
    gender?: string;
  };
  image: {
    sprite?: string;
    thumbnail: string;
    hires?: string;
  };
}
