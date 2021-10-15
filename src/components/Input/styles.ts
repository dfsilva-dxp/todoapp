import styled from "styled-components";

export const FormGroup = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  font-size: 1.7rem;
  display: grid;
  place-items: center;
  color: var(--gray-150);
`;

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 0 4.5rem;
  padding-top: 0.625rem;
  border-style: none none solid;
  border-color: var(--gray-150);
  border-width: 1px;
  outline: 0;
  background-color: var(--white);
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
  position: absolute;
  color: var(--gray-800);
  font-weight: 600;
  font-size: 0.9375rem;
  padding-left: 4.5rem;
  top: 0.25rem;
`;
