import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth, registerEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) {
      return alert("please enter name");
    }
    registerEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [navigate, loading, user]);

  return (
    <Wrapper>
      <Content>
        <h2>Register</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={register}>Register</button>
        <button className="socialBtn" onClick={signInWithGoogle}>
          Login with Google
        </button>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #dcdcdc;
  padding: 30px;
  border-radius: 20px;

  input {
    padding: 12px;
    font-size: 16px;
    margin-bottom: 10px;
    border-radius: 20px;
    border: 1px solid #01010160;
    width: 250px;
  }

  button {
    padding: 12px;
    font-size: 16px;
    margin-bottom: 10px;
    border: none;
    color: white;
    background-color: black;
    border-radius: 20px;
    cursor: pointer;
  }

  .socialBtn {
    background-color: #4285f4 !important;
  }
`;
export default Signup;
