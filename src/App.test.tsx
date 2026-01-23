import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import App from "./App";
import { charactersPage1, makeResponse } from "./test/fixtures";

vi.mock("./api/rmApi", () => {
    return {
        fetchCharacters: vi.fn(async ({ name, status, page }: any) => {
            // Simulación simple:
            // - si name incluye "rick" -> devuelve Rick
            // - si status es "dead" -> vacío
            // - si page > 1 -> vacío (por simplificar)
            if (page && page > 1) return makeResponse([], false);

            if (status === "dead") return makeResponse([], false);

            if (name && String(name).toLowerCase().includes("rick")) {
                return makeResponse([charactersPage1[0]], false);
            }

            return makeResponse(charactersPage1, false);
        }),
    };
});

describe("App", () => {
    test("muestra personajes al iniciar", async () => {
        render(<App />);

        // Esperamos a que aparezca Rick (carga inicial)
        expect(await screen.findByText("Rick Sanchez")).toBeInTheDocument();
        expect(screen.getByText("Morty Smith")).toBeInTheDocument();
    });

    test("al escribir en la búsqueda, filtra resultados", async () => {
        render(<App />);

        // Espera carga inicial
        await screen.findByText("Rick Sanchez");

        const input = screen.getByPlaceholderText("Ej: Rick");
        await userEvent.clear(input);
        await userEvent.type(input, "rick");

        // Debe seguir estando Rick
        await waitFor(() => {
            expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
        });

        // Morty debería desaparecer porque mock devuelve solo Rick
        expect(screen.queryByText("Morty Smith")).not.toBeInTheDocument();
    });

    test("al cambiar el filtro a Dead, muestra 'No se encontraron personajes'", async () => {
        render(<App />);

        // Carga inicial
        await screen.findByText("Rick Sanchez");

        // Cambiar select a "dead"
        const select = screen.getByLabelText("Filtrar por estado:");
        await userEvent.selectOptions(select, "dead");

        // Debe mostrar mensaje de vacío
        await waitFor(() => {
            expect(screen.getByText("No se encontraron personajes")).toBeInTheDocument();
        });
    });

    test("al seleccionar un personaje se muestra su detalle", async () => {
        render(<App />);

        // Carga inicial
        await screen.findByText("Rick Sanchez");

        // Click en la carta (el botón contiene el nombre)
        await userEvent.click(screen.getByText("Rick Sanchez"));

        // En el panel detalle deben aparecer campos que solo existen en el detalle
        await waitFor(() => {
            expect(screen.getByText("Especie:")).toBeInTheDocument();
        });
        expect(screen.getByText("Human")).toBeInTheDocument();
    });
});
