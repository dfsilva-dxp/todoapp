import styled from "styled-components";

interface ButtonProps {
  backgroundColor: string;
  iconColor: string;
}

export const Button = styled.button<ButtonProps>`
  min-width: 3rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 0.75rem 1.25rem;
  vertical-align: middle;
  user-select: none;
  border: 1px solid var(--gray-150);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: ${({ iconColor }) => iconColor};
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: filter 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.25rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
