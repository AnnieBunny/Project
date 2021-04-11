
import {useState, useEffect} from 'react'
import {UserContext} from '../../Context'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Login.module.css'
import * as authService from '../../services/authService'

toast.configure()
const Login = ({history, isLoggedIn}) => {
    console.log(isLoggedIn)

    const onLoginSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);



        const {email, password} = e.target;
        authService.login(email.value, password.value)
        .then((res) => {
    
           localStorage.setItem("user", res.email);
           localStorage.setItem("token", res.token);
        //    setToken(res.token);
        //    console.log('res.token=====' + setToken(res.token));
        isLoggedIn = true;
            history.push('/my-places')
        })

    }

    const onEmailHandler = (e) => {
        let emailInput = e.target.value;
        let regex = /^\S+@\S+\.\S+$/
        if (!regex.test(emailInput)) {
         
            toast.error("Invalid email")
        }
    };

    const onPasswordHandler = (e) => {
        let passwordInput = e.target.value;
     
        if (passwordInput.length < 5) {
         
            toast.error("Too short password")
        }
    };
    

   

    return (
        <div className={styles["user-home"]}>
        <div>
        <div className={styles["authForm"]}>
            <form onSubmit= {onLoginSubmit}>
                <label htmlFor="email">Email </label>
                <br/>
                <input type="text" name="email" onBlur ={onEmailHandler}/>
                <br/>

                <label htmlFor="password">Password </label>
                <br/>
                <input type="password"
                       name="password"
                       onBlur ={onPasswordHandler}/>
                <br/>

                <input id="loginBtn" type="submit" value ="Submit"/>
               

                <ToastContainer position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover />


            </form>
        </div>
    </div>

    </div>
    )
}



export default Login;