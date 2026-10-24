import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-layout">
        
        {/* Left Copy Section */}
        <div>
          <span className="eyebrow">Let's talk</span>
          <h2 className="section-heading">
            Your next pair <br /> starts here.
          </h2>
          <p className="section-copy">
            Questions about sizing, your order, or just want to say hello? We're listening.
          </p>
        </div>

        {/* Right Contact Card */}
        <div className="contact-card">
          <span className="contact-card-kicker">THE THARAN HELP DESK</span>

          {/* Email Line */}
          <a className="contact-line" href="mailto:hello@tharan.example">
            <span className="contact-icon">
              <Mail size={18} />
            </span>
            <span>
              <small>EMAIL US</small>
              <strong>hello@tharan.example</strong>
            </span>
            <ArrowUpRight size={18} />
          </a>

          {/* Location Line */}
          <div className="contact-line contact-location">
            <span className="contact-icon">
              <MapPin size={18} />
            </span>
            <span>
              <small>MADE FOR EVERYWHERE</small>
              <strong>Chennai, India</strong>
            </span>
          </div>

          <p className="contact-note">
            We usually get back within 1–2 working days.
          </p>
        </div>
      </div>
    </section>
  );
}
