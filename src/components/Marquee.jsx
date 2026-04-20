import './Marquee.css';

const ITEMS = [
  'Full-Stack Engineering',
  'Cloud Architecture',
  'AI Integration',
  'Mobile Development',
  'API Design',
  'DevOps',
  'UI/UX Systems',
  'SaaS Platforms',
  'Digital Transformation',
  'Product Strategy',
];

export default function Marquee() {
  const track = ITEMS.map((item, i) => (
    <span key={i} className="marquee-item">
      <span className="marquee-dot">{'\u2726'}</span>
      {item}
    </span>
  ));

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {track}
        {track}
      </div>
    </div>
  );
}
