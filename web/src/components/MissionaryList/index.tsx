import { useAppContext } from "../../contexts/appContext";
import { MissionaryCard } from "../MissionaryCard";
import styles from "./MissionaryList.module.css";

export function MissionaryList() {
  const { missionaries, loading } = useAppContext();

  if (loading) {
    return <div className={styles.loading}>Carregando missionários...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quem nós apoiamos</h1>
      <div className={styles.grid}>
        {missionaries.map((missionary) => (
          <div key={missionary.id} className={styles.cardWrapper}>
            <MissionaryCard missionary={missionary} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionaryList;
