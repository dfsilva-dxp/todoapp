import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto;
`;

export const Navbar = styled.header`
  background-color: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1920px) {
    max-width: 1640px;
  }
`;

export const Logo = styled.h1`
  line-height: 5rem;
  font: 700 2.5rem/5rem "Barlow Condensed", sans-serif;
  letter-spacing: -0.1rem;

  &::after {
    content: ".app";
    color: var(--purple-400);
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const WrapImage = styled.div`
  width: 100%;
  height: 100%;
  background: var(--purple-400);
  display: none;
  place-content: center;

  img {
    width: min(25rem, 100%);
  }

  @media (min-width: 576px) {
    display: flex;
  }
`;

export const WrapForm = styled.div`
  width: min(450px, 100%);
  padding: 1rem;
  border-radius: 0.5rem;
`;
