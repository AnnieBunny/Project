import styles from './AboutUs.module.css'
import {Link} from 'react-router-dom'

const AboutUs = () => {
    return (
        <>
        <div className={styles["background-page"]}>
            <div className={styles["about-section"]}>
                <h1>TravelLover</h1>
                <p>TravelLover is website where you can make your dream travel list. :)</p>
                <p className={styles["authLinks"]}>Let's get started: <Link to="/login">login</Link> / <Link to="/register">Register</Link> </p>
                
            </div>

            <div className={styles["column"]}>
                <div className={styles["card"]}>
                    <img src="/images/bora-bora.jpg" alt="bora-bora" width="300" height="200"/>
                    <div className={styles["container"]}>
                        <h2 id={styles["town-info"]}>Bora Bora</h2>
                        <p id={styles["town-info"]}>Volcanic tropical island in French Polynesia.</p>
                    </div>
                </div>
            </div>

            <div className={styles["column"]}>
                <div className={styles["card"]}>
                    <img src="/images/paris.jpg" alt="paris" width="300" height="200"/>
                    <div className={styles["container"]}>
                        <h2 id={styles["town-info"]}>Paris</h2>
                        <p id={styles["town-info"]}>Paris is the most romantic place in Europe.</p>
                    </div>
                </div>
            </div>

            <div className={styles["column"]}>
                <div className={styles["card"]}>
                    <img src="/images/dubai.jpg" alt="dubai" width="300" height="200"/>
                    <div className={styles["container"]}>
                        <h2 id={styles["town-info"]}>Dubai</h2>
                        <p id={styles["town-info"]}>Dubai is the most populous city in the UAE.</p>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}

export default AboutUs;