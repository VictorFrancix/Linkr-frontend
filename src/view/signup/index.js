import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


export function SignUp() {
    const [loading, setLoading] = useState(false);
    const [registerUser, setregisterUser] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        urlpicture: ""
    });
    const navigate = useNavigate();


    function register(registerUser) {
        setLoading(true);
        if (registerUser.password !== registerUser.confirmPassword) {
            alert("Senhas diferentes!");
            setregisterUser({ ...registerUser, password: "", confirmPassword: "" });
            return;
        }

        const promise = axios.post("http://localhost:4000/signup", registerUser);
        promise.then(() => {
            alert("deu bom!");
            navigate("/");
        });
        promise.catch((err) => {
            alert('erro')
            console.log(err.response.message);
            setLoading(false)
        });
    }

    function sendUser(e) {
        e.preventDefault();
        register(registerUser);
    }

    return (
        <MainStyle>
            {loading ? <></> : 
            <>
            <h1>Linkr</h1>
            <form
                onSubmit={(e) => {
                    sendUser(e);
                }}
            >
                <input
                    type="email"
                    placeholder="Email"
                    value={registerUser.email}
                    disabled = {loading}
                    onChange={(e) =>
                        setregisterUser({ ...registerUser, email: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={registerUser.password}
                    disabled = {loading}
                    onChange={(e) =>
                        setregisterUser({ ...registerUser, password: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={registerUser.confirmPassword}
                    disabled = {loading}
                    onChange={(e) => setregisterUser({ ...registerUser, confirmPassword: e.target.value })}
                    required
                />

                <input
                    type="text"
                    placeholder="username"
                    value={registerUser.username}
                    onChange={(e) => setregisterUser({ ...registerUser, username: e.target.value })}
                    required
                />

                <input
                    type="text"
                    placeholder="url Picture"
                    value={registerUser.urlpicture}
                    onChange={(e) => setregisterUser({ ...registerUser, urlpicture: e.target.value })}
                    required
                />


                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
            </>
}
        </MainStyle>
    );
}

const MainStyle = styled.main`
display: flex;
width: 100%;
height: 100vh;
background-color:  #fa9a39;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1 {
    font-weight: bold;
    color: #ffffff;
    font-size: 32px;
    line-height: 50px;
    margin: -5px 0px 24px;
}
h2 {
    font-weight: bold;
    color: #ffffff;
    font-size: 25px;
    line-height: 50px;
    margin: -5px 0px;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
button {
    background-color: #c747fc;
    border: none;
    width: 31%;
    height: 54px;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
}
button:hover{
    cursor: pointer;
}
button:disabled{
    background-color: #a09da1;
    color: #ffffff00;
}
input{
    width: 60%;
    max-width: 470px;
    height: 58px;
    padding: 18px 15px;
    border-radius: 30px;
    border: none;
    color: #000000;
    font-size: 12 px;
    margin-bottom: 13px;
}
a {
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
}
`;
