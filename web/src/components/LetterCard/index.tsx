import { memo } from "react";
import type { Letter } from '../../types';
import styles from './LetterCard.module.css';

interface LetterCardProps {
  letter: Letter;
}

// Função para formatar a data
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

function LetterCardBase({ letter }: LetterCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.senderInfo}>
          <h3 className={styles.senderName}>De: {letter.senderName}</h3>
          <span className={styles.date}>{formatDate(letter.date)}</span>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.letterContent}>{letter.content}</p>
      </div>

      {letter.verse && (
        <div className={styles.verseSection}>
          <blockquote className={styles.verseText}>
            "{letter.verse.text}"
          </blockquote>
          <cite className={styles.verseReference}>{letter.verse.reference}</cite>
        </div>
      )}
    </div>
  );
}

export const LetterCard = memo(LetterCardBase);