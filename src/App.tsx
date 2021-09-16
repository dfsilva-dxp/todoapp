import { BrowserRouter } from "react-router-dom";

import MyRoutes from "./routes";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
