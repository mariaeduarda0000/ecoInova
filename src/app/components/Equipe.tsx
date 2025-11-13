import styles from "../styles/section.module.css";

export default function Equipe() {
  const equipe = [
    { nome: "Millie Brown", cargo: "CEO & Fundadora", img: "/equipe1.jpeg" },
    { nome: "Carlos Lima", cargo: "CTO", img: "/equipe2.jpg" },
    { nome: "Mariana Torres", cargo: "COO", img: "/equipe3.jpg" },
  ];

  return (
    <section id="equipe" className={styles.section}>
      <h2 className={styles.title}>Nossa Equipe</h2>
      <div className={styles.equipeGrid}>
        {equipe.map((m) => (
          <div key={m.nome} className={styles.equipeCard}>
            <img src={m.img} alt={m.nome} className={styles.equipeFoto} />
            <div className={styles.equipeNome}>{m.nome}</div>
            <div className={styles.equipeCargo}>{m.cargo}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
