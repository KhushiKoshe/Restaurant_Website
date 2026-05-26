import React from 'react';

const Footer = () => {
  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          Steakhouse<span>.</span>
        </div>
        
        <ul className="footer-nav">
          <li><a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About</a></li>
          <li><a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')}>Menu</a></li>
          <li><a href="#reservation" onClick={(e) => handleScrollTo(e, 'reservation')}>Reservations</a></li>
          <li><a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact</a></li>
        </ul>
        
        <div style={{ color: '#666', fontSize: '0.9rem', marginTop: '10px' }}>
          Open Daily: 12:00 PM - 11:30 PM | Indulge Responsibly
        </div>
        
        <div className="copyright">
          &copy; {new Date().getFullYear()} Steakhouse Premium. All rights reserved. Created with passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
