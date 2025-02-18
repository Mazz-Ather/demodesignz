'use client';
// Footer.tsx
import React, { useState } from 'react';
import './Footer.css'; // Ensure you import the CSS file
import Image from 'next/image';

const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal if click is outside the modal content
    if (e.currentTarget === e.target) {
      setShowPrivacyModal(false);
      setShowTermsModal(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <Image src="/images/logo1.png" alt="Logo" className="footer-logo"
          height={100} width={100}
          />
          <p>
            Welcome to our website! We are committed to delivering excellence in all we do.
            Stay connected with us through our social media channels.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <nav className="footer-nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/join-our-team">Join Our Team</a></li>
              <li><a href="/legal-notice">Legal Notice</a></li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPrivacyModal(true);
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li><a href="/contact">Contact Us</a></li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTermsModal(true);
                  }}
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </nav>
          <div className="cta-container">
            <a href="/" className="cta-btn">
             Contact Us Now!
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 WEBSITE ALGORITHMS, All Rights Reserved</p>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="modal" onClick={handleModalClose}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowPrivacyModal(false)}>
              &times;
            </span>
            <h2>Privacy Policy</h2>
            <p>
            BATP full contact details;<br />
the types of personal data you collect;<br />
where you got people’s data from, if it wasn’t from them;<br />
why you have people’s information and what you’re doing with it;<br />
your lawful basis and your legitimate interests where relevant;<br />
who you share people’s information with; <br />
how long you hold people’s information for before getting rid of it securely.
            </p>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="modal" onClick={handleModalClose}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowTermsModal(false)}>
              &times;
            </span>
            <h2>Terms &amp; Conditions</h2>
            <p>
              [Insert full terms and conditions details here...]
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
