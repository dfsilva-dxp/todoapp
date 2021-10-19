import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  width: min(450px, 100%);
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
`;
