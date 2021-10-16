import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { Button } from "../Button";
import { Input } from "../Input";
import { Title } from "../Title";

import * as S from "./styles";

type Credentials = {
  email: string;
  password: string;
};

export function SignInForm() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const { signIn } = useAuth();

  const history = useHistory();
  const { url } = useRouteMatch();

  function handleClickBtnSignOut() {
    history.push(`${url}/cadastrar`);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSignIn = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      signIn(credentials);
      history.push("/");

      setCredentials({
        email: "",
        password: "",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [credentials]
  );

  return (
    <S.Form onSubmit={handleSignIn}>
      <Title title="Login" />
      <Input
        type="email"
        name="email"
        label="Seu e-mail"
        id="email"
        value={credentials.email}
        required
        placeholder="johndoe@email.com"
        icon={<TiMail />}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        label="Senha"
        id="password"
        value={credentials.password}
        required
        placeholder="Sua senha"
        icon={<TiLockClosedOutline />}
        onChange={handleChange}
      />
      <p>
        Esqueceu a senha?
        <Link to={`${url}/esqueci-a-senha`}>Clique aqui</Link>
      </p>
      <S.BtnGroup>
        <Button type="submit" btnStyle="primary">
          Entrar
        </Button>
        <Button
          type="button"
          btnStyle="secondary"
          onClick={handleClickBtnSignOut}
        >
          Criar Conta
        </Button>
      </S.BtnGroup>
    </S.Form>
  );
}
