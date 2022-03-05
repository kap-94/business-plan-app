import React, { useState } from "react";

import * as S from "./NavItem.styles";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <S.NavItem>
      <S.NavLink onClick={() => setOpen(!open)}>{props.icon}</S.NavLink>

      {open && props.children}
    </S.NavItem>
  );
};

export default NavItem;
