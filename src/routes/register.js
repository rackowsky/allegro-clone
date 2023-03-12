import React, { useState, useEffect } from "react";
import styled from "styled-components";

import logoImg from "../images/logo.png";
import LoginForm from "../components/loginForm";

const RegisterWrapper = styled.div`
  position: relative;
`;
const CircleDecorationLeft = styled.div`
  position: absolute;
  width: 268px;
  height: 268px;
  left: -96px;
  top: 610px;
  border-radius: 100%;
  background: #a772ff;
  opacity: 0.75;
  filter: blur(12.5px);
  animation-name: floatingLeft;
  animation-duration: 7s;
  animation-iteration-count: infinite;

  @keyframes floatingLeft {
    0% {
      left: -96px;
      top: 610px;
      scale: 1;
    }
    50% {
      left: -120px;
      top: 590px;
      scale: 1.1;
    }
    100% {
      left: -96px;
      top: 610px;
      scale: 1;
    }
  }
`;
const CircleDecorationMiddle = styled.div`
  position: absolute;
  width: 275px;
  height: 275px;
  left: 60px;
  top: 647px;
  border-radius: 100%;
  background: #9b4dff;
  opacity: 0.75;
  filter: blur(25px);
  animation-name: floatingMiddle;
  animation-duration: 8s;
  animation-iteration-count: infinite;

  @keyframes floatingMiddle {
    0% {
      left: 60px;
      top: 647px;
      scale: 1;
    }
    50% {
      left: 45px;
      top: 627px;
      scale: 1.12;
    }
    100% {
      left: 60px;
      top: 647px;
      scale: 1;
    }
  }
`;
const CircleDecorationRight = styled.div`
  position: absolute;
  width: 549px;
  height: 549px;
  left: 166px;
  top: 566px;
  border-radius: 100%;
  background: #ca96ff;
  opacity: 0.75;
  filter: blur(25px);
  animation-name: floatingRight;
  animation-duration: 10s;
  animation-iteration-count: infinite;

  @keyframes floatingRight {
    0% {
      left: 166px;
      top: 566px;
      scale: 1;
    }
    50% {
      left: 136px;
      top: 546px;
      scale: 1.1;
    }
    100% {
      left: 166px;
      top: 566px;
      scale: 1;
    }
  }
`;
const Loader = styled.div`
  background-image: url(${logoImg});
  height: 225px;
  width: 95px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: 999;
  animation-name: loadingAnim;
  transition: ease-in-out 0.2s;
  animation-duration: 1.5s;
  transform: translateY(10px);
  opacity: 1;

  @keyframes loadingAnim {
    0% {
      opacity: 0;
      scale: 0;
      height: 852px;
    }
    25% {
      opacity: 1;
      scale: 1;
      height: 852px;
    }
    75% {
      opacity: 1;
      scale: 1;
      transform: translateY(0);
      height: 852px;
    }
    100% {
      transform: translateY(10px);
      opacity: 1;
      height: 225px;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Register = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBodyLoaded, setIsBodyLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsBodyLoaded(true);
    }, 2480);
  }, []);

  return (
    <LoginWrapper>
      <Wrapper>
        <Loader />
        <LoginForm isLoginPage={true} />
      </Wrapper>
      <CircleDecorationLeft />
      <CircleDecorationMiddle />
      <CircleDecorationRight />
    </LoginWrapper>
  );
};

export default Register;
