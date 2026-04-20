import { Link } from 'react-router-dom';
import './Vision.css';

const COMMITMENTS = [
  'Senior engineers on every project, no juniors',
  'Outcome-based delivery, not hourly billing',
  'Post-launch performance SLA guarantee',
  'Full IP transfer on project completion',
];

const PRINCIPLES = [
  {
    num: '01',
    icon: '\u25C8',
    title: 'Craftsmanship Over Speed',
    desc: 'We don\'t ship fast and break things. We architect deliberately, build precisely, and deliver systems that stand the test of scale.',
  },
  {
    num: '02',
    icon: '\u25C7',
    title: 'Partnership, Not Transactions',
    desc: 'Every engagement is a long-term investment. We embed with your team, learn your domain, and operate as an extension of your leadership.',
  },
  {
    num: '03',
    icon: '\u2B21',
    title: 'Transparency at Every Layer',
    desc: 'No black boxes. You get full visibility into architecture decisions, sprint progress, codebase health, and deployment pipelines.',
  },
];

const METRICS = [
  { value: '96%', label: 'Client Retention' },
  { value: '4.2x', label: 'Avg. ROI Delivered' },
  { value: '99.9%', label: 'Uptime SLA Record' },
  { value: '< 24h', label: 'Avg. Response Time' },
];

export default function Vision() {
  return (
    <section id="vision">
      {/* Philosophy block */}
      <div className="container vision-container">
        <div className="vision-emblem reveal">
          <div className="vision-frame">
            <div className="vision-frame-glow" />
            <div className="vision-frame-lines">
              <span /><span /><span /><span />
            </div>
            <span className="vision-initials">SS</span>
          </div>
          <span className="vision-est">Est. 2014</span>
        </div>

        <div className="vision-text">
          <div className="section-label reveal">Our Vision</div>
          <h2 className="vision-heading reveal">
            We Don't Build Websites.<br />
            We Build <em>Legacies</em>.
          </h2>

          <p className="vision-para reveal">
            Every line of code we write is an investment in our client's future.
            We approach software as master craftsmen approach their trade — with
            obsessive attention to detail, an uncompromising standard of quality,
            and the patience to build things that endure.
          </p>
          <p className="vision-para reveal">
            In an industry saturated with shortcuts, we choose precision. Our
            clients don't come to us for the fastest delivery — they come to us
            because they understand that exceptional software is the foundation
            of exceptional businesses.
          </p>

          <div className="vision-commitments">
            {COMMITMENTS.map((f, i) => (
              <div className="vision-commitment reveal" key={i}>
                <span className="vision-commitment-icon">{'\u2726'}</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics band */}
      <div className="vision-metrics">
        <div className="container">
          <div className="vision-metrics-grid">
            {METRICS.map((m, i) => (
              <div className="vision-metric reveal" key={i}>
                <span className="vision-metric-value">{m.value}</span>
                <span className="vision-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="vision-principles">
        <div className="container">
          <div className="section-label reveal">How We Operate</div>
          <h2 className="vision-principles-heading reveal">
            Principles That Guide<br />
            Every <em>Decision</em>
          </h2>

          <div className="vision-principles-grid">
            {PRINCIPLES.map((p) => (
              <div className="vision-principle-card reveal" key={p.num}>
                <div className="vision-principle-top">
                  <span className="vision-principle-icon">{p.icon}</span>
                  <span className="vision-principle-num">{p.num}</span>
                </div>
                <h3 className="vision-principle-title">{p.title}</h3>
                <p className="vision-principle-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="vision-cta">
        <div className="vision-cta-glow" />
        <div className="container vision-cta-inner reveal">
          <span className="vision-cta-symbol">{'\u25C6'}</span>
          <h2>
            Ready to Build With a Team<br />
            That <em>Delivers</em>?
          </h2>
          <p className="vision-cta-sub">
            We take on a limited number of engagements each quarter to ensure
            every client receives the focus they deserve.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
