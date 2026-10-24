import { useState } from 'react';
import { Menu, X, ShoppingBag, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const links = [
  { label: 'HOME', href: '#home' },
  { label: 'SNEAKERS', href: '#sneakers' },
  { label: 'OUR STORY', href: '#story' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      {/* Brand Logo */}
      <a className="brand-mark" href="#home" onClick={close}>
        THARAN<span>®</span>
      </a>

      {/* Navigation Links */}
      <nav
        className={open ? 'nav-links nav-open' : 'nav-links'}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div className="nav-actions">
        {/* Cart */}
        <a
          className="cart-link"
          href="#sneakers"
          aria-label={`Shopping bag, ${cartCount} items`}
        >
          <ShoppingBag size={17} />
          <span>{cartCount}</span>
        </a>

        {/* CTA */}
        <a className="nav-cta" href="#sneakers">
          Shop now <ArrowUpRight size={15} />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
