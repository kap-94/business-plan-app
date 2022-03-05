import React from "react";

import LoginForm from "../../components/LoginForm/LoginForm";

import * as S from "../../components/GeneralStyledComponents/CenteredPage.styles";

const LoginPage = () => {
  return (
    <S.CenteredPage>
      <LoginForm />
    </S.CenteredPage>
  );
};

export default LoginPage;
