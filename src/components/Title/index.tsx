import * as S from "./styles";

type TitleProps = {
  title: string;
};

export function Title({ title }: TitleProps) {
  return <S.Title data-title={title} />;
}
