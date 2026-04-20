import './Services.css';

const SERVICES = [
  { num: '01', icon: '\u25C8', name: 'Full-Stack Web Development', desc: 'End-to-end web applications built with modern frameworks, scalable architectures, and pixel-perfect interfaces that perform at enterprise scale.' },
  { num: '02', icon: '\u25C7', name: 'Mobile & Cross-Platform Apps', desc: 'Native and cross-platform mobile experiences crafted for iOS and Android, delivering seamless performance and elegant interaction design.' },
  { num: '03', icon: '\u2B21', name: 'Cloud Infrastructure & DevOps', desc: 'Production-grade cloud architectures on AWS, GCP, and Azure with CI/CD pipelines, auto-scaling, and infrastructure as code.' },
  { num: '04', icon: '\u25B3', name: 'AI / ML Integration', desc: 'Intelligent systems powered by machine learning — from predictive analytics and NLP to computer vision and recommendation engines.' },
  { num: '05', icon: '\u25CB', name: 'API Design & Systems Integration', desc: 'Robust API architectures and third-party integrations that connect disparate systems into unified, high-performance ecosystems.' },
  { num: '06', icon: '\u2726', name: 'Product Strategy & UX Architecture', desc: 'Strategic product thinking and information architecture that transforms complex requirements into intuitive user experiences.' },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-label reveal">What We Build</div>
        <h2 className="services-heading reveal">
          Engineering Services<br />
          At Enterprise Scale
        </h2>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card reveal" key={s.num}>
              <span className="service-num">{s.num}</span>
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-hover-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
