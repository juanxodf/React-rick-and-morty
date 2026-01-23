export const charactersPage1 = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://example.com/rick.png",
    origin: { name: "Earth (C-137)" },
    location: { name: "Citadel of Ricks" },
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://example.com/morty.png",
    origin: { name: "Earth (C-137)" },
    location: { name: "Earth (Replacement Dimension)" },
  },
];

export const charactersEmpty = [];

export function makeResponse(results: any[], hasNext: boolean) {
  return {
    info: { count: results.length, pages: 1, next: hasNext ? "next" : null, prev: null },
    results,
  };
}