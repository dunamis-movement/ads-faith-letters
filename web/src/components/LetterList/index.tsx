import { useAppContext } from "../../contexts/appContext";
import { LetterCard } from "../LetterCard";
import styles from "./LetterList.module.css";

export function LetterList() {
  const { letters, missionaries, loading } = useAppContext();

  if (loading) {
    return <div className={styles.loading}> Carregando cartas...</div>;
  }

  if (letters.length === 0) {
    return (
      <div className={styles.emptyState} >
        <h3>Nenhuma Carta Ainda </h3>
        <p>
          Seja o primeiro a escrever uma carta de encorajamento para um
          missionário!
        </p>
      </div>
    );
  }

  const lettersWithMissionary = letters.map((letter) => {
    const missionary = missionaries.find((m) => m.id === letter.missionaryId);
    return { ...letter, missionary };
  });

  const sortedLetters = [...lettersWithMissionary].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className={styles.container} >
      <h2 className={styles.title}> Cartas enviadas </h2>
      < div className={styles.letterGrid} >
        {
          sortedLetters.map((letter) => (
            <LetterCard key={letter.id} letter={letter} />
          ))
        }
      </div>
    </div>
  );
}

export default LetterList;
