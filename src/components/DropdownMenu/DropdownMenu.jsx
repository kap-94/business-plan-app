import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  startDeletingAction,
  startSavePlanAction,
} from "../../redux/plans/plansActions";
import { startLogout } from "../../redux/auth/authActions";

import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";
import { ReactComponent as WarningIcon } from "../../icons/warning.svg";
import { ReactComponent as ResultsIcon } from "../../icons/results.svg";

import * as S from "./DropdownMenu.styles";

const DropdownMenu = () => {
  const { active } = useSelector((state) => state.plans);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(startLogout());
  const handleSave = () => dispatch(startSavePlanAction(active));
  const handleDelete = () => dispatch(startDeletingAction(active.id));

  const DropdownItem = (props) => {
    return (
      <S.DropdownItem onClick={props.onClick}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </S.DropdownItem>
    );
  };

  return (
    <S.DropdownMenu>
      <div className="menu">
        <DropdownItem leftIcon={<ResultsIcon />} onClick={handleSave}>
          Save Plan
        </DropdownItem>
        <DropdownItem leftIcon={<WarningIcon />} onClick={handleDelete}>
          Delete Plan
        </DropdownItem>
        <DropdownItem leftIcon={<LogoutIcon />} onClick={handleLogout}>
          Logout
        </DropdownItem>
      </div>
    </S.DropdownMenu>
  );
};

export default DropdownMenu;
