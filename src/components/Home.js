import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/Homepage pic.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <p>
          Here at <span className="highlight-text">ZYNX</span>,
        </p>
        <p>We Help in Finding The</p>
        <p>
          Perfect Phone For <span className="highlight-text">You</span>.
        </p>
        <Link to="/catalog">
          <button>Shop Now!</button>
        </Link>
      </div>
      <div className="home-pic">
        <img src={home} alt="Homepage pic" />
      </div>
    </div>
  );
}

export default Home;
