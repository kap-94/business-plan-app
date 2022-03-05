import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.white}
  z-index: 1;
  border-radius: ${({ theme }) => theme.shape.borderRadiusPrimary};
  display: flex;
  flex-direction: column;
  flex: 0 0 5%;
  font-weight: 600;
  padding-top: 3vw;
  padding-bottom: 3vw;
  transition: all 0.5s ease;
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  height: 100%;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: unset;
    align-items: center;
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 32.5%;
  height: 5.35rem;
  width: 5.35rem;
  padding: 0.5rem;
  position: relative;
  text-decoration: none;
  transition: all 0.5s;

  &:not(:last-child) {
    margin-bottom: 1rem;

    @media only screen and (max-width: 600px) {
      margin-bottom: unset;
    }
  }

  &:last-child {
    margin-top: auto;
  }

  &:hover {
    .tooltip {
      visibility: unset;
      opacity: 0.97;
    }
  }

  .tab-icon {
    fill: ${({ theme }) => theme.colors.white};
    height: 2.5rem;
    width: 2.5rem;

    rect {
      fill: inherit;
    }
  }

  &.active {
    background-color: #482ce8;
    transition: all 0.2s ease-in;
  }

  @media only screen and (max-width: 600px) {
    &.active {
      border-left: unset;
    }
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  left: 115%;
  background-color: ${({ theme }) => theme.colors.greyLightSecondary};
  background-color: #211469;
  border-radius: 5px;
  color: white;
  opacity: 0;
  padding: 1rem;
  visibility: hidden;
  width: 10rem;
  z-index: 10;

  transition: all 0.2s ease-in;
`;
