import { Route, Switch } from "react-router";

import { AuthProvider } from "../hooks/useAuth";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./private";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoutes path="/home" component={Home} />
      </Switch>
    </AuthProvider>
  );
};

export default MyRoutes;
