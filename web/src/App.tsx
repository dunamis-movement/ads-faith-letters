import React, { Suspense } from "react";
import { Mail, Heart } from "lucide-react";
import { MissionaryListSkeleton, LetterListSkeleton } from "./components";
import styles from "./App.module.css";

const LetterList = React.lazy(() => import('./components/LetterList'));
const MissionaryList = React.lazy(() => import('./components/MissionaryList'));

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Mail width={30} height={30} />
          <span>Faith Letters</span>
        </div>
        <button
          className={styles.sendButton}
          onClick={() => { }}
          type="button"
        >
          Enviar carta
        </button>
      </header>

      <main className={styles.main}>
        <section className={styles.missionariesSection}>
          <Suspense fallback={<MissionaryListSkeleton />}>
            <MissionaryList />
          </Suspense>
          <Suspense fallback={<LetterListSkeleton />}>
            <LetterList />
          </Suspense>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h1 className={styles.footerTitle}>
            Faith Letters - Apoiando missionários com palavras de encorajamento
          </h1>
          <p className={styles.footerDescription}>
            Feito com <Heart className={styles.heartIcon} /> para aqueles que espalham o evangelho pelo mundo
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App
