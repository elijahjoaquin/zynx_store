import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/Zynx Logo.png";
import login from "../assets/account page.png";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else {
          setShowErrorMessage(true);
          setErrorMessage("Email or Password is Incorrect");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-logo">
          <Link to="/">
            <img src={logo} alt="Zynx Logo" />
          </Link>
        </div>
        <h1>Hi there! Welcome to Zynx!</h1>
        <h2>Please fill up the necessary information.</h2>
        {showErrorMessage && <h3 className="login-error">{errorMessage}</h3>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Login</button>
        </form>
        <h2>
          Don't have and account?
          <Link to="/signup" className="signup-link">
            Sign up Now
          </Link>
        </h2>
      </div>
      <div className="login-pic">
        <img src={login} alt="Homepage pic" />
      </div>
    </div>
  );
}

export default Login;
