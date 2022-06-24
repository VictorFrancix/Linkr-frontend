import React,  { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const url = 'http://localhost:4000'
    const [ edit, setEdit ] = useState(-1);
    const [ openComment, setOpenComment ] = useState('')
    const [route, setRoute] = useState('/post')
    const [reload, setReload] = useState(false);


    return (
        <AuthContext.Provider value={{
            url, edit, setEdit, 
            openComment, setOpenComment,
            route, setRoute,
            reload, setReload
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}