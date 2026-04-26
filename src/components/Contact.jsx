import { useState } from 'react';
import './Contact.css';

const INFO = [
  { icon: '\u2726', label: 'contactus.suss@gmail.com' },
  { icon: '\u2726', label: 'Response within 24 hours' },
];

const PROJECT_TYPES = [
  'Select project type',
  'Web Application',
  'Mobile Application',
  'AI / ML Solution',
  'Cloud Infrastructure',
  'E-Commerce Platform',
  'Enterprise Integration',
  'Other',
];

const BUDGETS = [
  'Select budget range',
  '< ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,50,000',
  '₹2,50,000 - ₹5,00,000',
  '₹5,00,000+',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '', company: '', email: '',
    projectType: '', budget: '', message: '',
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setSending(true);
    setError('');

    try {
      const res = await fetch('https://formsubmit.co/ajax/contactus.suss@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Name: form.name,
          Company: form.company,
          Email: form.email,
          'Project Type': form.projectType,
          'Budget Range': form.budget,
          Message: form.message,
          _subject: `New inquiry from ${form.name} — Sus Studio`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Network error. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-glow" />
      <div className="container contact-container">
        {/* Left */}
        <div className="contact-info">
          <div className="section-label reveal">Start a Project</div>
          <h2 className="contact-heading reveal">
            Let's Build Something<br />
            <em>Remarkable</em>
          </h2>
          <p className="contact-sub reveal">
            We partner with ambitious companies to build software that defines
            their industry. Every engagement begins with a discovery session to
            align on vision, scope, and success metrics.
          </p>
          <div className="contact-details">
            {INFO.map((item, i) => (
              <div className="contact-detail reveal" key={i}>
                <span className="contact-detail-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="contact-form-wrap reveal">
          {submitted ? (
            <div className="contact-success">
              <span className="contact-success-icon">{'\u2726'}</span>
              <p>Message received. We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <div className="contact-form">
              <div className="contact-row">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="contact-input"
                  value={form.name}
                  onChange={handleChange('name')}
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="contact-input"
                  value={form.company}
                  onChange={handleChange('company')}
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="contact-input"
                value={form.email}
                onChange={handleChange('email')}
              />
              <div className="contact-row">
                <select
                  className="contact-input contact-select"
                  value={form.projectType}
                  onChange={handleChange('projectType')}
                >
                  {PROJECT_TYPES.map((t, i) => (
                    <option key={i} value={i === 0 ? '' : t} disabled={i === 0}>
                      {t}
                    </option>
                  ))}
                </select>
                <select
                  className="contact-input contact-select"
                  value={form.budget}
                  onChange={handleChange('budget')}
                >
                  {BUDGETS.map((b, i) => (
                    <option key={i} value={i === 0 ? '' : b} disabled={i === 0}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Tell us about your project..."
                className="contact-input contact-textarea"
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
              />
              {error && <p className="contact-error">{error}</p>}
              <button
                className="contact-submit"
                onClick={handleSubmit}
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
