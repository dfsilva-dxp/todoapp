import { ChangeEvent, FormEvent, useState } from "react";
import { TiThListOutline } from "react-icons/ti";

import { useAuth } from "../../hooks/useAuth";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import * as S from "./styles";

type Credentials = {
  email: string;
  password: string;
};

export const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [hasAccount, setHasAccount] = useState(false);

  const { signIn } = useAuth();

  const toggleHasAccount = () => {
    setHasAccount(!hasAccount);
  };

  const handleSignIn = (e: FormEvent) => {
    try {
      e.preventDefault();
      signIn(credentials);
    } finally {
      setCredentials({
        email: "",
        password: "",
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

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
              value={credentials.email}
              onChange={handleChange}
              required
              placeholder="E-mail"
            />
            <Input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
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
                <span onClick={toggleHasAccount}>Clique aqui</span>
              </p>
            ) : (
              <p>
                Já tem uma conta?{" "}
                <span onClick={toggleHasAccount}>Clique aqui</span>
              </p>
            )}
          </S.Form>
        </S.Wrap>
      </S.Container>
    </S.Main>
  );
};
