
import styles from './Registration.module.css'


const Registration = () => {

    return (
        <div className={styles["user-home"]}>
        <div>
            <div className={styles["authForm"]}>

                <form >
                    <label htmlFor="username">Username </label>
                    <br/>
                    <input type="text" name="username"/>
                    <br/>

                    <label htmlFor="password">Password </label>
                    <br/>
                    <input  type="password"
                           name="password"/>
                    <br/>

                    <label htmlFor="repeatPassword">Repeat password </label>
                    <br/>
                    <input  type="password"
                           name="repeatPassword"/>

                    <input id="registerBtn" type="submit"/>
                    <p className="error-notification"></p>

                </form>
            </div>
        </div>
        </div>
    )
}

export default Registration;