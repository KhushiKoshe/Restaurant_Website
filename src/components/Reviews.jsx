import React from 'react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Emma Johnson',
    text: '“The food was absolutely divine! The dry-aged ribeye melted in my mouth, and the elegant glassmorphic ambiance and flawless table service made our anniversary night incredibly special.”',
    stars: 5,
    initials: 'EJ'
  },
  {
    id: 2,
    name: 'Michael Lee',
    text: '“An amazing fine-dining experience! The culinary flavors were complex and top-notch, the wine selection was exceptional, and the master chef personally checked on our table.”',
    stars: 5,
    initials: 'ML'
  },
  {
    id: 3,
    name: 'Sophia Patel',
    text: '“Loved the deep, cozy aesthetic and soft jazz background music. Every single dish from the creamy Alfredo pasta to the chocolate lava cake was cooked to absolute perfection.”',
    stars: 5,
    initials: 'SP'
  }
];

const Reviews = () => {
  return (
    <section className="reviews reveal" id="reviews">
      <div className="section-heading">
        <h2>Customer <span>Reviews</span></h2>
        <p>Listen to the delightful dining stories shared by our valued guests who experienced the art of Steakhouse.</p>
      </div>

      <div className="reviews-container">
        {REVIEWS_DATA.map((rev) => (
          <div key={rev.id} className="review-card">
            <i className="fa-solid fa-quote-left quote-icon"></i>
            <p className="review-text">{rev.text}</p>
            
            <div className="reviewer">
              <div className="reviewer-avatar">
                {rev.initials}
              </div>
              <div className="reviewer-info">
                <h4>{rev.name}</h4>
                <div className="reviewer-stars">
                  {Array.from({ length: rev.stars }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
