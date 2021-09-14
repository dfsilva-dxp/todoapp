import { ButtonHTMLAttributes, FormEvent, ReactNode } from "react";

import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  handleSignIn?: (event: FormEvent<HTMLButtonElement>) => void;
}

export function Button({ children, handleSignIn, ...props }: ButtonProps) {
  return (
    <S.Button onClick={handleSignIn} {...props}>
      {children}
    </S.Button>
  );
}
