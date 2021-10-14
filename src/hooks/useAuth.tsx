import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { toast } from "react-toastify";

import firebase from "../services/firebase";
import { useHistory } from "react-router";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  name?: string;
  email: string | null;
  uid: string;
  refreshToken: string;
};

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: ({ email, password }: Credentials) => Promise<void>;
  signOut: ({ email, password }: Credentials) => Promise<void>;
  logout: () => Promise<void>;
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

  const history = useHistory();

  const session = (refreshToken = "") => {
    if (refreshToken) {
      setCookie(undefined, "todo.refreshToken", refreshToken, {
        maxAge: 60 * 60, // 1 hour
        path: "/",
      });
    } else {
      destroyCookie(undefined, "todo.refreshToken");
    }
  };

  const signIn = async ({ email, password }: Credentials) => {
    try {
      setLoading(true);

      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          if (user) {
            const { refreshToken, uid } = user;
            session(refreshToken);
            setUser({ email, refreshToken, uid });
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
  };

  const signOut = async ({ email, password }: Credentials) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.auth().signOut();
        });
      toast.success("User created successfully!");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  };

  const logout = async () => {
    return await firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({} as User);
        session();
      })
      .finally(() => history.push("/"));
  };

  useEffect(() => {
    const { "todo.refreshToken": refreshToken } = parseCookies();

    if (refreshToken) {
      setLoading(true);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const { email, refreshToken, uid } = user;
          setUser({ email, refreshToken, uid });
        }
        setLoading(false);
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
