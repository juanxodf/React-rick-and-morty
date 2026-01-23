import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/rmApi";
import type { Character } from "../types/rickAndMorty";

type StatusValue = "" | "alive" | "dead" | "unknown";

export function useCharacters(query: string, status: StatusValue) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchCharacters({ page: 1, name: query.trim(), status })
      .then((data) => {
        setCharacters(data.results);
        setPage(1);
        setHasMore(Boolean(data.info.next));
      })
      .catch(() => setError("Error al cargar los personajes"))
      .finally(() => setLoading(false));
  }, [query, status]);

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;

    const nextPage = page + 1;
    setLoadingMore(true);

    try {
      const data = await fetchCharacters({
        page: nextPage,
        name: query.trim(),
        status,
      });

      setCharacters((prev) => [...prev, ...data.results]);
      setPage(nextPage);
      setHasMore(Boolean(data.info.next));
    } catch {
      setError("Error al cargar más personajes");
    } finally {
      setLoadingMore(false);
    }
  };

  return {
    characters,
    loading,
    error,
    hasMore,
    loadingMore,
    loadMore,
  };
}