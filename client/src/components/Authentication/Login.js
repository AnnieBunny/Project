

import styles from './Login.module.css'
const Login = () => {

    return (
        <div className={styles["user-home"]}>
        <div>
        <div className={styles["authForm"]}>
            <form  method="POST">
                <label htmlFor="username">Username </label>
                <br/>
                <input type="text" name="username"/>
                <br/>

                <label htmlFor="password">Password </label>
                <br/>
                <input type="password"
                       name="password"/>
                <br/>

                <input id="loginBtn" type="submit"/>
                <p className="error-notification"></p>

            </form>
        </div>
    </div>

    </div>
    )
}



export default Login;