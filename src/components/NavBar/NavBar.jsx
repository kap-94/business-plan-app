import React from "react";

import * as S from "./NavBar.styles";

const NavBar = (props) => {
  return (
    <S.NavBar>
      <S.NavbarNav>{props.children}</S.NavbarNav>
    </S.NavBar>
  );
};

export default NavBar;
