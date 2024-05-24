import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/Zynx Logo.png";
import signup from "../assets/account page.png";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [errorMessage2, setErrorMessage2] = useState();
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    axios
      .post("http://localhost:3001/users", {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((result) => {
        console.log(result);
        setSuccessMessage("Successfully created your account!");
        setShowSuccess(true);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrorMessage("");
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.data && err.response.data.error) {
          setErrorMessage2(err.response.data.error);
        } else {
          setErrorMessage("An error occurred");
        }
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-logo">
          <Link to="/signup">
            <img src={logo} alt="Zynx Logo" />
          </Link>
        </div>
        <h1>Create an Account</h1>
        <h2>Please fill up the necessary information.</h2>
        {showSuccess && <h3 className="register-success">{successMessage}</h3>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <p className="password-validation">{errorMessage}</p>
          <p className="password-validation">{errorMessage2}</p>
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div className="sign-up-pic">
        <Link to="/">
          <button>Log In</button>
        </Link>
        <img src={signup} alt="Homepage pic" />
      </div>
    </div>
  );
}

export default Signup;
