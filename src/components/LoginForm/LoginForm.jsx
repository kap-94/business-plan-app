import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";

import { setErrorAction, removeErrorAction } from "../../redux/ui/uiActions";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../redux/auth/authActions";

import { useForm } from "../../hooks/useForm";

import CustomButton from "../CustomButton/CustomButton";

import * as S from "../GeneralStyledComponents/AuthForm.styles.js";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setErrorAction("Email is not valid"));
      return false;
    }

    // if (
    //   !validator.isStrongPassword(password, { minLenght: 5, minNumbers: 1 })
    // ) {
    //   dispatch(setErrorAction("Password is not valid"));
    //   return false;
    // }

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <S.AuthForm
      onSubmit={handleLogin}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <S.AuthFormTitle>Login</S.AuthFormTitle>

      <label htmlFor="auth__email">Email</label>
      <S.FormInputGroup mb="1rem">
        <S.FormInput
          value={email}
          onChange={handleInputChange}
          id="auth__email"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <i className="far fa-envelope"></i>
      </S.FormInputGroup>

      <label htmlFor="auth__password">Password</label>
      <S.FormInputGroup mb="2rem">
        <S.FormInput
          value={password}
          onChange={handleInputChange}
          id="auth__password"
          type="text"
          placeholder="Password"
          name="password"
          autoComplete="off"
        />
        <i className="far fa-user"></i>
      </S.FormInputGroup>

      <CustomButton type="submit" disabled={loading} w="100%" mb="1.5rem">
        Sign in
      </CustomButton>

      <CustomButton
        type="button"
        w="100%"
        mb="2rem"
        onClick={handleGoogleLogin}
        isGoogleSignIn
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google button"
        />
        <p>Sign in with Google</p>
      </CustomButton>

      <S.AuthFormLink>
        <Link to="/auth/signup">Create new account</Link>
      </S.AuthFormLink>
    </S.AuthForm>
  );
};

export default LoginForm;
