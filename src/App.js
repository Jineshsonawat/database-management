// import { Route } from "react-router-dom";
import { EmployeeInfo } from "./component/employee/EmployeeInfo.js";
import { EmployeeList } from "./component/employee/EmployeeList.js";
import { Route, Routes } from "react-router-dom";
import { Login } from "./component/login/Login.js";
import { RouterMain } from "./routers/RouterMain.js";

function App() {
  const isLoggedIn = false;
  return <div>{isLoggedIn ? <Login /> : <RouterMain />}</div>;
}

export default App;
