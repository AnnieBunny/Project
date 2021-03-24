import styles from './HomeUser.module.css'


const HomeUser = () => {

    return(
        <div className={styles["user-home"]}>
        <div className={styles["column"]}>
        <div className={styles["card"]}>
            <img src="/images/bora-bora.jpg" alt="bora-bora" width="300" height="200"/>
            <div className={styles["container"]}>
                <h2 id={styles["town-info"]}>Bora Bora</h2>
                <p id={styles["town-info"]}>Volcanic tropical island in French Polynesia.</p>
            </div>
        </div>
    </div>
    </div>

    )

}

export default HomeUser;