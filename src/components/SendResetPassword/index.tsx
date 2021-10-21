import { FormEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { TiMail } from "react-icons/ti";

import { useAuth } from "../../hooks/useAuth";

import { Title } from "../Title";
import { Input } from "../Input";
import { Button } from "../Button";

import * as S from "./styles";

export function SendResetPassword() {
  const [email, setEmail] = useState("");
  const { sendPasswordResetEmail } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      await sendPasswordResetEmail(email);
      history.push("/login");
    },
    [email, sendPasswordResetEmail, history]
  );

  return (
    <S.Form onSubmit={handleSubmit}>
      <Title title="Redefinir senha" />
      <Input
        type="email"
        name="email"
        id="email"
        value={email}
        required
        placeholder="Seu e-mail"
        icon={<TiMail />}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" btnStyle="primary">
        Redefinir
      </Button>
    </S.Form>
  );
}
