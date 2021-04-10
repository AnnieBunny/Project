
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const url = 'http://localhost:4000';

export const register = (email, password,repeatPassword) => {

    let registerUser = {
        email,
        password,
        repeatPassword
    };

   return fetch(`${url}/auth/register`, {
        method: "POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(registerUser)
    })
    .catch((err)=> toast.error(err))


};

export const login = (email, password)=> {

    let loginUser = {
        email,
        password
    };

   return fetch(`${url}/auth/login`, {
        method: "POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(loginUser)
    })
    .then(res => res.json())
    .catch(err => toast.error(err))

};

export const logout = () => {
    return fetch(`${url}/auth/logout`, {
        method: "GET",
        headers:{ "Content-Type":"application/json"},
    })
    .catch(err => toast.error(err))

}


export const getUser = (email, password) => {
    let user = {
        email,
        password
    };


    return fetch (`${url}/auth/getUser`, {
        method: "POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(user)
    })
            .then((res) =>{ console.log(res.json()) })
            .catch(err => toast.error(err))

};