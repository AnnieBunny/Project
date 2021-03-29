
import styles from './Registration.module.css'
import * as authService from '../../services/authService'


const Registration = ({history}) => {

    const onRegistrationSubmit = (e) => {
        e.preventDefault();

        const {email, password, repeatPassword} = e.target;
        authService.register(email.value, password.value, repeatPassword.value)
        .then(() => {
            history.push('/login');
        })
        

        

    }

    return (
        <div className={styles["user-home"]}>
        <div>
            <div className={styles["authForm"]}>

                <form onSubmit={onRegistrationSubmit} >
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="text" name="email"/>
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