import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
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
          <div className="loginForm">
            <h1>Login</h1>
            <input
              type="text"
              name="username"
              placeholder="username"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <button>Login</button>
          </div>
          <div className="errMsgDiv">
            <p className="errorMsg">there is an error msg will appear here!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
