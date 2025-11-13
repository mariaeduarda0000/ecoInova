import styles from "../styles/section.module.css";

export default function Valores() {
  const valores = [
    { icon: "🌱", nome: "Sustentabilidade", desc: "Projetos que respeitam o meio ambiente e reduzem emissões." },
    { icon: "💡", nome: "Inovação", desc: "Soluções tecnológicas e modelos de financiamento criativos." },
    { icon: "🤝", nome: "Transparência", desc: "Comunicação clara, orçamentos honestos e suporte contínuo." },
    { icon: "💰", nome: "Custo-benefício", desc: "Melhor retorno para seu investimento em energia limpa." },
  ];

  return (
    <section id="valores" className={styles.section}>
      <h2 className={styles.title}>Nossos Valores</h2>
      <div className={styles.valuesGrid}>
        {valores.map((v) => (
          <div key={v.nome} className={styles.valueCard} tabIndex={0}>
            <div className={styles.valueIcon} aria-hidden>{v.icon}</div>
            <h4>{v.nome}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
