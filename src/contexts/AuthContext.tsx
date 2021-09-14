import { useCookies } from "hooks/useCookies";
import { createContext, ReactNode, useState } from "react";

import firebase from "../services/firebase";

type AuthContextProviderParams = {
  children: ReactNode;
};

type User = {
  name?: string;
  email: string;
  uid: string;
  refreshToken: string;
};

type Credentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User;
  isAuthenticated: boolean;
  loading: boolean;
  signIn: ({ email, password }: Credentials) => void;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderParams) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);
  const isAuthenticated = !!user;

  const { setCookie, removeCookie } = useCookies();

  function session(refreshToken = "") {
    if (!!refreshToken) {
      setCookie("todoapp", refreshToken);
    } else {
      removeCookie(refreshToken);
    }
  }

  async function signIn({ email, password }: Credentials) {
    try {
      setLoading(true);

      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => response);

      if (response.user) {
        const { refreshToken, uid } = response.user;

        session(refreshToken);

        setUser({
          email,
          refreshToken,
          uid,
        });
      }
    } catch (err) {
      setLoading(false);
      session();
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
