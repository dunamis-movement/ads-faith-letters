import styles from './LetterListSkeleton.module.css';

export function LetterListSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSkeleton}></div>
      <div className={styles.letterGrid}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.senderInfo}>
                <div className={styles.senderNameSkeleton}></div>
                <div className={styles.dateSkeleton}></div>
              </div>
            </div>
            
            <div className={styles.content}>
              <div className={styles.contentLine}></div>
              <div className={styles.contentLine}></div>
              <div className={styles.contentLine} style={{ width: '75%' }}></div>
            </div>
            
            <div className={styles.verseSection}>
              <div className={styles.verseLine}></div>
              <div className={styles.verseLine} style={{ width: '60%' }}></div>
              <div className={styles.verseReference}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}