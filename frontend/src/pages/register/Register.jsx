import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { axiosRequest } from "../../helper/requestHelper";

function Register() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e, inputs) => {
    e.preventDefault();
    try {
      await axiosRequest.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };
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
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => handleChange(e)}
              required
            />
            <button onClick={(e) => handleRegister(e, inputs)}>Register</button>
          </div>
          <div className="errMsgDiv">
            <p className="errorMsg">{error && error}</p>
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
