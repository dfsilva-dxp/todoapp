import { Route, Switch, useRouteMatch } from "react-router-dom";

import { SignInForm } from "../components/SignInForm";
import { SignOutForm } from "../components/SignOutForm";

export const LoginRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={SignInForm} />
      <Route path={`${path}/cadastrar`} component={SignOutForm} />
    </Switch>
  );
};
