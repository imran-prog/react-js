import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// Firebase
import { auth, signInWithGoogle, loginWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // Return a loading Screen
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  return (
    <Wrapper>
      <Content>
        <h2>Login</h2>
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
        <button onClick={() => loginWithEmailAndPassword(email, password)}>
          Login
        </button>
        <button className="socialBtn" onClick={() => signInWithGoogle()}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Reset Password</Link>
        </div>
        <div>
          don't have an account?{" "}
          <span onClick={props.toggleSignup}>SignUp</span> now
        </div>
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

  div {
    margin-top: 7px;

    a {
      color: red;
    }

    span {
      color: red;
      cursor: pointer;
    }
  }
`;

export default Login;
