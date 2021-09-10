import { useState } from "react";
import { TiThListOutline } from "react-icons/ti";

import * as S from "./styles";

export const Login = () => {
  const [hasAccount, setHasAccount] = useState(false);

  function handleClick() {
    setHasAccount(!hasAccount);
  }

  return (
    <S.Main>
      <S.Container>
        <S.Wrap>
          <S.Form>
            <S.Title data-title="Todo App">
              <TiThListOutline />
            </S.Title>
            <S.Input type="email" name="email" required placeholder="E-mail" />
            <S.Input
              type="password"
              name="password"
              required
              placeholder="Senha"
            />
            {!hasAccount ? (
              <>
                <S.Button type="submit">Entrar</S.Button>
              </>
            ) : (
              <>
                <S.Button type="submit">Cadastrar</S.Button>
              </>
            )}

            {!hasAccount ? (
              <p>
                Não tem uma conta?{" "}
                <span onClick={handleClick}>Clique aqui</span>
              </p>
            ) : (
              <p>
                Já tem uma conta? <span onClick={handleClick}>Clique aqui</span>
              </p>
            )}
          </S.Form>
        </S.Wrap>
      </S.Container>
    </S.Main>
  );
};
