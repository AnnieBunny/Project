
import {useState, useEffect} from 'react'
import {UserContext} from '../../Context'

import styles from './Login.module.css'
import * as authService from '../../services/authService'


const Login = ({history}) => {
    

    const onLoginSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);

        const {email, password} = e.target;
        authService.login(email.value, password.value)
        .then(() => {
            history.push('/')
        })
    }

    

   

    return (
        <div className={styles["user-home"]}>
        <div>
        <div className={styles["authForm"]}>
            <form onSubmit= {onLoginSubmit}>
                <label htmlFor="email">Email </label>
                <br/>
                <input type="text" name="email"/>
                <br/>

                <label htmlFor="password">Password </label>
                <br/>
                <input type="password"
                       name="password"/>
                <br/>

                <input id="loginBtn" type="submit" value ="Submit"/>
                <p className="error-notification"></p>

            </form>
        </div>
    </div>

    </div>
    )
}



export default Login;