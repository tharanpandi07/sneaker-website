
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import "./OurCompany.css";

const values = [
  { number: "01", title: "MOVE YOUR WAY", text: "Your style. Your pace. Your rules." },
  { number: "02", title: "BUILT FOR DAILY", text: "Comfort that keeps up with your everyday." },
  { number: "03", title: "STAND APART", text: "Made for people who never follow the crowd." },
];

export default function OurCompany() {
  return (
    <section className="company-section" id="story">
      <div className="company-topline">
        <span>THARAN ORIGINALS®</span>
        <span>INDEPENDENT SNEAKER CULTURE — EST. 2025</span>
      </div>

      <div className="company-hero">
        <div className="company-heading">
          <span className="company-eyebrow">
            <span className="company-dot" />
            NOT JUST ANOTHER SNEAKER BRAND
          </span>

          <h2>
            MADE TO
            <br />
            <span>MOVE.</span>
            <br />
            NEVER
            <br />
            <span className="company-outline">FOLLOW.</span>
          </h2>

          <p className="company-intro">
            We believe your shoes should say something before you do.
            THARAN is for the everyday movers, the rule breakers,
            and everyone finding their own way forward.
          </p>

          <a href="#sneakers" className="company-link">
            DISCOVER OUR COLLECTION
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="company-art">
          <div className="company-art-label">THE EVERYDAY / 001</div>

          <div className="company-image">
            <img
              src="/sneaker-1.png"
              alt="THARAN premium sneaker campaign"
            />
            <span className="company-image-number">T—01</span>
          </div>

          <div className="company-stamp">
            <span>NO</span>
            <span>OFF</span>
            <span>DAYS.</span>
          </div>

          <div className="company-art-caption">
            <span>DESIGNED FOR YOUR EVERYDAY.</span>
            <ArrowDownRight size={18} />
          </div>
        </div>
      </div>

      <div className="company-marquee" aria-label="Move different, every day">
        <div className="company-marquee-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index}>
              MOVE DIFFERENT <i>|</i> OWN YOUR PACE <i>|</i>
            </span>
          ))}
        </div>
      </div>

      <div className="company-values">
        <div className="company-values-heading">
          <span>OUR MINDSET / 003</span>
          <h3>
            THIS IS
            <br />
            <span>WHO WE ARE.</span>
          </h3>
        </div>

        <div className="company-values-list">
          {values.map((value) => (
            <article className="company-value" key={value.number}>
              <span className="company-value-number">{value.number}</span>
              <div>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
              <ArrowUpRight className="company-value-arrow" size={21} />
            </article>
          ))}
        </div>
      </div>

      <div className="company-footer-line">
        <span>THARAN® — ORIGINALS</span>
        <span>GOOD SHOES. GOOD MOVES.</span>
      </div>
    </section>
  );
}
