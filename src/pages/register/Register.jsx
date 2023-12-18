import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form action="">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />

            <input type="email" name="email" id="email" placeholder="Email" />

            <input type="text" name="name" id="name" placeholder="Name" />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Panda Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            necessitatibus, minus perferendis odit eaque, cupiditate eius
            aliquam facilis error tenetur reprehenderit ipsam voluptas.
          </p>
          <span>Aready have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
