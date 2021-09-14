import { AuthContextProvider } from "contexts/AuthContext";
import { Login } from "./pages/Login";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyles />
      <Login />
    </AuthContextProvider>
  );
}

export default App;
