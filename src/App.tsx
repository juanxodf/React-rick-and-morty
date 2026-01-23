import { useEffect, useState } from "react";
import { fetchCharacters } from "./api/rmApi";
import type { Character } from "./types/rickAndMorty";
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";
import StatusFilter from "./components/StatusFilter";

type StatusValue = "" | "alive" | "dead" | "unknown";

export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusValue>("");

  const handleQueryChange = (newValue: string) => {
    console.log("Nueva consulta:", newValue);
    setQuery(newValue);
  }
  
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchCharacters({ page: 1 , name: query.trim(), status: status })
    .then((data) => { setCharacters(data.results) }) 
    .catch(() => { setError("Error al cargar los personajes") })
    .finally(() => { setLoading(false) });
  }, [query, status]);
  return (
    <div>
      <h1>Rick y Morty</h1>

      <SearchBar value={query} onChange={handleQueryChange} />
      <StatusFilter value={status} onChange={setStatus} />

      {loading && <p>Cargando personajes...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
        <p> Resultados: {characters.length}</p>
        <CharacterList characters={characters} />  
      </>
      )}
    </div>
  );
}
