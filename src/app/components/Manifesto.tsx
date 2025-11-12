import styles from "../styles/Section.module.css";

export default function Manifesto() {
  return (
    <section id="manifesto" className={styles.section}>
      <h2 className={styles.title}>Nosso Propósito</h2>

      <div className={styles.cardContainer}>
        <article className={styles.card} tabIndex={0} aria-labelledby="missao-title">
          <h3 id="missao-title">🌞 Missão</h3>
          <p>
            Tornar a energia solar acessível e sustentável para todos os brasileiros,
            reduzindo custos e preservando o meio ambiente.
          </p>
        </article>

        <article className={styles.card} tabIndex={0} aria-labelledby="visao-title">
          <h3 id="visao-title">🚀 Visão</h3>
          <p>
            Ser referência nacional em soluções solares residenciais até 2030,
            inspirando comunidades e transformando hábitos de consumo.
          </p>
        </article>
      </div>
    </section>
  );
}
