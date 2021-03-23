import styles from './AboutUs.module.css'
import {Link} from 'react-router-dom'

const AboutUs = () => {
    return (
        <>
            <div className={styles["about-section"]}>
                <h1>TravelLover</h1>
                <p>TravelLover is website where you can find top destintions.</p>
                <p className={styles["authLinks"]}>For more destintions: <Link to="/login">login</Link> / <Link to="/register">Register</Link> </p>
                
            </div>

            <div className={styles["column"]}>
                <div className={styles["card"]}>
                    <img src="/images/bora-bora.jpg" alt="bora-bora" width="300" height="200"/>
                    <div className={styles["container"]}>
                        <h2>Bora Bora</h2>
                        <p>Volcanic tropical island in French Polynesia.</p>
                    </div>
                </div>
            </div>

            <div className={styles["column"]}>
                <div className={styles["card"]}>
                    <img src="/images/paris.jpg" alt="paris" width="300" height="200"/>
                    <div className={styles["container"]}>
                        <h2>Paris</h2>
                        <p>Paris is the most romantic place in Europe.</p>
                    </div>
                </div>
            </div>

            <div className={styles["column"]}>
                <div className={styles["card"]}>
                    <img src="/images/dubai.jpg" alt="dubai" width="300" height="200"/>
                    <div className={styles["container"]}>
                        <h2>Dubai</h2>
                        <p>Dubai is the most populous city in the UAE.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;