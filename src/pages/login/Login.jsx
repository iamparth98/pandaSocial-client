import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { currenUser, login } = useContext(AuthContext);
  const handleLogin = () => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <img src="" alt="" />
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            necessitatibus, minus perferendis odit eaque, cupiditate eius
            aliquam facilis error tenetur reprehenderit ipsam voluptas.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Resgister</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
