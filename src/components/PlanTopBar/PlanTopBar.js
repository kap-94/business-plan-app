import React from "react";

import NavBar from "../NavBar/NavBar";
import NavItem from "../NavItem/NavItem";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

import * as S from "./PlanTopBar.styles";

const PlanTopBar = () => {
  return (
    <S.PlanTopBar>
      <NavBar>
        <NavItem icon="...">
          <DropdownMenu />
        </NavItem>
      </NavBar>
    </S.PlanTopBar>
  );
};

export default PlanTopBar;
