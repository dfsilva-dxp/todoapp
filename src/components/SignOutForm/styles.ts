import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: grid;
  gap: 1rem;

  a {
    font-weight: 500;
    font-size: 0.875rem;

    &:hover {
      color: var(--purple-400);
    }
  }
`;

export const WrapButtons = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: center;
`;
