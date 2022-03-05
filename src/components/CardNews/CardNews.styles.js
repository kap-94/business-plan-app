import styled from "styled-components";

export const Card = styled.div`
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  cursor: pointer;
  height: 45rem;
  margin-bottom: 3.5rem;
  overflow: hidden;
  /* width: 32.5rem; */

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export const CardImage = styled.img`
  height: 40%;
  width: 100%;
`;

export const CardTitle = styled.h1`
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
  text-transform: uppercase;
`;

export const CardBody = styled.div`
  /* height: calc(100% - (1.2rem + (1.8rem * 1) + 0.5rem)); */
  height: 47.5%;
  overflow: hidden;
  flex: 1 1 auto;
  min-height: 1px;
  overflow-y: auto;
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 0.35rem;
  }

  /* &::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  &::-webkit-scrollbar-thumb {
    background: #5549b8;
  } */
`;

export const CardLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;

  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardFooter = styled.div`
  height: 12.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
