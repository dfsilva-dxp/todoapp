// import { ChangeEvent, FormEvent, useCallback, useState } from "react";

// import { useAuth } from "../../hooks/useAuth";

// import { Button } from "../../components/Button";
// import { Input } from "../../components/Input";

import * as S from "./styles";
// import { useHistory } from "react-router";

// type Credentials = {
//   email: string;
//   password: string;
// };

export const Login = () => {
  // const [credentials, setCredentials] = useState<Credentials>({
  //   email: "",
  //   password: "",
  // });
  // const [hasAccount, setHasAccount] = useState(false);
  // const { signIn, signOut } = useAuth();
  // const history = useHistory();

  // const toggleHasAccount = () => {
  //   setHasAccount(!hasAccount);
  // };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setCredentials({
  //     ...credentials,
  //     [name]: value,
  //   });
  // };

  // const handleSignIn = useCallback(
  //   (e: FormEvent) => {
  //     e.preventDefault();

  //     signIn(credentials);
  //     history.push("/");

  //     setCredentials({
  //       email: "",
  //       password: "",
  //     });
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [credentials]
  // );

  // const handleSignOut = useCallback(
  //   async (e: FormEvent) => {
  //     e.preventDefault();

  //     await signOut(credentials)
  //       .then(() => {
  //         setCredentials({
  //           email: "",
  //           password: "",
  //         });
  //       })
  //       .finally(() => setHasAccount(false));
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [credentials]
  // );

  return (
    <S.Main>
      <S.Container>
        <S.Wrap>
          {/* <S.Form onSubmit={(e) => e.preventDefault()}>
            {!hasAccount ? (
              <S.Title data-title="Login" />
            ) : (
              <S.Title data-title="Cadastro" />
            )}

            <Input
              type="email"
              name="email"
              label="Seu e-mail"
              id="email"
              value={credentials.email}
              onChange={handleChange}
              required
              placeholder="johndoe@email.com"
            />
            <Input
              type="password"
              name="password"
              label="Sua senha"
              id="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Senha"
            />
            {!hasAccount ? (
              <>
                <Button type="submit" onClick={handleSignIn}>
                  Entrar
                </Button>
              </>
            ) : (
              <>
                <Button type="submit" onClick={handleSignOut}>
                  Cadastrar
                </Button>
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
          </S.Form> */}
        </S.Wrap>
      </S.Container>
    </S.Main>
  );
};
