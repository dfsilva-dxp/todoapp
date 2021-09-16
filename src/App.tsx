import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MyRoutes from "./routes";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MyRoutes />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
