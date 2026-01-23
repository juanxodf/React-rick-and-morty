import type { Character } from "../types/rickAndMorty";

type Props = {
  character: Character;
  isSelected: boolean;
  onSelect: (character: Character) => void;
};

export default function CharacterCard({ character, isSelected, onSelect }: Props) {
  return (
    <li>
      <button
      type="button"
      onClick={() => onSelect(character)}
      className={`character-card ${isSelected ? "selected" : ""}`}
      >
        <img 
          src={character.image} 
          alt={character.name} 
          className="character-image"
        />
        <div className="character-content">
          <h3 className="character-name">{character.name}</h3>
          <p className={`character-status ${character.status.toLowerCase()}`}>
            ● {character.status}
          </p>
          <p>
            <strong>Origen:</strong> {character.origin.name}
          </p>
          <p>
            <strong>Ubicación:</strong> {character.location.name}
          </p>
        </div>
      </button>
    </li>
  );
}