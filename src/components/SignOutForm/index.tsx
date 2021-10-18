import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

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
      <Button type="submit" btnStyle="primary">
        Cadastrar
      </Button>
      <p>
        Já tem uma conta?
        <Link to="/login">Faça login</Link>
      </p>
    </S.Form>
  );
}
