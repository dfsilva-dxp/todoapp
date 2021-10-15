import { TiLockClosedOutline, TiMail } from "react-icons/ti";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

import { Button } from "../Button";
import { Input } from "../Input";
import { Title } from "../Title";

import * as S from "./styles";

export function SignInForm() {
  const history = useHistory();
  const { url } = useRouteMatch();

  function handleClickBtnSignOut() {
    history.push(`${url}/cadastrar`);
  }

  return (
    <S.Form>
      <Title title="Login" />
      <Input
        type="email"
        name="email"
        label="Seu e-mail"
        id="email"
        required
        placeholder="johndoe@email.com"
        icon={<TiMail />}
      />
      <Input
        type="password"
        name="password"
        label="Senha"
        id="password"
        required
        placeholder="Sua senha"
        icon={<TiLockClosedOutline />}
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
