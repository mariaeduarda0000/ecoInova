export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #d1fae5, #6ee7b7)",
        padding: "14px 22px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 120,
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{
          display: "inline-grid",
          placeItems: "center",
          width: 44, height: 44,
          background: "white",
          borderRadius: 10,
          boxShadow: "0 6px 14px rgba(0,0,0,0.06)",
          fontSize: 22
        }}>🌿</span>
        <div style={{ fontWeight: 700, fontSize: 18, color: "#0d7d4a" }}>EcoInova</div>
      </div>

      <nav>
        <ul style={{ display: "flex", gap: 20, listStyle: "none", alignItems: "center", margin: 0 }}>
          <li><a href="#manifesto">Propósito</a></li>
          <li><a href="#historia">História</a></li>
          <li><a href="#valores">Valores</a></li>
          <li><a href="#equipe">Equipe</a></li>
        </ul>
      </nav>
    </header>
  );
}