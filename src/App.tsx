import { useEffect, useState } from "react";
import { fetchCharacters } from "./api/rmApi";
import type { Character } from "./types/rickAndMorty";
import CharacterList from "./components/CharacterList";

export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters({ page: 1 }).then((data) => {
      setCharacters(data.results);
    });
  }, []);

  return (
    <div>
      <h1>Rick y Morty</h1>
      <CharacterList characters={characters} />
    </div>
  );
}
