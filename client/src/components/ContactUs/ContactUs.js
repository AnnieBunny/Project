
import styles from './ContactUs.module.css'

const ContactUs = () => {

    return (
        <div className={styles["background-page"]}>

        <div className={styles["container"]}>
                <div className={styles["row"]}>
                    <div className={styles["column"]}>
                        <div className={["information-container"]}>
                            <p id = {styles["information-gmail"]}>Gmail: <i>travelLover@mail.com</i></p>
                            <p id = {styles["information-instagram"]}>Instagram: <i>TravelLover</i></p>
                            <p id = {styles["information-facebook"]}>Facebook: <i>TravelLover</i></p>
                        </div>

                    </div>
                    <div className={styles["column-left"]}>
                    <p id = {styles["information"]}>We are waiting for you!</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ContactUs;