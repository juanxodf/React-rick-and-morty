type Props = {
  value: string;
  onChange: (newValue: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ display: "block", marginBottom: 6 }}>
        Buscar personaje:
      </label>

      <input
        type="text"
        placeholder="Ej: Rick"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: 8, width: "100%", maxWidth: 320 }}
      />
    </div>
  );
}