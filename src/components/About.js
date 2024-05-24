import React from "react";
import { Link } from "react-router-dom";
import about from "../assets/iphone.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Us</h2>
        <h1>QUALITY SMARTPHONES</h1>
        <h1>AT UNBEATABLE PRICES</h1>
        <p className="paragraph-1">
          Welcome to our website, where we offer the latest Android and iPhone
          smartphones at affordable prices. We are a new company with a passion
          for technology and a commitment to quality. Our curated selection
          includes top brands like Apple, Samsung, and Google.
        </p>
        <p className="paragraph-2">
          Our customer service is friendly and knowledgeable, ensuring a smooth
          shopping experience. We believe technology should be accessible to
          everyone, which is why we offer competitive pricing without
          compromising quality. Choose us for all your smartphone needs and let
          us help you find the perfect fit for your lifestyle
        </p>
        <div className="button-container">
          <Link to="/catalog">
            <button>Shop Now!</button>
          </Link>
        </div>
      </div>
      <div className="about-pic">
        <img src={about} alt="iphone" />
      </div>
    </div>
  );
}

export default About;
