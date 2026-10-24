import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    name: 'VOLT RUNNER',
    tag: '01 / EVERYDAY ICON',
    color: 'Volt Orange',
    price: '₹5,499',
    image: 'sneaker-1.png',
    className: 'orange-shoe',
  },
  {
    name: 'CLOUD FORM',
    tag: '02 / BUILT FOR COMFORT',
    color: 'Cloud White',
    price: '₹6,299',
    image: 'sneaker-2.png',
    className: 'white-shoe',
  },
  {
    name: 'NIGHT SHIFT',
    tag: '03 / AFTER DARK',
    color: 'Midnight Black',
    price: '₹5,999',
    image: 'sneaker-3.png',
    className: 'dark-shoe',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const shoe = slides[active];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Manual change
  const change = (next) => {
    setDirection(next > active ? 1 : -1);
    setActive((next + slides.length) % slides.length);
  };

  return (
    <section className="hero-section" id="home">
      {/* Background Grid */}
      <div className="hero-grid-lines" />

      {/* Copy Section */}
      <div className="hero-copy">
        <span className="eyebrow">
          Independent sneaker culture · Est. 2025
        </span>
        <h1>
          MOVE <br />
          <span>DIFFERENT</span>
        </h1>
        <p className="hero-description">
          Not made to fit in. Made to move you forward. Meet your next everyday favourite.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a className="pill-button" href="#sneakers">
            Explore collection <ArrowRight size={17} />
          </a>
          <a className="hero-secondary" href="#story">
            Our philosophy <ArrowDownRight size={17} />
          </a>
        </div>

        {/* Social Proof */}
        <div className="hero-social-proof">
          <div className="proof-avatars">
            <span>T</span>
            <span>R</span>
            <span>A</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <small>Made for the everyday movers</small>
          </div>
        </div>
      </div>

      {/* Visual Section */}
      <div className="hero-visual">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <span className="hero-vertical-label">DESIGNED TO GO FURTHER</span>

        {/* Shoe Frame */}
        <div className={`hero-shoe-frame ${shoe.className}`} key={shoe.name}>
          <img
            src={shoe.image}
            alt={`${shoe.name} premium sneaker`}
            onError={(e) => {
              e.currentTarget.style.opacity = '0.15';
            }}
          />
          <div className="image-grain" />
        </div>

        {/* Product Label */}
        <div className="hero-product-label">
          <div>
            <span>{shoe.tag}</span>
            <h2>{shoe.name}</h2>
            <p>{shoe.color}</p>
          </div>
          <strong>{shoe.price}</strong>
        </div>

        {/* Slide Controls */}
        <div className="hero-slide-controls">
          <span className="slide-count">
            0{active + 1}
            <i>/</i>0{slides.length}
          </span>
          <div className="slide-dots">
            {slides.map((s, i) => (
              <button
                key={s.name}
                className={active === i ? 'active' : ''}
                onClick={() => change(i)}
                aria-label={`Show ${s.name}`}
              />
            ))}
          </div>
          <button
            className="slide-next"
            onClick={() => change(active + 1)}
            aria-label="Next sneaker"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="hero-bottom-note">
        <span>THARAN ORIGINALS</span>
        <span>GOOD SHOES. GOOD MOVES.</span>
        <a href="#sneakers">SCROLL TO EXPLORE ↓</a>
      </div>
    </section>
  );
}
