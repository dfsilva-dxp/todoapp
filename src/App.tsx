import { Login } from "pages/Login";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Login />
    </BrowserRouter>
  );
}

export default App;
