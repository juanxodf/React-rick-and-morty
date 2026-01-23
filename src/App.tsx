import { useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import StatusFilter from "./components/StatusFilter";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import LoadMoreButton from "./components/LoadMoreButton";
import { useCharacters } from "./hooks/useCharacters";

type StatusValue = "" | "alive" | "dead" | "unknown";

export default function App() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusValue>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { characters, loading, error, hasMore, loadingMore, loadMore } = useCharacters(query, status);
  const selectedCharacter = useMemo(
    () => (selectedId ? characters.find((character) => character.id === selectedId) ?? null : null),
    [characters, selectedId]
  );

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
            <>
              <CharacterList
                characters={characters}
                selectId={selectedId}
                onSelectId={setSelectedId}
              />

              <LoadMoreButton
                onClick={loadMore}
                disabled={loadingMore}
                loadingMore={loadingMore}
                hasMore={hasMore}
              />
            </>
          )}
        </section>

        <aside className="detail-panel">
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
