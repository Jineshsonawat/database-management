import "./login.css";

function Login() {
  return (
    <div className="login">
      <main className="login__main">
        <h3>Login</h3>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <p className="red">Login</p>
        <p className="border">Login with test credentials</p>
      </main>
    </div>
  );
}

export { Login };
