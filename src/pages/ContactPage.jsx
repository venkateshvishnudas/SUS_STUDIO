import './PageHeader.css';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <div className="page-header page-header--compact">
        <div className="page-header-glow" />
        <div className="container page-header-inner">
          <div className="section-label reveal">Get In Touch</div>
          <h1 className="page-header-title reveal">
            Contact <em>Us</em>
          </h1>
          <p className="page-header-sub reveal">
            Ready to build something remarkable? Let's start the conversation.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
}
