import { useEffect, useState } from "react";
import { fetchCharacters } from "./api/rmApi";
import type { Character } from "./types/rickAndMorty";
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";
import StatusFilter from "./components/StatusFilter";
import CharacterDetail from "./components/CharacterDetail";
import LoadMoreButton from "./components/LoadMoreButton";

type StatusValue = "" | "alive" | "dead" | "unknown";

export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusValue>("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchCharacters({ page: 1, name: query.trim(), status })
      .then((data) => { 
        setCharacters(data.results);
        setPage(1);
        setHasMore(Boolean(data.info.next));
      })
      .catch(() => { setError("Error al cargar los personajes") })
      .finally(() => { setLoading(false) });
  }, [query, status]);
  
  const loadMore = async () => {
    if (loadingMore || !hasMore) return;

    const nextPage = page + 1;
    setLoadingMore(true);

    try {
      const data = await fetchCharacters({ 
        page: nextPage, 
        name: query.trim(), 
        status 
      });

      setCharacters((prev) => [...prev, ...data.results]);
      setPage(nextPage);
      setHasMore(Boolean(data.info.next));
    } catch (err) {
      setError("Error al cargar más personajes");
    } finally {
      setLoadingMore(false);
    }
  }

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
              selectId={selectedCharacter?.id ?? null}
              onSelect={setSelectedCharacter}
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
