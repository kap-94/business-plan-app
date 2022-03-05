import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const invertedButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const dangerButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.danger};
  border: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};

  transition: all 0.15s ease-in;

  &:hover {
    transform: scale(1.03);
  }
`;

const googleSignInStyles = css`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadowLight};
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 15%;

  &:hover {
    /* background-color: #357ae8; */
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if (props.inverted) {
    return invertedButtonStyles;
  } else if (props.danger) {
    return dangerButtonStyles;
  } else {
    return buttonStyles;
  }

  // return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  height: 4.5rem;
  height: ${(props) => props.h};
  letter-spacing: 0.5px;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  min-width: 10rem;
  width: ${(props) => props.w};

  transition: 0.2s ease-in all;

  :focus {
    outline: none;
  }

  ${getButtonStyles}
`;
