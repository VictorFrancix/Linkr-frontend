import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// eslint-disable-next-line

import GlobalStyle from "./../../assets/globalStyles/globalStyles.js";
import { SignUp } from "./../signup/index.js";
import { Login } from "./../login/index.js";
import Timeline from "./../timeline/index.js";


export default function App() {

    return (
            <BrowserRouter>
                <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/home" element={<Timeline />} />
                    </Routes>
            </BrowserRouter>
    );
    
}