import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import './HomePage.css';

const HIGHLIGHTS = [
  {
    num: '01',
    icon: '\u25C8',
    title: 'Engineering Excellence',
    desc: 'Enterprise-grade software built by senior engineers with obsessive attention to detail.',
  },
  {
    num: '02',
    icon: '\u25C7',
    title: 'Strategic Partnership',
    desc: 'We embed with your team to deliver outcomes, not just outputs. Long-term thinking, always.',
  },
  {
    num: '03',
    icon: '\u2B21',
    title: 'Proven Track Record',
    desc: '127+ projects shipped across fintech, healthcare, logistics, and enterprise SaaS.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      <section className="home-highlights">
        <div className="container">
          <div className="section-label reveal">Why Sus Studio</div>
          <h2 className="home-highlights-heading reveal">
            Where Vision Meets<br />
            <em>Precision</em>
          </h2>

          <div className="home-highlights-grid">
            {HIGHLIGHTS.map((h) => (
              <div className="home-highlight-card reveal" key={h.num}>
                <span className="home-highlight-num">{h.num}</span>
                <span className="home-highlight-icon">{h.icon}</span>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta-band">
        <div className="home-cta-glow" />
        <div className="container home-cta-inner reveal">
          <h2>
            Ready to Build Something<br />
            <em>Extraordinary</em>?
          </h2>
          <div className="home-cta-buttons">
            <Link to="/work" className="btn-primary">View Our Work</Link>
            <Link to="/contact" className="btn-ghost">Start a Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
