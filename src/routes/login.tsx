import { Route, Switch, useRouteMatch } from "react-router-dom";

import { SignInForm } from "../components/SignInForm";

export const LoginRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={SignInForm} />
      <Route path={`${path}/cadastrar`} component={() => <p>Cadastrar</p>} />
      <Route
        path={`${path}/esqueci-a-senha`}
        component={() => <p>Esqueci minha senha</p>}
      />
    </Switch>
  );
};
