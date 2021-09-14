import { FormEvent, useState } from "react";
import { TiThListOutline } from "react-icons/ti";

import { Button } from "components/Button";
import { Input } from "components/Input";

import { useAuth } from "hooks/useAuth";

import * as S from "./styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const { signIn } = useAuth();

  function setCredentials() {
    setEmail("");
    setPassword("");
  }

  function handleClick() {
    setHasAccount(!hasAccount);
  }

  function handleSignIn(e: FormEvent) {
    e.preventDefault();
    const credentials = { email, password };
    signIn(credentials);
    setCredentials();
  }

  return (
    <S.Main>
      <S.Container>
        <S.Wrap>
          <S.Form onSubmit={(e) => e.preventDefault()}>
            <S.Title data-title="Todo App">
              <TiThListOutline />
            </S.Title>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-mail"
            />
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Senha"
            />
            {!hasAccount ? (
              <>
                <Button type="submit" handleSignIn={handleSignIn}>
                  Entrar
                </Button>
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
