import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="loginContenair">
        <div className="loginLeftSide">
          <h1>Hello World!</h1>
          <p>
            Welcome back! We're thrilled to see you again. Log in to access your
            personalized dashboard, stay connected with your community, and
            explore new features. Let's continue your journey together!
          </p>
          <h3>Don't have an account?</h3>
          <Link to="/register">
            <button>Create new account</button>
          </Link>
        </div>
        <div className="loginRightSide">
          <form onSubmit={(e) => handleSubmit(e)} className="loginForm">
            <h1>Login</h1>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="new-password"
              onChange={(e) => handleChange(e)}
              required
            />
            <button>Login</button>
          </form>
          <div className="errMsgDiv">
            <p className="errorMsg">{error ? error : null}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
