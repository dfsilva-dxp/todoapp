import { Route, Routes } from "react-router";

import { AuthProvider } from "../hooks/useAuth";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./private";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <PrivateRoutes isPrivate path="home" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
};

export default MyRoutes;
