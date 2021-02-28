import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/RodrigoRVSN.png" alt="Foto de Rodrigo Victor RVSN" />
            <div>
                <strong>Rodrigo Victor</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Nível {level}
                </p>
            </div>
        </div>
    );
}