import styled from "styled-components";

export const DropdownMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.greyLightSecondary};
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  top: 16.25%;
  transform: translateX(-45%);
  transition: height 0.5s ease;
  width: 30rem;
`;

export const DropdownItem = styled.a`
  cursor: pointer;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;

  transition: all 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyLightPrimary};
  }

  .icon-button {
    width: 2rem;
    height: 2rem;
    margin-right: 1.35rem;
  }

  .icon-right {
    padding: 0.5rem;
    margin-left: auto;
  }
`;
