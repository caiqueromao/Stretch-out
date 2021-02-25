import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/Components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  const { challegesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challegesCompleted}</span>
    </div>
  );
}
