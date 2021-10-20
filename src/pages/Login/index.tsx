import { LoginRoutes } from "../../routes/login";

import * as S from "./styles";

export const Login = () => {
  return (
    <S.Main>
      <S.Navbar>
        <S.Container>
          <S.Logo>todo</S.Logo>
        </S.Container>
      </S.Navbar>
      <S.Content>
        <S.WrapImage>
          <img src="/mobile_home.svg" alt="" />
        </S.WrapImage>
        <S.WrapForm>
          <LoginRoutes />
        </S.WrapForm>
      </S.Content>
    </S.Main>
  );
};
