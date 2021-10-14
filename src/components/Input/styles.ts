import styled from "styled-components";

export const FormGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.375rem 0.75rem;
  border-style: none none solid;
  border-color: var(--gray-150);
  border-width: 1px;
  border-radius: 0.25rem;
  outline: 0;
  background-color: var(--gray-50);
  background-clip: padding-box;
  font-size: 1rem;
  line-height: 1.5;

  transition: all 0.1s ease-out;

  &:hover:not(:disabled):not([readonly]),
  &:hover:not(:disabled):not([readonly]) {
    border-color: var(--purple-400);
  }
`;

export const Label = styled.label`
  display: block;
  color: var(--gray-800);
  font-weight: 600;
  font-size: 0.875rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
`;
