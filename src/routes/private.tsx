import { parseCookies } from "nookies";
import { Navigate, Route, RouteProps } from "react-router";

interface PrivateRoutesProps extends RouteProps {
  isPrivate?: boolean;
}

export function PrivateRoutes({ isPrivate, ...params }: PrivateRoutesProps) {
  const { "todo.app": refreshToken } = parseCookies();

  return isPrivate && !!!refreshToken ? (
    <Navigate to="/" />
  ) : (
    <Route {...params} />
  );
}
