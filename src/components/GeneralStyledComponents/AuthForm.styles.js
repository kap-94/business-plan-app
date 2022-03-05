import styled from "styled-components";

export const AuthForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  border-radius: 2.5rem;
  padding: 5rem 3rem;
  width: 35rem;
  position: relative;
  z-index: 10;

  & label {
    font-size: 1.3rem;
    color: #555;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: -2.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 0 0 2.5rem 2.5rem;
    height: 2.5rem;
    width: 83%;
  }
`;

export const AuthFormTitle = styled.h3`
  font-size: 2.58rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;

  ::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 1.5rem;
    height: 10rem;
    width: 10rem;
    opacity: 0.95;
    position: absolute;
    top: -7rem;
    right: -4rem;
  }

  /* ::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    height: 4rem;
    width: 4rem;
    position: absolute;
    top: -6rem;
    right: -3rem;
  } */
`;

export const FormInputGroup = styled.div`
  border-radius: 0.8rem;
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-left: ${(props) => props.ml};
  position: relative;

  & i {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.8rem;
    opacity: 0.6;
    position: absolute;
    right: 1.5rem;
    top: 1.3rem;
  }
`;

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.8rem 0.8rem 0 0;
  height: 4.5rem;
  padding: 1.5rem 1rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const AuthFormLink = styled.div`
  text-align: center;
`;

export const AuthFormErrMessage = styled.div`
  background-color: orange;
  border-radius: 1rem;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 1rem 2rem;
`;
