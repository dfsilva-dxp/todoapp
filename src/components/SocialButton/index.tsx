import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
  backgroundColor: string;
  iconColor: string;
}

export function SocialButton({
  children,
  backgroundColor,
  iconColor,
  ...props
}: SocialButtonProps) {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      iconColor={iconColor}
      {...props}
    >
      {children}
    </S.Button>
  );
}
