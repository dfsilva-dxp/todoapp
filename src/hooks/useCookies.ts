import { useCallback, useEffect, useState } from "react";
import cookies from "services/cookies";

export const useCookies = () => {
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    const response = cookies.get();
    const { todoapp: token } = response;
    setRefreshToken(token);
  }, []);

  const setCookie = useCallback((key: string, newValue: string) => {
    cookies.set(key, newValue);
  }, []);

  const removeCookie = useCallback((key: string) => cookies.delete(key), []);

  return { refreshToken, setCookie, removeCookie };
};
