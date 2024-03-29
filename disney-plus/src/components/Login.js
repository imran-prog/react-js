import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Wrapper>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="CTA Logo one" />
          <SignUp>GET ALL THERE</SignUp>
          <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="CTA Logo two" />
        </CTA>
        <BgImage />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  z-index: -1;
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
  }
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  width: 100%;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;
