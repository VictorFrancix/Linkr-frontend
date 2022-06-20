import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./../../assets/css/fonts.css";
import UserContext from "./../../assets/contexts/userContext.js";

export function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { loading, setLoading, setToken } = useContext(UserContext);

  let tokenObject = localStorage.getItem("tokenUser");

  const navigate = useNavigate();

  const URL = "https://linkr-projeto17.herokuapp.com/";

  useEffect(() => {
    if (tokenObject) {
      setToken({ ...JSON.parse(tokenObject) });
      navigate("/timeline");
    }
  }, [setToken, navigate, tokenObject]);

  function updateUser(event) {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

  function signInUser(event) {
    event.preventDefault();
    setLoading(true);
    const promise = axios.post(`${URL}sign-in`, user);
    promise.then(({ data }) => {
      const newToken = data.token;
      tokenObject = JSON.stringify(data);
      localStorage.setItem("tokenUser", tokenObject);
      setToken({ token: newToken });
      setLoading(false);
      navigate("/timeline");
    });
    promise.catch((error) => {
      alert(error.response.data);
      setLoading(false);
    });
  }

  return (
    <SignInScreenContainer>
      <header>
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </header>
      <StyledForm onSubmit={signInUser}>
        <input
          name="email"
          type="email"
          disabled={loading}
          placeholder="e-mail"
          value={user.email}
          onChange={updateUser}
          required
        />
        <input
          name="password"
          type="password"
          disabled={loading}
          placeholder="password"
          value={user.password}
          onChange={updateUser}
          required
        />
        <button type="submit">Log In</button>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </StyledForm>
    </SignInScreenContainer>
  );
}

const SignInScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333;
  ::placeholder {
    color: #fff;
  }
  header {
    width: 100%;
    height: 175px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #151515;
    margin-bottom: 40px;
    h1 {
      color: #fff;
      font-family: "Passion one", cursive;
      font-weight: bold;
      font-size: 76px;
      line-height: 84px;
      letter-spacing: 0.05em;
    }
    h2 {
      color: #fff;
      font-family: "Oswald", sans-serif;
      font-weight: 700;
      font-size: 23px;
      line-height: 34px;
      text-align: center;
      margin: 0 16%;
    }
  }
  @media (min-width: 600px) {
    display: flex;
    height: 100vh;
    header {
      width: 70%;
      height: 100vh;
      display: block;
      padding: 300px 10%;
      h1 {
        font-size: 106px;
        line-height: 117px;
      }
      h2 {
        font-size: 43px;
        line-height: 64px;
        text-align: left;
        width: 448px;
        margin: 0;
      }
    }
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  input {
    font-family: "Oswald", sans-serif;
    width: 100%;
    font-size: 22px;
    line-height: 33px;
    font-weight: 700;
    padding-left: 17px;
    height: 55px;
    border-radius: 6px;
    border: none;
    margin-bottom: 12px;
    letter-spacing: 0.03em;
  }
  button {
    font-family: "Oswald", sans-serif;
    width: 100%;
    height: 55px;
    color: #fff;
    background-color: #1877f2;
    border: none;
    border-radius: 6px;
    font-size: 22px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0.03em;
    margin-bottom: 18px;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
  }
  @media (min-width: 600px) {
    width: 40%;
    justify-content: center;
    input,
    button {
      height: 65px;
      font-size: 27px;
      line-height: 40px;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 17px;
  line-height: 20px;
  @media (min-width: 600px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
