import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  color: var(--white);
  background-color: var(--purple-400);
  border-color: var(--purple-400);

  transition: filter 0.15s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;
