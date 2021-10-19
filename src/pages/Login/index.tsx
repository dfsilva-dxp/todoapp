import { LoginRoutes } from "../../routes/login";

import * as S from "./styles";

export const Login = () => {
  return (
    <S.Main>
      <S.Content>
        <LoginRoutes />
      </S.Content>
    </S.Main>
  );
};
