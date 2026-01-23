import type { Character } from "../types/rickAndMorty";
import CharacterCard from "./CharacterCard";

type Props = {
  characters: Character[];
  selectId: number | null;
  onSelect: (character: Character) => void;
};

export default function CharacterList({ characters, selectId, onSelect }: Props) {
  return (
    <ul className="character-grid">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isSelected={selectId === character.id}
          onSelect={() => onSelect(character)}
        />
      ))}
    </ul>
  );
}