import { Link } from 'react-router-dom';
import './Autom8CaseStudyPage.css';

const CHALLENGES = [
  'Learners struggled to move from passive tutorial consumption to consistent coding practice.',
  'Most learning journeys lacked a clear progression model that connected fundamentals to real application.',
  'Retention dropped when feedback loops and motivation systems were not tightly integrated.',
];

const SOLUTION = [
  {
    title: 'Progression-Centered Learning Design',
    text: 'Codeaify was structured as a guided sequence of learning states so users always know what to do next and why it matters.',
  },
  {
    title: 'Practice-First Experience',
    text: 'The core product flow prioritized doing over watching by emphasizing interactive coding and iterative improvement.',
  },
  {
    title: 'Feedback And Momentum Loops',
    text: 'Progress indicators, performance checkpoints, and reinforcement patterns were embedded to sustain learner motivation.',
  },
  {
    title: 'Scalable Product Framework',
    text: 'The screen system was designed to support future expansion into tracks, assessments, and AI-supported coding guidance.',
  },
];

const OUTCOMES = [
  'More coherent learner journeys through structured progression and consistent interaction patterns.',
  'Higher potential completion rates via motivation-aware UX and regular feedback cues.',
  'A product architecture suited for scaling into broader technical learning pathways.',
  'Foundation established for personalized learning trajectories and skill diagnostics.',
];

const TECH_STACK = ['EdTech Product Design', 'Learning Analytics', 'Progression Systems', 'Practice UX', 'AI Tutoring Ready'];

export default function CodeaifyCaseStudyPage() {
  return (
    <div className="case-study-page">
      <section className="case-study-hero">
        <div className="case-study-hero-glow" />
        <div className="container case-study-hero-inner">
          <div className="section-label reveal">Case Study</div>
          <h1 className="case-study-title reveal">
            Codeaify: Structured Paths For <em>Real Coding Confidence</em>
          </h1>
          <p className="case-study-sub reveal">
            Codeaify is a learning product focused on transforming coding education from fragmented lessons into guided,
            practice-driven progression with measurable growth.
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
                Build an experience that helps learners move from beginner uncertainty to practical coding confidence through
                clear progression design and repeatable practice loops.
              </p>
              <p>
                The product needed to stay simple for early users while remaining extensible for advanced pathways.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-section case-study-section--alt">
        <div className="container">
          <div className="section-label reveal">Solution</div>
          <h2 className="case-study-heading reveal">How Codeaify Was Structured</h2>
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
