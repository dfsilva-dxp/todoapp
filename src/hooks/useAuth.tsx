import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

import firebase from "../services/firebase";
import { useCookies } from "./useCookies";
import { actionCodeSettings } from "../utils/actionCodeSettings";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  uid: string;
  displayName?: string | null;
  email: string | null;
  photoURL?: string | null;
  refreshToken: string;
  emailVerified: boolean;
};

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: ({ email, password }: Credentials) => Promise<void>;
  signOut: ({ email, password }: Credentials) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  logout: () => Promise<void>;
  sendEmailVerification: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
};

type Credentials = {
  email: string;
  password: string;
};

const AuthContext = createContext({} as AuthContextData);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);
  const { refreshToken, cookies } = useCookies();

  const history = useHistory();

  function session(refreshToken = "") {
    if (refreshToken) {
      cookies.set("todo.refreshToken", refreshToken);
    } else {
      cookies.remove("todo.refreshToken");
    }
  }

  async function sendEmailVerification() {
    const user = await firebase.auth().currentUser;
    user?.sendEmailVerification(actionCodeSettings);
  }

  async function sendPasswordResetEmail(email: string) {
    await firebase
      .auth()
      .sendPasswordResetEmail(email, actionCodeSettings)
      .then(() => {
        toast.success(`E-mail de redefinição de senha enviado para ${email}`, {
          theme: "colored",
          icon: false,
        });
      })
      .catch((err) => {
        if (err instanceof Error) {
          toast.error(err.message, {
            theme: "colored",
            icon: false,
          });
        }
      });
  }

  async function signIn({ email, password }: Credentials) {
    try {
      setLoading(true);

      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          if (user) {
            const { refreshToken, uid, emailVerified } = user;
            session(refreshToken);
            setUser({ email, refreshToken, uid, emailVerified });
          }
        });
    } catch (err) {
      history.push("/login");
      if (err instanceof Error) {
        toast.error(err.message, {
          theme: "colored",
          icon: false,
        });
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  async function signOut({ email, password }: Credentials) {
    try {
      setLoading(true);

      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          sendEmailVerification();
        })
        .finally(() => logout());

      toast.success("Usuário criado com sucesso!", {
        theme: "colored",
        icon: false,
      });
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, {
          theme: "colored",
          icon: false,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    return await firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({} as User);
        session();
      })
      .finally(() => history.push("/login"));
  }

  async function signInWithGoogle() {
    try {
      setLoading(true);

      await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(({ user }) => {
          if (user) {
            const {
              displayName,
              email,
              photoURL,
              refreshToken,
              uid,
              emailVerified,
            } = user;
            session(refreshToken);
            setUser({
              displayName,
              email,
              photoURL,
              refreshToken,
              uid,
              emailVerified,
            });
            history.push("/");
          }
        });
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, {
          theme: "colored",
          icon: false,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  async function signInWithGithub() {
    try {
      setLoading(true);

      await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then(({ user }) => {
          console.log(user);
          if (user) {
            const {
              displayName,
              email,
              photoURL,
              refreshToken,
              uid,
              emailVerified,
            } = user;
            session(refreshToken);
            setUser({
              displayName,
              email,
              photoURL,
              refreshToken,
              uid,
              emailVerified,
            });
            history.push("/");
          }
        });
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, {
          theme: "colored",
          icon: false,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  async function signInWithFacebook() {
    try {
      setLoading(true);

      await firebase
        .auth()
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(({ user }) => {
          console.log(user);
          if (user) {
            const {
              displayName,
              email,
              photoURL,
              refreshToken,
              uid,
              emailVerified,
            } = user;
            session(refreshToken);
            setUser({
              displayName,
              email,
              photoURL,
              refreshToken,
              uid,
              emailVerified,
            });
            history.push("/");
          }
        });
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, {
          theme: "colored",
          icon: false,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (refreshToken) {
      setLoading(true);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const { email, refreshToken, uid, emailVerified } = user;
          setUser({ email, refreshToken, uid, emailVerified });
        }
        setLoading(false);
      });
    }
  }, [refreshToken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        logout,
        sendEmailVerification,
        sendPasswordResetEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
