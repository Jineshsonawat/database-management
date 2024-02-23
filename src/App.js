import { Login } from "./component/login/Login.js";
import { useData } from "./context/DatabaseContext.js";
import { RouterMain } from "./routers/RouterMain.js";

function App() {
  const { isLoggedIn } = useData();
  return <div>{isLoggedIn ? <RouterMain /> : <Login />}</div>;
}

export default App;
