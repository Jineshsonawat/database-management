import { Route, Routes } from "react-router-dom";
import { Login } from "../component/login/Login";
import { DefaultPage } from "../component/DefaultPage";

function LoginRoute() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </div>
  );
}

export { LoginRoute };
