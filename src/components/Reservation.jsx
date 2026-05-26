import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    request: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      request: ''
    });
  };

  return (
    <section className="reservation reveal" id="reservation">
      <div className="section-heading">
        <h2>Make a <span>Reservation</span></h2>
        <p>Book your exclusive table in advance to secure a memorable dining experience with us.</p>
      </div>

      <div className="reservation-container glass-panel">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="res-name">Full Name</label>
            <input 
              type="text" 
              id="res-name" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-email">Email Address</label>
            <input 
              type="email" 
              id="res-email" 
              name="email" 
              placeholder="name@example.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-phone">Phone Number</label>
            <input 
              type="tel" 
              id="res-phone" 
              name="phone" 
              placeholder="+91 XXXXX XXXXX" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-guests">Number of Guests</label>
            <select 
              id="res-guests" 
              name="guests" 
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5+ People</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="res-date">Date</label>
            <input 
              type="date" 
              id="res-date" 
              name="date" 
              value={formData.date}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-time">Preferred Time</label>
            <input 
              type="time" 
              id="res-time" 
              name="time" 
              value={formData.time}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group form-group-full">
            <label htmlFor="res-request">Special Requests</label>
            <textarea 
              id="res-request" 
              name="request" 
              placeholder="Let us know if you have dietary restrictions, allergies, or are celebrating a special occasion..." 
              rows="4"
              value={formData.request}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">Book Now</button>
        </form>
      </div>

      {/* Success Confirmation Modal */}
      {isSubmitted && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel">
            <i className="fa-solid fa-circle-check"></i>
            <h3>Reservation Confirmed!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. Your table for <strong>{formData.guests} {parseInt(formData.guests) === 1 ? 'guest' : 'guests'}</strong> has been successfully booked for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '-10px' }}>
              A confirmation email has been sent to {formData.email}.
            </p>
            <button className="btn-primary" onClick={closeModal}>Perfect</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reservation;
