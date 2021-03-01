import styles from '../styles/pages/Main.module.css';

export default function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.activities}>
                    <div className={styles.card}>
                        Carnê
                    </div>
                    <div className={styles.card}>
                        Listas
                    </div>
                    <div className={styles.card}>
                        Calendário
                    </div>
                </div>
            </div>
        </div>
    );
}