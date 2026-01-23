import type { Character } from "../types/rickAndMorty";
import CharacterCard from "./CharacterCard";

type Props = {
  characters: Character[];
  selectId: number | null;
  onSelectId: (id: number) => void;
};

export default function CharacterList({ characters, selectId, onSelectId }: Props) {
  return (
    <ul className="character-grid">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isSelected={selectId === character.id}
          onSelect={() => onSelectId(character.id)}
        />
      ))}
    </ul>
  );
}
