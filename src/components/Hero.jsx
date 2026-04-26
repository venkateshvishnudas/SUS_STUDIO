import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow--right" />
      <div className="hero-glow hero-glow--left" />
      <div className="hero-vline" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow reveal">
            <span className="hero-eyebrow-line" />
            <span>Elite Software Engineering</span>
          </div>

          <h1 className="hero-title reveal">
            We Engineer Digital<br />
            <em>Futures</em> for<br />
            Ambitious Brands
          </h1>

          <p className="hero-sub reveal">
            A bespoke software consultancy delivering enterprise-grade digital
            products for companies that refuse to settle for ordinary.
          </p>

          <div className="hero-ctas reveal">
            <Link to="/work" className="btn-primary">View Our Work</Link>
            <Link to="/vision" className="btn-ghost">Our Story</Link>
          </div>
        </div>

      </div>
    </section>
  );
}
