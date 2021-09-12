import { Button } from "components/Button";
import { Input } from "components/Input";
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
            <Input type="email" name="email" required placeholder="E-mail" />
            <Input
              type="password"
              name="password"
              required
              placeholder="Senha"
            />
            {!hasAccount ? (
              <>
                <Button type="submit">Entrar</Button>
              </>
            ) : (
              <>
                <Button type="submit">Cadastrar</Button>
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
