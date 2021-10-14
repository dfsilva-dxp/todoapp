import { useCallback, useEffect, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";

interface Cookies {
  set: (key: string, token: string) => void;
  get: (key: string) => string;
  remove: (key: string) => void;
}

const cookies = {} as Cookies;

export function useCookies() {
  const [refreshToken, setRefreshToken] = useState(() => {
    const { "todo.refreshToken": refreshToken } = parseCookies();
    return refreshToken;
  });

  try {
    cookies.set = useCallback((key, refreshToken) => {
      setCookie(undefined, key, refreshToken, {
        maxAge: 3600, // 1 hours
        path: "/",
      });
    }, []);

    cookies.get = useCallback((key) => {
      const { key: refreshToken } = parseCookies();
      return refreshToken;
    }, []);

    cookies.remove = useCallback((key) => destroyCookie(undefined, key), []);
  } catch (e) {
    throw new Error("There is no refreshToken in cookies");
  }

  useEffect(() => {
    const { "todo.refreshToken": response } = parseCookies();
    setRefreshToken(response);
  }, []);

  return { refreshToken, cookies };
}
