import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import { Button } from "../Button";
import { Input } from "../Input";
import { Title } from "../Title";

import * as S from "./styles";

type Credentials = {
  email: string;
  password: string;
};

export function SignOutForm() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const { signOut } = useAuth();
  const history = useHistory();

  const handleRedirect = useCallback(() => history.push(`/login`), [history]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCredentials({
        ...credentials,
        [name]: value,
      });
    },
    [credentials]
  );

  const handleSignOut = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      await signOut(credentials).then(() => {
        setCredentials({
          email: "",
          password: "",
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [credentials]
  );

  return (
    <S.Form onSubmit={handleSignOut}>
      <Title title="Cadastre-se" />
      <Input
        type="email"
        name="email"
        id="email"
        value={credentials.email}
        required
        placeholder="Seu e-mail"
        icon={<TiMail />}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        id="password"
        value={credentials.password}
        required
        placeholder="Sua senha"
        icon={<TiLockClosedOutline />}
        onChange={handleChange}
      />

      <Button type="submit" btnStyle="primary">
        Cadastrar
      </Button>

      <p>Já tem uma conta?</p>
      <Button type="button" btnStyle="secondary" onClick={handleRedirect}>
        Ir para Login
      </Button>
    </S.Form>
  );
}
