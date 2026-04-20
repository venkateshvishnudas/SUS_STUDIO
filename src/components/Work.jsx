import './Work.css';
import { Link } from 'react-router-dom';

const PROJECTS = [
  {
    num: '01',
    category: 'AI-Powered Automation Platform',
    name: 'Autom8',
    desc: 'An intelligent automation platform that eliminates repetitive work for developers, agencies, and entrepreneurs. Powered by LangGraph AI agents that reason, plan, and execute complex workflows across GitHub, Jira, Gmail, Slack, and Telegram — with a human-in-the-loop approval system that amplifies judgment without replacing it.',
    highlights: [
      'Multi-channel orchestration across 10+ integrations',
      'Reddit lead generation with AI-drafted outreach',
      'Automated email triage, code reviews, and package tracking',
    ],
    stack: ['LangGraph', 'Python', 'React', 'FastAPI', 'Redis', 'PostgreSQL', 'Telegram API'],
    caseStudyPath: '/work/autom8',
  },
  {
    num: '02',
    category: 'Fintech / Personal Expense Intelligence',
    name: 'Billz',
    desc: 'Mobile-first receipt intelligence and savings companion that helps users capture purchases, understand spending behavior, and unlock targeted offers through coupon and loyalty workflows.',
    highlights: [
      'Receipt capture and detailed transaction breakdown flows',
      'Coupon and savings discovery integrated into spending journeys',
      'Onboarding-to-profile lifecycle designed for high retention',
    ],
    stack: ['Product Design', 'Fintech UX', 'Mobile Flows', 'Offer Engine', 'Analytics'],
    caseStudyPath: '/work/billz',
  },
  {
    num: '03',
    category: 'EdTech / AI Coding Enablement',
    name: 'Codeaify',
    desc: 'A guided coding learning and practice ecosystem designed to move users from fundamentals to production confidence through structured paths, interactive exercises, and progress-based feedback loops.',
    highlights: [
      'Structured multi-screen learning progression architecture',
      'Practice-first UX to improve skill retention and completion rates',
      'Performance tracking patterns for iterative learner growth',
    ],
    stack: ['Learning Experience', 'AI Guidance', 'Product Analytics', 'Gamification', 'Mobile UI'],
    caseStudyPath: '/work/codeaify',
  },
  {
    num: '04',
    category: 'PropTech / Utility Intelligence',
    name: 'Meter',
    desc: 'A utility and meter-tracking platform that centralizes readings, usage trends, and billing context to help households and operators detect anomalies and make faster cost decisions.',
    highlights: [
      'End-to-end meter workflow design across entry, monitoring, and review',
      'Consumption visibility patterns for proactive usage optimization',
      'Decision-ready dashboards tuned for recurring operational actions',
    ],
    stack: ['Data Visualization', 'Usage Analytics', 'Workflow UX', 'Alerts', 'Mobile Product'],
    caseStudyPath: '/work/meter',
  },
  {
    num: '05',
    category: 'HealthTech / Patient Access Automation',
    name: 'Tap2Doc',
    desc: 'A digital care access platform that connects patients to providers, appointments, facilities, and assessment flows in one guided experience, reducing friction from discovery to consultation.',
    highlights: [
      'Physician and facility discovery with guided health assessments',
      'Appointment-centric journey design for improved booking completion',
      'Trust-building provider profiles and care navigation flows',
    ],
    stack: ['Healthcare UX', 'Care Navigation', 'Scheduling Flows', 'Patient Journey', 'Mobile Design'],
    caseStudyPath: '/work/tap2doc',
  },
];

function ProjectCard({ project, className }) {
  return (
    <div className={`work-card reveal${className ? ` ${className}` : ''}`}>
      <span className="work-card-num">{project.num}</span>
      <div className="work-card-body">
        <span className="work-card-cat">{project.category}</span>
        <h3 className="work-card-name">{project.name}</h3>
        <p className="work-card-desc">{project.desc}</p>
        {project.highlights && (
          <div className="work-card-highlights">
            {project.highlights.map((h, i) => (
              <div className="work-card-highlight" key={i}>
                <span className="work-card-highlight-icon">{'\u2726'}</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
        <div className="work-card-stack">
          {project.stack.map((t) => (
            <span key={t} className="work-pill">{t}</span>
          ))}
        </div>
        {project.caseStudyPath && (
          <Link to={project.caseStudyPath} className="work-card-link">View Case Study {'\u2192'}</Link>
        )}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-label reveal">Selected Work</div>
        <h2 className="work-heading reveal">
          Projects That Define<br />
          Industry Standards
        </h2>

        <div className="work-grid">
          {/* Project 1 (Autom8): Full width flagship */}
          <ProjectCard project={PROJECTS[0]} className="work-card--full" />

          {/* Projects 2-3: Side by side */}
          <div className="work-row work-row--half">
            {PROJECTS.slice(1, 3).map((p) => (
              <ProjectCard key={p.num} project={p} />
            ))}
          </div>

          {/* Projects 4-5: 60/40 split */}
          <div className="work-row work-row--split">
            {PROJECTS.slice(3, 5).map((p, i) => (
              <ProjectCard
                key={p.num}
                project={p}
                className={i === 0 ? 'work-card--wide' : 'work-card--narrow'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
