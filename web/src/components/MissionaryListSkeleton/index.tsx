import styles from './MissionaryListSkeleton.module.css';

export function MissionaryListSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSkeleton}></div>
      <div className={styles.grid}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <div className={styles.imageSkeleton}></div>
              </div>
              <div className={styles.content}>
                <div className={styles.nameSkeleton}></div>
                <div className={styles.bioSkeleton}></div>
                <div className={styles.bioSkeleton} style={{ width: '80%' }}></div>
                <div className={styles.details}>
                  <div className={styles.countrySkeleton}></div>
                  <div className={styles.fieldSkeleton}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}