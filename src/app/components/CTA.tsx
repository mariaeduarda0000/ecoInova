import styles from "../styles/Section.module.css";

export default function CTA() {
  return (
    <section className={styles.ctaWrap}>
      <div className="center">
        <div className={styles.ctaTitle}>Transforme sua energia hoje</div>
        <div className={styles.ctaText}>
          Faça um orçamento rápido e sem compromisso — descubra quanto você pode economizar
          instalando energia solar com a EcoInova.
        </div>
        <a
          className={styles.ctaButton}
          href="mailto:contato@ecoinova.com.br?subject=Orçamento%20de%20Energia%20Solar"
        >
          Quero um Orçamento
        </a>
      </div>
    </section>
  );
}
