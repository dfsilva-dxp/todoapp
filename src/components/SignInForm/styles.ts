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

  p {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-200);

    &::before,
    &::after {
      content: "----------";
    }

    &::before {
      margin-right: 0.5rem;
    }
    &::after {
      margin-left: 0.5rem;
    }
  }
`;

export const WrapButtons = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: center;
`;

export const WrapSocialButtons = styled.span`
  display: grid;
  grid-template-columns: auto repeat(3, 1fr);
  gap: 1rem;
`;
