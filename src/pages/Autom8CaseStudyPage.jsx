import { Link } from 'react-router-dom';
import './Autom8CaseStudyPage.css';

const CHALLENGES = [
  'Teams needed one governed AI layer to automate workflows across GitHub, Jira, Slack, Gmail, and internal tooling.',
  'Automation efforts were fragmented into scripts and bots, with no shared state, retry model, or orchestration graph.',
  'Leaders required policy controls, auditability, and human approvals before high-impact actions could execute.',
];

const SOLUTION_PILLARS = [
  {
    title: 'State-Driven Orchestration',
    text: 'Autom8 uses LangGraph with a shared automation state that tracks intent, context, execution results, and approvals across each workflow node.',
  },
  {
    title: 'Specialized Multi-Agent Flow',
    text: 'Chat, Planner, Executor, Reviewer, Security, Approval, and Git agents each perform focused responsibilities to keep decisions traceable and modular.',
  },
  {
    title: 'Governed Autonomy',
    text: 'High-impact actions route through an approval gate, enabling human-in-the-loop control while preserving automation speed for low-risk tasks.',
  },
  {
    title: 'Embedded DevSecOps',
    text: 'Bandit, Semgrep, and Safety are integrated directly into execution pipelines so security posture improves continuously instead of after release.',
  },
];

const OUTCOMES = [
  'Automated multi-step workflows from natural-language intent to execution across code, communication, and operations systems.',
  'Faster pull request cycles through automated analysis, fix suggestions, and guided commit workflows.',
  'Reduced operational risk with policy checkpoints and explicit approvals for sensitive changes.',
  'Improved transparency with stateful execution trails across planning, execution, and remediation steps.',
  'Enterprise readiness through secure secrets handling, tenancy isolation, and extensible capability registries.',
];

const TECH_STACK = [
  'LangGraph',
  'FastAPI',
  'Python',
  'React',
  'Redis',
  'PostgreSQL',
  'Playwright',
  'GitHub API',
  'Bandit',
  'Semgrep',
  'Safety',
];

export default function Autom8CaseStudyPage() {
  return (
    <div className="case-study-page">
      <section className="case-study-hero">
        <div className="case-study-hero-glow" />
        <div className="container case-study-hero-inner">
          <div className="section-label reveal">Case Study</div>
          <h1 className="case-study-title reveal">
            Autom8: AI-Governed <em>Workflow Automation Agent</em> Platform
          </h1>
          <p className="case-study-sub reveal">
            Autom8 is a stateful multi-agent orchestration platform that automates engineering and business workflows with enterprise governance.
            It enables intelligent planning, execution, security checks, and integrations while keeping every action controlled, transparent, and auditable.
          </p>
          <div className="case-study-hero-actions reveal">
            <Link to="/work" className="btn-ghost">Back to Work</Link>
            <Link to="/contact" className="btn-primary">Discuss a Similar Build</Link>
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
                Build a production-ready workflow automation agent that can reason over intent,
                orchestrate multi-system actions, run security checks, automate Git operations, and coordinate approvals.
              </p>
              <p>
                Pull request automation was a key use case, but the core mandate was broader:
                create a reusable automation fabric for software delivery and operational workflows.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-section case-study-section--alt">
        <div className="container">
          <div className="section-label reveal">Architecture</div>
          <h2 className="case-study-heading reveal">How Autom8 Works</h2>

          <div className="architecture-flow reveal">
            <div className="architecture-node">User Intent</div>
            <div className="architecture-arrow">→</div>
            <div className="architecture-node">LangGraph State</div>
            <div className="architecture-arrow">→</div>
            <div className="architecture-node">Planner + Executor</div>
            <div className="architecture-arrow">→</div>
            <div className="architecture-node">Actions + Security</div>
            <div className="architecture-arrow">→</div>
            <div className="architecture-node">Approval + Integrations</div>
          </div>

          <div className="case-study-grid pillars-grid">
            {SOLUTION_PILLARS.map((pillar) => (
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
              <h2>Technology Stack</h2>
              <div className="case-study-stack">
                {TECH_STACK.map((item) => (
                  <span className="work-pill" key={item}>{item}</span>
                ))}
              </div>
              <p className="case-study-note">
                Flexible model support includes Gemini, OpenAI, and Anthropic providers,
                selected via configuration or API based on workflow needs.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-section case-study-closing">
        <div className="container reveal">
          <h2>
            Bottom Line: <em>Autom8</em> Proves AI Automation Can Be Fast, Safe, and Governed.
          </h2>
          <p>
            By combining stateful multi-agent orchestration with approval gates and integrated security,
            Autom8 transforms fragmented workflows into a reliable and scalable operating model.
            The platform delivers governed automation across pull requests, security, communications, and execution pipelines.
          </p>
        </div>
      </section>
    </div>
  );
}
