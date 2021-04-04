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


};

export const login = (email, password)=> {

    let loginUser = {
        email,
        password,
      
    };

   return fetch(`${url}/auth/login`, {
        method: "POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(loginUser)
    })

};

export const logout = () => {
    return fetch(`${url}/auth/logout`, {
        method: "GET",
        headers:{ "Content-Type":"application/json"},
    })
}

