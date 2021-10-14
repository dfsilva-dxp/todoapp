import styled from "styled-components";

export const Preloader = styled.h2`
  animation: load 1.2s infinite 0s ease-in-out;
  animation-direction: alternate;
  text-shadow: 0 0 1px white;

  @keyframes load {
    0% {
      opacity: 0.08;
      font-size: 10px;
      font-weight: 400;
      filter: blur(5px);
      letter-spacing: 3px;
    }
    100% {
      opacity: 1;
      font-size: 12px;
      font-weight: 600;
      filter: blur(0);
    }
  }
`;
