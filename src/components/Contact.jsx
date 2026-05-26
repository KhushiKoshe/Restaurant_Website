import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="contact reveal" id="contact">
      <div className="section-heading">
        <h2>Contact <span>Us</span></h2>
        <p>We would love to hear from you! Reach out for private dining events, feedback, or custom catering requests.</p>
      </div>

      <div className="contact-container">
        {/* Info Column */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Have a question or want to host a private banquet at Steakhouse? Our team is always ready to accommodate your special requirements.
          </p>
          
          <div className="info-details">
            <div className="info-item">
              <div className="info-icon-box">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info-text">
                <h5>Location</h5>
                <p>123 Steakhouse Street, Indore, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-box">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="info-text">
                <h5>Phone</h5>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-box">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="info-text">
                <h5>Email</h5>
                <p>contact@steakhouse.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
          </div>
        </div>

        {/* Message Form Column */}
        <div className="contact-form-wrapper glass-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                value={form.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                value={form.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message..." 
                rows="5" 
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">Send Message</button>
            
            {sent && (
              <p style={{ color: 'var(--primary)', marginTop: '10px', fontSize: '0.9rem', textAlign: 'center', animation: 'fadeInUp 0.3s' }}>
                <i className="fa-solid fa-circle-check" style={{ marginRight: '6px' }}></i> Message sent successfully! We will get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
