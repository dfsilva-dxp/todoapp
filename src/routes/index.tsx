import { Route, Switch } from "react-router";

import { AuthProvider } from "../hooks/useAuth";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./private";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <Switch>
        <PrivateRoutes path="/" exact component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </AuthProvider>
  );
};

export default MyRoutes;
