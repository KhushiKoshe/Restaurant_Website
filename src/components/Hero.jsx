import React from 'react';

const Hero = () => {
  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div 
        className="hero-bg" 
        style={{ backgroundImage: `url('/assets/images/jason-leung-poI7DelFiVA-unsplash.jpg')` }}
      />
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <h3>Welcome to Steakhouse</h3>
        <h1>
          A Premium <br />
          And Authentic <br />
          <span>Steakhouse</span>
        </h1>
        <div className="hero-buttons">
          <a 
            href="#reservation" 
            className="btn-primary"
            onClick={(e) => handleScrollTo(e, 'reservation')}
          >
            Book A Table
          </a>
          <a 
            href="#menu" 
            className="btn-outline"
            onClick={(e) => handleScrollTo(e, 'menu')}
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
