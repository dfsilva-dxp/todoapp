import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 5rem;
`;

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  place-items: center;

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

export const Content = styled.div`
  width: min(470px, 100%);
`;

export const Footer = styled.footer`
  background-color: var(--purple-400);
  display: grid;
  place-items: center;

  p {
    font-size: 0.875rem;
    font-weight: bold;
    color: var(--white);
  }
`;
