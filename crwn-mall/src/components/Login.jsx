import React from "react";
import styled from "styled-components";
// Components
import InputForm from "./FormInput";
import CustomButton from "./CustomButton";
import { signInWithGoogle, loginWithEmailAndPassword } from "../firebase";
// Firebase

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await loginWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>I already have an account!</Title>
        <SubTitle>Sign in with your email and password</SubTitle>

        <form onSubmit={this.handleSubmit}>
          <InputForm
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <InputForm
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <Buttons>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </CustomButton>
          </Buttons>
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 28px;
  margin: 10px 0px;
`;

const SubTitle = styled.span`
  font-size: 18px;
  margin: 10px 0px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Login;
