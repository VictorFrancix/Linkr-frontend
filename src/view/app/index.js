import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// eslint-disable-next-line

import GlobalStyle from "./../../assets/globalStyles/globalStyles.js";
import UserContext from "../../assets/contexts/userContext.js";
import { SignUp } from "./../signup/index.js";
import { Login } from "./../login/index.js";


export default function App() {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState({});

    return (
        <UserContext.Provider value={{
            loading,
            setLoading,
            token,
            setToken}}
            >
            <BrowserRouter>
                <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
    
}