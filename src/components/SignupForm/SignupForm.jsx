import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import { removeErrorAction, setErrorAction } from "../../redux/ui/uiActions";
import { startSignupEmailPasswordName } from "../../redux/auth/authActions";

import { useForm } from "../../hooks/useForm";

import CustomButton from "../CustomButton/CustomButton";

import * as S from "../GeneralStyledComponents/AuthForm.styles";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const user = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, handleInputChange] = useForm(user);
  const { name, email, password, confirmPassword } = formValues;

  const handleSignup = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startSignupEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorAction("This field canot be empty"));
      return false;
    }

    if (!validator.isEmail(email)) {
      dispatch(setErrorAction("Email is not valid"));
      return false;
    }

    if (password !== confirmPassword || password.length < 5) {
      dispatch(
        setErrorAction("Passwords must match and be larger that 5 characters")
      );
      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <S.AuthForm
      className=" animate__animated animate__fadeIn animate__faster"
      onSubmit={handleSignup}
    >
      <S.AuthFormTitle>Signup</S.AuthFormTitle>

      {msgError && <S.AuthFormErrMessage>{msgError}</S.AuthFormErrMessage>}

      <label htmlFor="auth__name">Name</label>
      <S.FormInputGroup mb="1rem">
        <S.FormInput
          onChange={handleInputChange}
          value={name}
          id="auth__name"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <i className="far fa-user"></i>
      </S.FormInputGroup>

      <label htmlFor="auth__email">Email</label>
      <S.FormInputGroup mb="1rem">
        <S.FormInput
          onChange={handleInputChange}
          value={email}
          id="auth__email"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <i className="far fa-envelope"></i>
      </S.FormInputGroup>

      <label htmlFor="auth__password">Password</label>
      <S.FormInputGroup mb="1rem">
        <S.FormInput
          onChange={handleInputChange}
          value={password}
          id="auth__password"
          type="password"
          placeholder="Password"
          name="password"
        />
        <i className="far fa-square"></i>
      </S.FormInputGroup>

      <label htmlFor="auth__confirm-password">Confirm Password</label>
      <S.FormInputGroup mb="2rem">
        <S.FormInput
          onChange={handleInputChange}
          value={confirmPassword}
          id="auth__confirm-password"
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
        />
        <i className="far fa-square"></i>
      </S.FormInputGroup>
      <CustomButton type="submit" w="100%" mb="2rem">
        Sign in
      </CustomButton>
      <S.AuthFormLink>
        <Link to="/auth/login">Are you already registered?</Link>
      </S.AuthFormLink>
    </S.AuthForm>
  );
};

export default SignupForm;
