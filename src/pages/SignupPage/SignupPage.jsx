import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";

import * as S from "../../components/GeneralStyledComponents/CenteredPage.styles";

const SignupPage = () => {
  return (
    <S.CenteredPage>
      <SignupForm />
    </S.CenteredPage>
  );
};

export default SignupPage;
