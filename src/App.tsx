import { useEffect, useState } from "react";
import { fetchCharacters } from "./api/rmApi";
import type { Character } from "./types/rickAndMorty";
import CharacterList from "./components/CharacterList";

export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    fetchCharacters({ page: 1 }).then((data) => {
      setCharacters(data.results);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Rick y Morty</h1>

      {
        // Muestra un mensaje si no hay personajes y no está cargando, pero si está cargando muestra la lista de personajes 
      }

      {loading && <p>Cargando personajes...</p>}

      {!loading && (
        <CharacterList characters={characters} />
      )}
    </div>
  );
}
