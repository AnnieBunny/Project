import React, { useContext, useState } from 'react';
const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
    let initialValue = null;
    const [userData, setUserData] = useState(initialValue)
    
  


    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}