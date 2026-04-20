import './PageHeader.css';
import Work from '../components/Work';

export default function WorkPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-glow" />
        <div className="container page-header-inner">
          <div className="section-label reveal">Portfolio</div>
          <h1 className="page-header-title reveal">
            Selected <em>Work</em>
          </h1>
          <p className="page-header-sub reveal">
            A curated selection of projects that define industry standards.
            Each engagement represents our commitment to excellence.
          </p>
        </div>
      </div>
      <Work />
    </>
  );
}
