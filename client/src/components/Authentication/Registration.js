
import styles from './Registration.module.css'
import * as authService from '../../services/authService'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
const Registration = ({history}) => {

    const onRegistrationSubmit = (e) => {
        e.preventDefault();

        const {email, password, repeatPassword} = e.target;

       
        authService.register(email.value, password.value, repeatPassword.value)
        .then(() => {
            history.push('/login');
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

                <form onSubmit={onRegistrationSubmit} >
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="text" name="email" onBlur={onEmailHandler}/>
                    <br/>

                    <label htmlFor="password">Password </label>
                    <br/>
                    <input  type="password"
                           name="password" onBlur = {onPasswordHandler}/>
                    <br/>

                    <label htmlFor="repeatPassword">Repeat password </label>
                    <br/>
                    <input  type="password"
                           name="repeatPassword" onBlur = {onPasswordHandler} />

                    <input id="registerBtn" type="submit" value ="Submit"/>
                    
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

export default Registration;