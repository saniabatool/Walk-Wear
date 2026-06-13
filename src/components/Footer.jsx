import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-newsletter">
          <h3>NEWSLETTER SIGN UP</h3>

          <p>
            Sign up for 10% off your first order when
            you sign up for emails and updates on new collections.
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Email"
            />
            <button>→</button>
          </div>
        </div>

        <div className="footer-links">
          <h4>Information</h4>

          <a href="#">About Us</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-links">
          <h4>Customer Service</h4>

          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Track Order</a>
          <a href="#">Size Guide</a>
        </div>

        <div className="footer-contact">
          <h4>Address: Karachi, Pakistan</h4>
          <p>Contact: +92 123 13444</p>
          <p>Email: support@walknwear.com</p>

          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>🎵</span>
            <span>✖</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Shoe • Privacy Policy
      </div>

    </footer>
  );
}

export default Footer;