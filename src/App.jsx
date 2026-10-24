import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import OurCompany from './components/OurCompany.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './styles/app.css';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  return <div className="app-shell">
    <Navbar cartCount={cartCount} />
    <main>
      <Hero />
      <Products onAddToCart={() => setCartCount((count) => count + 1)} />
      <OurCompany />
      <Contact />
    </main>
    <Footer />
  </div>;
}