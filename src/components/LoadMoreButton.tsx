type Props = {
  onClick: () => void;
  disabled: boolean;
  loadingMore: boolean;
  hasMore: boolean;
};

export default function LoadMoreButton({ onClick, disabled, loadingMore, hasMore }: Props) {
  if (!hasMore) return <p>No hay más personajes para cargar.</p>;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{ padding: "10px 14px", borderRadius: 10, cursor: "pointer", marginTop: 12 }}
    >
      {loadingMore ? "Cargando..." : "Cargar más"}
    </button>
  );
}