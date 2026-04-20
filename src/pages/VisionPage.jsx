import './PageHeader.css';
import Vision from '../components/Vision';

export default function VisionPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-glow" />
        <div className="container page-header-inner">
          <div className="section-label reveal">Philosophy & Principles</div>
          <h1 className="page-header-title reveal">
            Built on <em>Conviction</em>
          </h1>
          <p className="page-header-sub reveal">
            We don't follow trends. We set standards. Every decision we make
            is guided by a relentless pursuit of quality, transparency, and
            long-term impact.
          </p>
        </div>
      </div>
      <Vision />
    </>
  );
}
