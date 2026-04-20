import './Work.css';

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
  },
  {
    num: '02',
    category: 'SaaS Platform',
    name: 'Meridian Financial Suite',
    desc: 'Enterprise-grade dashboard and analytics platform for a Series C fintech, processing $2.4B in annual transactions.',
    highlights: null,
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'D3.js'],
  },
  {
    num: '03',
    category: 'AI / Machine Learning',
    name: 'NovaTrak Logistics Engine',
    desc: 'AI-powered route optimization and predictive demand platform reducing logistics costs by 34%.',
    highlights: null,
    stack: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'GCP'],
  },
  {
    num: '04',
    category: 'E-Commerce & ERP',
    name: 'Veridian Commerce Hub',
    desc: 'B2B e-commerce platform with real-time ERP integration serving 12,000+ SKUs across three continents.',
    highlights: null,
    stack: ['Next.js', 'TypeScript', 'SAP', 'Stripe', 'Elasticsearch'],
  },
  {
    num: '05',
    category: 'Data Infrastructure',
    name: 'PulseStream Analytics',
    desc: 'Real-time analytics engine ingesting 2M+ events/sec with sub-second query latency for enterprise clients.',
    highlights: null,
    stack: ['Kafka', 'ClickHouse', 'Rust', 'Kubernetes', 'Grafana'],
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
        <a href="#" className="work-card-link">View Case Study {'\u2192'}</a>
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
