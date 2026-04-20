import { Link } from 'react-router-dom';
import './Autom8CaseStudyPage.css';

const CHALLENGES = [
  'Patients faced fragmented journeys across provider discovery, health assessments, and appointment booking.',
  'Finding the right physician or facility often required too many steps and repeated information entry.',
  'Healthcare experiences needed stronger trust signals and clearer guidance through care decisions.',
];

const SOLUTION = [
  {
    title: 'Guided Care Navigation',
    text: 'Tap2Doc connected landing, assessment, physician discovery, and appointment actions into one coherent navigation system.',
  },
  {
    title: 'Provider And Facility Discovery',
    text: 'Search and selection flows were designed to reduce friction when matching users to the right care options.',
  },
  {
    title: 'Assessment-Led Personalization',
    text: 'Health assessment touchpoints created contextual inputs that improved downstream care recommendations.',
  },
  {
    title: 'Appointment-Centered Execution',
    text: 'Booking and consultation preparation were treated as core completion events to improve care access outcomes.',
  },
];

const OUTCOMES = [
  'Smoother patient journeys from discovery to booked appointment through connected care workflows.',
  'Higher trust and confidence via clearer provider visibility and guided decision pathways.',
  'Reduced interaction friction across core healthcare access tasks.',
  'Platform readiness for telehealth expansion, reminders, and longitudinal care coordination.',
];

const TECH_STACK = ['HealthTech UX', 'Care Journey Design', 'Provider Discovery', 'Appointment Workflows', 'Assessment Flows'];

export default function Tap2DocCaseStudyPage() {
  return (
    <div className="case-study-page">
      <section className="case-study-hero">
        <div className="case-study-hero-glow" />
        <div className="container case-study-hero-inner">
          <div className="section-label reveal">Case Study</div>
          <h1 className="case-study-title reveal">
            Tap2Doc: Frictionless <em>Digital Care Access</em>
          </h1>
          <p className="case-study-sub reveal">
            Tap2Doc is a patient access platform that streamlines healthcare discovery, health assessment,
            provider matching, and appointment workflows into a single guided experience.
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
                Build a healthcare access experience where users can move from uncertainty to booked care quickly,
                with transparent guidance at every step.
              </p>
              <p>
                The solution needed to improve completion rates without sacrificing trust or clinical clarity.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-section case-study-section--alt">
        <div className="container">
          <div className="section-label reveal">Solution</div>
          <h2 className="case-study-heading reveal">How Tap2Doc Was Structured</h2>
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
