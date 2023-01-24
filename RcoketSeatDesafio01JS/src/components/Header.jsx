import styles from './Header.module.css'
import rocketlogo from '../assets/rocketlogo.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={rocketlogo}/>
                <span className={styles.to}>to</span>
                <span className={styles.do}>do</span>
        </header>
    );
}