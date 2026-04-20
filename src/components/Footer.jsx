import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="footer-logo">
          SUS<span>Studio</span>
        </Link>

        <span className="footer-copy">
          {'\u00A9'} {new Date().getFullYear()} Sus Studio. All rights reserved.
        </span>

        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
