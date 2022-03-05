import styled from "styled-components";

export const PlanCard = styled.div`
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  height: 20rem;
  min-width: 25rem;
  overflow: hidden;
  padding: 0.75rem 1.25rem;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  .card-header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 1.25rem;
    height: 20%;
    text-transform: uppercase;
  }

  .card-body {
    /* height: calc(100% - (1.2rem + (1.8rem * 1) + 0.5rem)); */
    height: 60%;
    overflow-y: auto;
    flex: 1 1 auto;
    min-height: 1px;
    overflow-y: auto;
    padding: 1rem 0;
  }

  .card-footer {
    display: flex;
    align-items: center;
    height: 20%;

    span {
      margin-right: 0.75rem;
    }
  }
`;
