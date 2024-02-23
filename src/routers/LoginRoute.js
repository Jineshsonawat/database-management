import { Route, Routes } from "react-router-dom";
import { Login } from "../component/login/Login";
import { DefaultPage } from "../component/DefaultPage";

function LoginRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export { LoginRoute };
