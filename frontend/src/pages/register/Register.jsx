import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="registerContenair">
        <div className="registerRightSide">
          <div className="registerForm">
            <h1>Register</h1>
            <input
              type="text"
              name="username"
              placeholder="username"
              required
            />
            <input type="email" name="email" placeholder="email" required />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <button>Register</button>
          </div>
          <div className="errMsgDiv">
            <p className="errorMsg">there is an error msg will appear here!</p>
          </div>
        </div>
        <div className="registerLeftSide">
          <h1>E-Nation Social</h1>
          <p>
            Welcome back! We're thrilled to see you again. Log in to access your
            personalized dashboard, stay connected with your community, and
            explore new features. Let's continue your journey together!
          </p>
          <h3>Don't have an account?</h3>
          <Link to="/login">
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
