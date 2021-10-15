import { LoginRoutes } from "../../routes/login";

import * as S from "./styles";

export const Login = () => {
  return (
    <S.Main>
      <S.Container>
        <S.Content>
          <LoginRoutes />
        </S.Content>
      </S.Container>
      <S.Footer>
        <p>&copy; 2021 &bull; Alguns direitos reservados</p>
      </S.Footer>
    </S.Main>
  );
};
