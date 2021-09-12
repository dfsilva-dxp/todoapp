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
  background: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: grid;
  grid-template-rows: repeat(5, 3rem);
  gap: 1rem;

  p {
    text-align: center;
    color: #777;

    span {
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
      transition: color 0.15s;

      &:hover {
        color: #fd6699;
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
  color: #fff;
  background-color: #fd6699;
  border-color: #fd6699;

  transition: filter 0.15s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;
