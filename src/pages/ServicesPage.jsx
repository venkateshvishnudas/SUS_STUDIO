import './PageHeader.css';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-glow" />
        <div className="container page-header-inner">
          <div className="section-label reveal">Capabilities</div>
          <h1 className="page-header-title reveal">
            Our <em>Services</em>
          </h1>
          <p className="page-header-sub reveal">
            End-to-end engineering capabilities designed
            to transform ambitious visions into production-grade reality.
          </p>
        </div>
      </div>
      <Services />
    </>
  );
}
