import Header from "./components/Header";
import Manifesto from "./components/Manifesto";
import Historia from "./components/Historia";
import Valores from "./components/Valores";
import Equipe from "./components/Equipe";
import CTA from "./components/CTA";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.pageInner}>
        <Manifesto />
        <Historia />
        <Valores />
        <Equipe />
      </div>
      <CTA />
    </main>
  );
}
