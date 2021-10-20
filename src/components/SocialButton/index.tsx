import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element;
}

export function SocialButton({ children, ...props }: SocialButtonProps) {
  return <S.Button {...props}>{children}</S.Button>;
}
