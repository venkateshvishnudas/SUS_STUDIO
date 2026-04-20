import { Link } from 'react-router-dom';
import './Autom8CaseStudyPage.css';

const CHALLENGES = [
  'Personal spending behavior was fragmented across receipts, bank alerts, and disconnected offer channels.',
  'Users lacked a simple way to convert purchase history into actionable savings opportunities.',
  'Traditional finance apps over-indexed on charts but underperformed on day-to-day habit formation.',
];

const SOLUTION = [
  {
    title: 'Receipt-First Product Strategy',
    text: 'Billz was designed around receipt capture and structured purchase detail so each transaction becomes usable financial context.',
  },
  {
    title: 'Savings Layer Embedded In Flow',
    text: 'Coupon and offer discovery were integrated into the same journey as spend tracking, removing context switching for users.',
  },
  {
    title: 'Lifecycle UX For Retention',
    text: 'Onboarding, home, detail views, and profile management were built as a cohesive lifecycle system to improve repeat engagement.',
  },
  {
    title: 'Decision-Ready Spend Views',
    text: 'Detailed receipt screens were optimized for quick interpretation, helping users make practical budget and spending decisions.',
  },
];

const OUTCOMES = [
  'Clear user journey from onboarding to recurring usage through intuitive spend and savings workflows.',
  'Higher potential retention through integrated coupon discovery within financial tracking behavior.',
  'Stronger personal finance clarity via detailed transaction-level information architecture.',
  'Product foundation ready for loyalty extensions, categorization intelligence, and personalization.',
];

const TECH_STACK = ['Fintech UX', 'Mobile Product Design', 'Offer Personalization', 'Behavior Analytics', 'Lifecycle Architecture'];

export default function BillzCaseStudyPage() {
  return (
    <div className="case-study-page">
      <section className="case-study-hero">
        <div className="case-study-hero-glow" />
        <div className="container case-study-hero-inner">
          <div className="section-label reveal">Case Study</div>
          <h1 className="case-study-title reveal">
            Billz: Receipt Intelligence Meets <em>Everyday Savings</em>
          </h1>
          <p className="case-study-sub reveal">
            Billz is a personal finance experience focused on turning transaction history into practical action.
            It combines receipt intelligence, detailed spend visibility, and coupon discovery to make better money decisions effortless.
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
                Design a finance product that does more than reporting. The goal was to guide users from expense awareness to
                immediate savings action through a single integrated journey.
              </p>
              <p>
                The product had to balance clarity, trust, and habit-forming utility for long-term adoption.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-section case-study-section--alt">
        <div className="container">
          <div className="section-label reveal">Solution</div>
          <h2 className="case-study-heading reveal">How Billz Was Structured</h2>
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
