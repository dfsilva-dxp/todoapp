import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 576px) {
    & {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    & {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    & {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    & {
      max-width: 1140px;
    }
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const Form = styled.form`
  width: min(420px, 100%);
  background: var(--white);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: grid;
  grid-template-rows: repeat(5, auto);
  gap: 1rem;

  p {
    text-align: center;

    span {
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
      transition: color 0.15s;

      &:hover {
        color: var(--purple-400);
      }
    }
  }
`;

export const Title = styled.h4`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: attr(data-title);
    margin-left: 0.5rem;
  }
`;
