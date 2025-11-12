import styles from "../styles/Section.module.css";

export default function Historia() {
  return (
    <section id="historia" className={styles.section}>
      <h2 className={styles.title}>Nossa História</h2>

      <div className={styles.storyCard}>
        <p>
          A EcoInova nasceu em <strong>2022</strong> com o sonho de democratizar o acesso à energia limpa no Brasil.
          Iniciamos como uma pequena equipe de engenheiros e idealistas determinados a reduzir barreiras econômicas
          para a adoção de energia solar.
        </p>
        <p>
          Hoje, trabalhamos com famílias e pequenos empreendedores oferecendo projetos conscientes, duráveis e com
          excelente custo-benefício — sempre guiados pela responsabilidade ambiental e transparência.
        </p>
      </div>
    </section>
  );
}
