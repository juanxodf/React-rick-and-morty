import type { Character } from "../types/rickAndMorty";

type Props = {
  character: Character;
};

export default function CharacterDetail({ character }: Props) {
  return (
    <section className="detail-card">
      <img
        src={character.image}
        alt={character.name}
        className="detail-image"
      />

      <div className="detail-content">
        <h2 className="detail-title">{character.name}</h2>

        <p className={`character-status ${character.status.toLowerCase()}`}>
          ● {character.status}
        </p>

        <p>
          <strong>Especie:</strong> {character.species}
        </p>

        <p>
          <strong>Género:</strong> {character.gender}
        </p>

        <p>
          <strong>Origen:</strong> {character.origin.name}
        </p>

        <p>
          <strong>Ubicación:</strong> {character.location.name}
        </p>
      </div>
    </section>
  );
}