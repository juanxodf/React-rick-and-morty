export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: string;
  image: string;
  location: { name: string };
  origin: { name: string };
};

export type ApiInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type CharactersResponse = {
  info: ApiInfo;
  results: Character[];
};