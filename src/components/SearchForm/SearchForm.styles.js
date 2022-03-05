import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 500;
  margin: 3rem 0;
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1.575rem;
  margin-top: 1.5rem;
  padding: 2rem;
  width: 100%;

  transition: 0.1s all ease-in;

  &:hover {
    filter: brightness(1.3);
  }
`;
