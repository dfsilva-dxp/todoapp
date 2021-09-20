import { parseCookies } from "nookies";
import { Redirect, Route, RouteProps } from "react-router";

import { useAuth } from "../hooks/useAuth";

interface PrivateRoutesProps extends RouteProps {
  isPrivate?: boolean;
}

export function PrivateRoutes({ isPrivate, ...params }: PrivateRoutesProps) {
  const { loading } = useAuth();
  const { "todo.refreshToken": refreshToken } = parseCookies();

  if (!loading && !!!refreshToken) {
    return <Redirect to="/" />;
  }

  return <Route {...params} />;
}
