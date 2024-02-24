import { useEffect } from "react";
import { LoginRoute } from "./routers/LoginRoute.js";
import { RouterMain } from "./routers/RouterMain.js";
import { useData } from "./context/DatabaseContext.js";
import "./App.css";

function App() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useData();

  useEffect(() => {
    setIsUserLoggedIn(sessionStorage.getItem("isLogged"));
  });

  return <div>{isUserLoggedIn ? <RouterMain /> : <LoginRoute />}</div>;
}

export default App;
