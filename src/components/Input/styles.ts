import styled from "styled-components";

export const FormGroup = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  font-size: 1.7rem;
  display: grid;
  place-items: center;
  color: var(--gray-150);
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 3.5rem;
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
  &:focus:not(:disabled):not([readonly]) {
    border-color: var(--purple-400);
  }
`;
