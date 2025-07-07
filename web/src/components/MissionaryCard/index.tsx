import { memo } from 'react';
import { useMemo } from 'react';
import type { Missionary } from '../../types';
import styles from './MissionaryCard.module.css';

interface MissionaryCardProps {
  missionary: Missionary;
}

// Função para retornar a bandeira do país
const getCountryFlag = (country: string): string => {
  const flags: Record<string, string> = {
    'Camboja': '🇰🇭',
    'Indonésia': '🇮🇩',
    'Espanha': '🇪🇸',
    'Brasil': '🇧🇷',
    'Estados Unidos': '🇺🇸',
    'França': '🇫🇷',
    'Alemanha': '🇩🇪',
    'Japão': '🇯🇵',
    'China': '🇨🇳',
    'Índia': '🇮🇳'
  };

  return flags[country] || '🌍';
};

function MissionaryCardBase({ missionary }: MissionaryCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={missionary.imageUrl}
          alt={`Foto de ${missionary.name}`}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{missionary.name}</h3>
        <p className={styles.bio}>{missionary.bio}</p>

        <div className={styles.details}>
          <div className={styles.country}>
            <span className={styles.flag}>{useMemo(() => getCountryFlag(missionary.country), [missionary.country])}</span>
            <span>{missionary.country}</span>
          </div>
          <div className={styles.field}>
            {missionary.field}
          </div>
        </div>
      </div>
    </div>
  );
}

export const MissionaryCard = memo(MissionaryCardBase);