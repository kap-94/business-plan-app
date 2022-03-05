import styled from "styled-components";

export const NavItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  width: 50%;
`;

export const NavLink = styled.a`
  background-color: ${({ theme }) => theme.colors.greyLightSecondary};
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem 1.25rem;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.05);
  }
`;
