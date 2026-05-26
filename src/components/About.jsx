import React from 'react';

const About = () => {
  return (
    <section className="about reveal" id="about">
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-wrapper">
            <img src="/assets/images/chef-removebg-preview.png" alt="Our Master Chef" />
          </div>
        </div>
        
        <div className="about-content">
          <span className="about-subtitle">Our Heritage</span>
          <h2>About <span>Us</span></h2>
          <p>
            Welcome to <strong>Steakhouse</strong> — where culinary flavor meets timeless elegance. Our master chefs craft each dish with uncompromised passion, combining the freshest organic ingredients and bold creativity. Experience a gastronomic journey like never before in a warm, ambient setting designed exclusively for true food lovers.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-box">
              <i className="fa-solid fa-utensils"></i>
              <div>
                <h4>Culinary Artistry</h4>
                <p>Meticulously curated menus by world-class chefs.</p>
              </div>
            </div>
            
            <div className="highlight-box">
              <i className="fa-solid fa-wine-glass"></i>
              <div>
                <h4>Luxury Ambiance</h4>
                <p>A sophisticated environment designed for intimate celebrations.</p>
              </div>
            </div>
            
            <div className="highlight-box">
              <i className="fa-solid fa-cow"></i>
              <div>
                <h4>Prime Beef Cuts</h4>
                <p>Only the finest hand-selected, dry-aged steaks.</p>
              </div>
            </div>
            
            <div className="highlight-box">
              <i className="fa-solid fa-award"></i>
              <div>
                <h4>Award Winning</h4>
                <p>Recipient of global fine-dining culinary certificates.</p>
              </div>
            </div>
          </div>
          
          <button className="btn-primary">Learn Our Story</button>
        </div>
      </div>
    </section>
  );
};

export default About;
