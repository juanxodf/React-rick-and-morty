import type { Character } from "../types/rickAndMorty";
import CharacterCard from "./CharacterCard";

type Props = {
  characters: Character[];
};

export default function CharacterList({ characters }: Props) {
  return (
    <ul>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
        />
      ))}
    </ul>
  );
}