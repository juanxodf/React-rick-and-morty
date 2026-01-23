type StatusValue = "" | "alive" | "dead" | "unknown";

type Props = {
  value: StatusValue;
  onChange: (newValue: StatusValue) => void;
};

export default function StatusFilter({ value, onChange }: Props) {
  return (
    <div style={{ marginBottom: 12 }}>

      <label style={{ display: "block", marginBottom: 6 }}>
        Filtrar por estado:
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value as StatusValue)}
        style={{ padding: 8, width: "100%", maxWidth: 220 }}
      >
        <option value="">Todos</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>

      </select>
    </div>
  );
}