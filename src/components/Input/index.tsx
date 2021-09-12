import { InputHTMLAttributes } from "react";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

export function Input({ ...props }: InputProps) {
  return <S.Input {...props} />;
}
