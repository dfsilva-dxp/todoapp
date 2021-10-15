import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  icon: JSX.Element;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, id, icon, ...props }: InputProps,
  ref
) => {
  return (
    <S.FormGroup>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Icon>{icon}</S.Icon>
      <S.Input id={id} {...props} ref={ref} />
    </S.FormGroup>
  );
};

export const Input = forwardRef(InputDefault);
