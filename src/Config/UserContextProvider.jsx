/* eslint-disable react/prop-types */
import { useState } from 'react';
import Token from './Token'

const UserContextProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    localStorage.setItem('user', user)
    return (
        <>
            <Token.Provider value={{ user, setUser }}>
                {children}

            </Token.Provider>
        </>
    )
}

export default UserContextProvider