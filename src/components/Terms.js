import React, { useState } from "react";
import term from "../assets/terms.png";

function Terms() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="terms-container">
      <div className="terms-text">
        <h1>Terms &</h1>
        <h1>Conditions</h1>
        <p className="paragraph-1">
          By accessing our website, you agree to our pricing, warranty and
          return policies. All intellectual property rights are owned by us. We
          are not liable for any damages arising from your use of this website
          or products purchased from us. Please refer to our full terms and
          conditions for more information.
        </p>
        <div className="learn-more-btn">
          <button onClick={openModal}>Learn More</button>
        </div>
      </div>
      <div className="terms-pic">
        <img src={term} alt="terms" />
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <button onClick={closeModal} className="modal-close-button">
              X
            </button>
            <h1>Terms & Conditions</h1>
            <h2>1. Introduction</h2>
            <p>
              Welcome to our website. By accessing this website, you agree to be
              bound by these terms and conditions. If you do not agree to these
              terms and conditions, you should not use or access this website.
            </p>
            <h2>2. Use of the Website</h2>
            <p>
              You agree to use this website only for lawful purposes and in a
              way that does not infringe the rights of, restrict or inhibit
              anyone else's use and enjoyment of this website. You are
              prohibited from using this website for any unlawful purpose,
              including but not limited to, posting or transmitting any material
              that is threatening, defamatory, obscene, or otherwise offensive.
            </p>
            <h2>3. Intellectual Property Rights</h2>
            <p>
              All intellectual property rights in the content of this website
              are owned by us. You are prohibited from using any of the content
              of this website without our express written permission.
            </p>
            <h2>4. Pricing and Availability</h2>
            <p>
              All prices are subject to change without notice. We reserve the
              right to modify or discontinue any product at any time without
              notice. We are not liable to you or to any third party for any
              modification, price change, suspension, or discontinuance of any
              product.
            </p>
            <h2>5. Warranty and Returns</h2>
            <p>
              All products are sold with manufacturer's warranty. We do not
              offer any additional warranty. Returns are accepted within 14 days
              of purchase.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Terms;
