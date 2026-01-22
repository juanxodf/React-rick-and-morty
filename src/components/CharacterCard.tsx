import type { Character } from "../types/rickAndMorty";

type Props = {
  character: Character;
};

export default function CharacterCard({ character }: Props) {
  return (
    <li>
      <img src={character.image} alt={character.name} width={80} />
      <p>{character.name}</p>
    </li>
  );
}