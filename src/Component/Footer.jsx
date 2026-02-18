import React from "react";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          {/* About */}
          <div className="footer-col">
            <h4>ATM Management System</h4>
            <p>
              Securely manage your money, transfer funds, and track your transactions with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col ms-5">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/signin">Sign-in</a></li>
              <li><a href="/signup">Sign-up</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>
              <i className="bi bi-envelope me-2"></i>
              <a href="mailto:support@atmsystem.com">shubham9801033836@gmail.com</a>
            </p>
            <p>
              <i className="bi bi-telephone me-2"></i>
              <a href="tel:+8285110736">+8285110736</a>
            </p>
            <p>
              <i className="bi bi-whatsapp me-2"></i>
              <a href="https://wa.me/8285110736" target="_blank" rel="noreferrer">
                WhatsApp Chat
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center mt-4">
          <p>© 2026 ATM Management System | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
