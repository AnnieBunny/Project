import React, { useState, useEffect, createContext, useMemo } from 'react';
import { getUser } from '../services/authService';
export const Context = React.createContext();

export const ContextStore = ({ children }) => {
    let initialValue = null;
    const [userData, setUserData] = useState(initialValue)
    
    useEffect(() => {
        
        fetch(`/auth/getUser`).then(res => res.json())
        .then(res => {
            return setUserData(res.user)
        })

    }, [])

    console.log(userData)
    const providerValue = useMemo(() => ({ userData, setUserData }), [userData, setUserData])

    return (
        <Context.Provider value={providerValue}>
            {children}
        </Context.Provider>
    )
}