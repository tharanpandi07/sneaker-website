import { MoveUpRight, Zap, Heart, Layers3 } from 'lucide-react';
import './OurCompany.css';

const values = [
  {
    icon: Zap,
    title: 'Made to move',
    text: 'Lightweight comfort that keeps up with real life.',
  },
  {
    icon: Heart,
    title: 'Built with intention',
    text: 'Thoughtful details. No unnecessary noise.',
  },
  {
    icon: Layers3,
    title: 'Your kind of different',
    text: 'Every pair has personality. So do you.',
  },
];

export default function OurCompany() {
  return (
    <section className="story-section" id="story">
      <div className="section-wrap story-layout">
        {/* Left Art Section */}
        <div className="story-art">
          <div className="story-circle circle-large" />
          <div className="story-circle circle-small" />
          <span className="story-stamp">
            THARAN <br /> ORIGINALS
          </span>

          <div className="story-art-copy">
            <span>LESS ORDINARY</span>
            <strong>MORE YOU.</strong>
          </div>

          <span className="story-side-note">DESIGNED FOR YOUR EVERYDAY</span>
        </div>

        {/* Right Content Section */}
        <div className="story-content">
          <span className="eyebrow">Our company</span>
          <h2 className="section-heading">
            A little less <br /> ordinary.
          </h2>
          <p className="story-lead">
            We believe your shoes should do more than get you there. They should
            make the journey feel like yours.
          </p>
          <p className="section-copy">
            THARAN started with a simple idea: premium-feeling sneakers
            shouldn't need a loud logo or a loud price. Just honest design,
            comfort you notice, and style that fits your own rhythm.
          </p>
          <a className="story-link" href="#contact">
            Get to know us <MoveUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Values Grid */}
      <div className="section-wrap value-grid">
        {values.map((value, i) => (
          <article className="value-card" key={value.title}>
            <div className="value-top">
              <span>0{i + 1}</span>
              <value.icon size={21} strokeWidth={1.5} />
            </div>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
