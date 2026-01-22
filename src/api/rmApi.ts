import type { CharactersResponse } from "../types/rickAndMorty";

const BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters(params: {
  page?: number;
  name?: string;
  status?: string;
  signal?: AbortSignal;
}): Promise<CharactersResponse> {
  const url = new URL(`${BASE_URL}/character`);

  if (params.page) url.searchParams.set("page", String(params.page));
  if (params.name) url.searchParams.set("name", params.name);
  if (params.status) url.searchParams.set("status", params.status);

  const res = await fetch(url.toString(), { signal: params.signal });

  // La API devuelve 404 si no hay resultados
  if (res.status === 404) {
    return {
      info: { count: 0, pages: 0, next: null, prev: null },
      results: [],
    };
  }

  if (!res.ok) {
    throw new Error("Error al cargar personajes");
  }

  return res.json();
}