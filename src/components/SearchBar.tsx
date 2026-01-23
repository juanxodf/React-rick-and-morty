import {useEffect, useRef } from "react";

type Props = {
  value: string;
  onChange: (newValue: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  const inputId = "search-character";

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => { inputRef.current?.focus() }
    ,[]);

  return (
    <div style={{ marginBottom: 12 }}>
      <label htmlFor={inputId} style={{ display: "block", marginBottom: 6 }}>
        Buscar personaje:
      </label>

      <input
        id={inputId}
        type="text"
        placeholder="Ej: Rick"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: 8, width: "100%", maxWidth: 320 }}
      />
    </div>
  );
}
