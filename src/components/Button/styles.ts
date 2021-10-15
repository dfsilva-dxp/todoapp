import styled from "styled-components";

export const Button = styled.button`
  padding: 0.75rem 2.25rem;
  vertical-align: middle;
  user-select: none;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;

  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;

  &.primary {
    background-color: var(--purple-400);
    border: 1px solid transparent;
    color: var(--white);

    &:not([disabled]):hover {
      background-color: var(--purple-300);
    }
  }

  &.secondary {
    border: 1px solid var(--gray-150);
    background-color: var(--white);

    &:not([disabled]):hover {
      background-color: var(--gray-50);
    }
  }
`;
