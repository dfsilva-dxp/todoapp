import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { TiLockClosedOutline, TiMail } from "react-icons/ti";
import { RiFacebookFill, RiGithubLine, RiGoogleFill } from "react-icons/ri";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import { Button } from "../Button";
import { Input } from "../Input";
import { SocialButton } from "../SocialButton";
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
      <S.WrapButtons>
        <Link to={`${url}/esqueci-a-senha`}>Esqueceu a senha?</Link>
        <Button type="submit" btnStyle="primary">
          Entrar
        </Button>
      </S.WrapButtons>
      <p>
        OU
        {/* <Link to={`${url}/cadastrar`}>Cadastre-se</Link> */}
      </p>
      <div>
        <SocialButton>
          <RiGoogleFill />
        </SocialButton>
        <SocialButton>
          <RiFacebookFill />
        </SocialButton>
        <SocialButton>
          <RiGithubLine />
        </SocialButton>
        <SocialButton>Cadastre-se</SocialButton>
      </div>
    </S.Form>
  );
}
