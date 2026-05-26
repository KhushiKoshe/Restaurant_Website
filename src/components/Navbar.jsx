import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background styling shift on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Dynamic Active Section Tracking
      const sections = ['home', 'about', 'menu', 'reservation', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
          Steakhouse<span>.</span>
        </a>
        
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#menu" 
              className={activeSection === 'menu' ? 'active' : ''} 
              onClick={(e) => handleLinkClick(e, 'menu')}
            >
              Menu
            </a>
          </li>
          <li>
            <a 
              href="#reservation" 
              className={activeSection === 'reservation' ? 'active' : ''} 
              onClick={(e) => handleLinkClick(e, 'reservation')}
            >
              Reservations
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact Us
            </a>
          </li>
        </ul>
        
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
