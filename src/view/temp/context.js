import React,  { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const url = ' https://linkr-project17.herokuapp.com'
    const [ edit, setEdit ] = useState(-1);
    const [ openComment, setOpenComment ] = useState('')
    const [route, setRoute] = useState('/post')
    const [reload, setReload] = useState(false);
    const [page, setPage] = useState(0);
    const [postsLinks, setPostLinks] = useState([{posts: [], infos:[]}]);

    return (
        <AuthContext.Provider value={{
            url, edit, setEdit, 
            openComment, setOpenComment,
            route, setRoute,
            reload, setReload,
            page, setPage,
            postsLinks, setPostLinks
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}