import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  gap: 7px;
  width: 100%;
  height: 8520px;

  > h1 {
    font-style: italic;
    font-weight: 600;
    font-size: 35px;
    line-height: 41px;
    color: #ffffff;
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
  > form {
  }
  > p {
    font-style: italic;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    text-shadow: 0px 4px 100px #000000;
    margin-top: 5px;
  }
`;
const LinK = styled(Link)`
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #9867ff;
  text-shadow: 0px 4px 100px #000000;
`;
const Field = styled.div`
  position: relative;
`;
const Input = styled.input`
  position: relative;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.54);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 24px 0 12px 15px;
  margin-top: 10px;
  width: 100%;
  touch-action: manipulation;
  transform-origin: left bottom;
  font-style: italic;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #a377ff;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

  :focus {
    outline: none;
  }
  :not(:placeholder-shown) + label,
  :focus + label {
    position: absolute;
    left: 15px;
    top: 25px;
    font-size: 12px;
    pointer-events: none;
    transition: 0.2s;
    touch-action: manipulation;
    transform-origin: left bottom;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type="number"] {
    -moz-appearance: textfield;
  }
`;
const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 56%;
  transform: translateY(-50%);
  font-style: italic;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #a377ff;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  pointer-events: none;
  transition: 0.2s;
  touch-action: manipulation;
  transform-origin: left bottom;
`;
const InputButton = styled.button`
  background: #c7adff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 15px 0;
  width: 100%;
  font-style: italic;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;

  :hover {
    filter: brightness(0.95);
    scale: 1.01;
    cursor: pointer;
  }
`;

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: Yup.object({
      user: Yup.string(),
      password: Yup.string(),
    }),
    onSubmit: (values) => {
      if (props.isLoginPage === true) {
        console.log("subbmited from login page");
      } else if (props.isLoginPage === false) {
        console.log("subbmited from register page");
      }
    },
  });

  const LoginPageData = {
    header: "Logowanie",
    userLabel: "Nazwa użytkownika",
    passwordLabel: "Hasło",
    button: "Zaloguj",
    paragraph: "Nie masz jeszcze konta?",
    span: "Zarejestruj się",
    url: "/rejestracja",
  };
  const RegisterPageData = {
    header: "Rejestracja",
    userLabel: "Podaj nazwę użytkownika",
    passwordLabel: "Podaj hasło",
    button: "Zarejestruj się",
    paragraph: "Posiadasz konto?",
    span: "Zaloguj się",
    url: "/logowanie",
  };

  return (
    <LoginFormWrapper>
      <h1>
        {props.isLoginPage ? LoginPageData.header : RegisterPageData.header}
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <Field>
          <Input
            type="text"
            name="user"
            id="user"
            placeholder=" "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user}
          />
          <Label htmlFor="user">
            {props.isLoginPage
              ? LoginPageData.userLabel
              : RegisterPageData.userLabel}
          </Label>
        </Field>
        <Field>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <Label htmlFor="password">
            {props.isLoginPage
              ? LoginPageData.passwordLabel
              : RegisterPageData.passwordLabel}
          </Label>
        </Field>
        <InputButton type="submit">
          {props.isLoginPage ? LoginPageData.button : RegisterPageData.button}
        </InputButton>
      </form>
      <p>
        {props.isLoginPage
          ? LoginPageData.paragraph
          : RegisterPageData.paragraph}{" "}
        <LinK to={props.isLoginPage ? LoginPageData.url : RegisterPageData.url}>
          {props.isLoginPage ? LoginPageData.span : RegisterPageData.span}
        </LinK>
      </p>
    </LoginFormWrapper>
  );
};

export default LoginForm;
