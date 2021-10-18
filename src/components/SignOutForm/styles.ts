import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: grid;
  gap: 1rem;

  p {
    text-align: right;
    font-size: 0.75rem;
    a {
      font-weight: 500;
      margin-left: 0.5rem;

      &:hover {
        color: var(--purple-400);
      }
    }
  }
`;
