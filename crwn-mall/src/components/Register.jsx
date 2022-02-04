import React from "react";
import styled from "styled-components";
// Components
import InputForm from "./FormInput";
import CustomButton from "./CustomButton";
// Firebase
import { registerEmailAndPassword } from "../firebase";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await registerEmailAndPassword(displayName, email, password);

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Wrapper>
        <Title>I do not have an account</Title>
        <SubTitle>Sign up with your email and password</SubTitle>

        <form onSubmit={this.handleSubmit}>
          <InputForm
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
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
          <InputForm
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
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

export default Register;
