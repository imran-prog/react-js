import React from "react";
import styled from "styled-components";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
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
        <SubTitle>sign in with your email and password</SubTitle>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <Input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <Button type="submit" value="Submit Form" />
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const Title = styled.h2``;

const SubTitle = styled.span``;

const Input = styled.input``;

const Button = styled.input``;

export default Login;
