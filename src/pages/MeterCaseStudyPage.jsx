import { Link } from 'react-router-dom';
import './Autom8CaseStudyPage.css';

const CHALLENGES = [
  'Utility tracking data was difficult to interpret and often surfaced too late for meaningful action.',
  'Users needed clearer visibility into usage patterns, billing implications, and potential anomalies.',
  'Operational decisions were slowed by fragmented interfaces and inconsistent information architecture.',
];

const SOLUTION = [
  {
    title: 'Unified Meter Workflow',
    text: 'Meter consolidated reading capture, usage monitoring, and billing context into a single coherent user journey.',
  },
  {
    title: 'Insight-Led Visualization',
    text: 'Interfaces were designed to surface trend direction and abnormal behavior quickly, reducing interpretation friction.',
  },
  {
    title: 'Action-Oriented Information Design',
    text: 'Each screen emphasized operational next steps, helping users move from observation to decision without delay.',
  },
  {
    title: 'Scalable Monitoring Foundation',
    text: 'The product structure supports extension into alerts, benchmarking, and broader utility management modules.',
  },
];

const OUTCOMES = [
  'Improved visibility into utility behavior through structured, easy-to-scan tracking flows.',
  'Faster anomaly recognition and better decision timing for cost and usage optimization.',
  'Stronger product readiness for advanced analytics and automated alerting in future phases.',
  'A repeatable UX model for data-heavy operational products.',
];

const TECH_STACK = ['Usage Analytics', 'Operational Dashboards', 'Data UX', 'Monitoring Workflows', 'Anomaly Signals'];

export default function MeterCaseStudyPage() {
  return (
    <div className="case-study-page">
      <section className="case-study-hero">
        <div className="case-study-hero-glow" />
        <div className="container case-study-hero-inner">
          <div className="section-label reveal">Case Study</div>
          <h1 className="case-study-title reveal">
            Meter: Utility Data Into <em>Actionable Decisions</em>
          </h1>
          <p className="case-study-sub reveal">
            Meter transforms meter and consumption information into decision-grade intelligence,
            helping users monitor usage, understand billing impact, and respond early to anomalies.
          </p>
          <div className="case-study-hero-actions reveal">
            <Link to="/work" className="btn-ghost">Back to Work</Link>
            <Link to="/contact" className="btn-primary">Build Similar Product</Link>
          </div>
        </div>
      </section>

      <section className="case-study-section">
        <div className="container">
          <div className="case-study-grid two-col">
            <article className="case-study-card reveal">
              <h2>The Challenge</h2>
              <ul>
                {CHALLENGES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="case-study-card reveal">
              <h2>Objective</h2>
              <p>
                Design an end-to-end utility intelligence product that makes complex consumption data easy to understand,
                easy to trust, and easy to act on.
              </p>
              <p>
                The platform had to support both recurring monitoring and rapid response decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-section case-study-section--alt">
        <div className="container">
          <div className="section-label reveal">Solution</div>
          <h2 className="case-study-heading reveal">How Meter Was Structured</h2>
          <div className="case-study-grid pillars-grid">
            {SOLUTION.map((pillar) => (
              <article className="case-study-card reveal" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study-section">
        <div className="container">
          <div className="case-study-grid two-col">
            <article className="case-study-card reveal">
              <h2>Impact</h2>
              <ul>
                {OUTCOMES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="case-study-card reveal">
              <h2>Capabilities</h2>
              <div className="case-study-stack">
                {TECH_STACK.map((item) => (
                  <span className="work-pill" key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
