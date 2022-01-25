import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Firebase
import { auth, sendPasswordReset } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [loading, navigate, user]);

  return (
    <Wrapper>
      <Content>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button onClick={(e) => sendPasswordReset(email)}>
          Send Reset Email
        </button>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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

  input {
    padding: 12px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  button {
    padding: 12px;
    font-size: 16px;
    margin-bottom: 10px;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

export default Reset;
