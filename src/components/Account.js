import React from "react";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div className="account-container">
      <h2>My Account</h2>
      <div className="account-menu">
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default Account;
