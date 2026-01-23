import { useEffect, useState } from "react";
import { fetchCharacters } from "./api/rmApi";
import type { Character } from "./types/rickAndMorty";
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";
import StatusFilter from "./components/StatusFilter";
import CharacterDetail from "./components/CharacterDetail";

type StatusValue = "" | "alive" | "dead" | "unknown";

export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusValue>("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchCharacters({ page: 1, name: query.trim(), status: status })
      .then((data) => { setCharacters(data.results) })
      .catch(() => { setError("Error al cargar los personajes") })
      .finally(() => { setLoading(false) });
  }, [query, status]);
  
  return (
    <div className="page">
      <header className="header">
        <h1>Rick and Morty</h1>
        <SearchBar value={query} onChange={setQuery} />
        <StatusFilter value={status} onChange={setStatus} />
      </header>

      <main className="layout">
        <section>
          {loading && <p>Cargando personajes...</p>}
          {error && <p>{error}</p>}

          {!loading && !error && characters.length === 0 && (
            <p>No se encontraron personajes</p>
          )}

          {!loading && !error && characters.length > 0 && (
            <CharacterList
              characters={characters}
              selectId={selectedCharacter?.id ?? null}
              onSelect={setSelectedCharacter}
            />
          )}
        </section>

        <aside>
          {selectedCharacter ? (
            <CharacterDetail character={selectedCharacter} />
          ) : (
            <div className="detail-empty">
              <p><strong>Selecciona un personaje</strong> para ver su detalle.</p>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
}
