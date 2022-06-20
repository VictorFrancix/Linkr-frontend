import React,  { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [ edit, setEdit ] = useState(-1);

    return (
        <AuthContext.Provider value={{
            edit, setEdit, 
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}