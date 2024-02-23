import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DatabaseContext";

const credentials = {
  user: "testUser",
  password: "testUser",
};

function Login() {
  const [inputUserName, setInputUserName] = useState("");
  const [inputUserPassword, setInputUserPassword] = useState("");

  const { selectedData, setIsLogedIn } = useData();
  const navigate = useNavigate();

  function testCredentials(credential) {
    const { user, password } = credential;
    setInputUserName(user);
    setInputUserPassword(password);
  }
  function onLogin(credential) {
    const { user, password } = credential;

    if (user === inputUserName && password === inputUserPassword) {
      setIsLogedIn(true);
      navigate(`/candidate/${selectedData.id}`);
    }
  }

  return (
    <div className="login">
      <main className="login__main">
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Username"
          value={inputUserName}
          onChange={(e) => setInputUserName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={inputUserPassword}
          onChange={(e) => setInputUserPassword(e.target.value)}
          required
        />
        <p className="red" onClick={() => onLogin(credentials)}>
          Login
        </p>
        <p className="border" onClick={() => testCredentials(credentials)}>
          Login with test credentials
        </p>
      </main>
    </div>
  );
}

export { Login };
