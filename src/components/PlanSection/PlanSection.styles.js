import styled from "styled-components";

export const PlanSection = styled.div`
  font-size: 1.65rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5rem;

  label {
    margin-bottom: 1rem;
  }
`;

export const InputTitle = styled.input`
  color: ${({ theme }) => theme.colors.greyDark};
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const InputTextArea = styled.input`
  border: none;
  color: ${({ theme }) => theme.colors.greyDark};
  font-family: inherit;
  font-size: 1.65rem;

  resize: none;
`;

export const InputGroupMd = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  padding: 3rem;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const InputGroupImage = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

export const SectionImage = styled.img`
  height: 15rem;
  width: 30rem;
`;
