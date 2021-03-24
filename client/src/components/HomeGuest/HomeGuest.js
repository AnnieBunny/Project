import styles from './HomeGuest.module.css'
import { Link } from 'react-router-dom'


const HomeGuest = () => {

    return (
        <>
            <div>
                <div className={styles["home-page"]}>
                    <div className={styles["home-info"]} >
                        <h2 id={styles["h2-home-text"]}>For your full adventure :</h2>
                        <h4 id={styles['landing-text']}>
                            <Link to="/register">Register</Link> / <Link to="/login">Login</Link></h4>
                    </div>
                </div>

            </div>
        </>

    )

}

export default HomeGuest;