import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.shape.borderRadiusPrimary};
  display: flex;
  height: 90vh;
  width: 90vw;
  max-width: 160rem;

  @media only screen and (max-width: 600px) {
    border-radius: unset;
    flex-direction: column-reverse;
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
`;

export const DashboardMain = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.shape.borderRadiusPrimary};
  flex: 1;
  margin: 1rem 1rem 1rem 0;
  overflow: overlay;
  position: relative;

  &::-webkit-scrollbar {
    width: 1.5rem;
    /* height: 5rem; */
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.white};
    margin-block: 7.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    /* background: linear-gradient(
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary}
      ); */
    /* border-radius: 100vw; */
    border: 0.25em solid ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.5;
  }

  @supports (scrollbar-color: red blue) {
    * {
      scrollbar-color: ${({ theme }) => theme.colors.white},
        ${({ theme }) => theme.colors.secondary};
      scrollbar-width: thin;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    margin: 1rem;
  }
`;
