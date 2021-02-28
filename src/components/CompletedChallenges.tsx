import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
  return(
    <div className={ styles.compleatedChallengesContainer }>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  );  
}