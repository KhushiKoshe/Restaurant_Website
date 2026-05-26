import React, { useState } from 'react';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Creamy Alfredo Pasta',
    category: 'mains',
    price: '$14',
    description: 'Rich cream sauce with premium aged parmesan & fresh herbs.',
    image: '/assets/images/Creamy Alfredo Pasta.jpg',
    tag: 'Popular'
  },
  {
    id: 2,
    name: 'Classic Beef Burger',
    category: 'grills',
    price: '$12',
    description: 'Grilled wagyu beef patty with melted cheddar, lettuce & house sauce.',
    image: '/assets/images/Burger.jpg',
    tag: 'Chef Special'
  },
  {
    id: 3,
    name: 'Margherita Pizza',
    category: 'mains',
    price: '$16',
    description: 'Fresh mozzarella di bufala, organic basil & sweet tomato reduction.',
    image: '/assets/images/Pizza.jpg',
    tag: 'Classic'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    price: '$10',
    description: 'Warm, rich chocolate cake with a velvety molten center.',
    image: '/assets/images/Chocolate  Cake.jpg', // Retaining the double space name
    tag: 'Sweet'
  },
  {
    id: 5,
    name: 'Grilled Ribeye Steak',
    category: 'grills',
    price: '$22',
    description: 'Juicy prime ribeye steak grilled with garlic butter & fresh rosemary.',
    image: '/assets/images/Grilled Steak.jpg',
    tag: 'Signature'
  },
  {
    id: 6,
    name: 'Fresh Garden Salad',
    category: 'salads',
    price: '$8',
    description: 'Crispy seasonal greens, cherry tomatoes & tangy house citrus dressing.',
    image: '/assets/images/Fresh Garden Salad.jpg',
    tag: 'Organic'
  },
  {
    id: 7,
    name: 'Oakwood T-Bone Steak',
    category: 'grills',
    price: '$28',
    description: 'Perfect dry-aged T-Bone grilled over oakwood with fresh rosemary & sea salt.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
    tag: 'Royal'
  },
  {
    id: 8,
    name: 'Smoked Salmon Salad',
    category: 'salads',
    price: '$15',
    description: 'Delicate layers of cold-smoked Atlantic salmon with wild arugula and dill emulsion.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
    tag: 'Light'
  },
  {
    id: 9,
    name: 'Truffle Parmigiano Fries',
    category: 'salads',
    price: '$9',
    description: 'Thick-cut golden wedges tossed in white truffle oil, grated pecorino & parsley.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80',
    tag: 'Side'
  },
  {
    id: 10,
    name: 'Pepperoni Feast Pizza',
    category: 'mains',
    price: '$18',
    description: 'Artisanal crust topped with spicy pepperoni, bubbling fresh mozzarella & oregano.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=80',
    tag: 'Spicy'
  },
  {
    id: 11,
    name: 'Classic Red Wine Tiramisu',
    category: 'desserts',
    price: '$11',
    description: 'Espresso-soaked savoiardi ladyfingers layered with rich mascarpone & fine cocoa.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80',
    tag: 'Premium'
  },
  {
    id: 12,
    name: 'Crispy Buttermilk Chicken Burger',
    category: 'grills',
    price: '$14',
    description: 'Buttermilk fried chicken breast, spiced red cabbage slaw & smoky chipotle mayo.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    tag: 'New'
  }
];

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'grills', name: 'Steaks & Burgers' },
    { id: 'mains', name: 'Main Entrées' },
    { id: 'salads', name: 'Sides & Salads' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const filteredItems = MENU_ITEMS.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const displayedItems = filteredItems.slice(0, visibleCount);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setVisibleCount(6); // Reset visible items when filter changes
  };

  const handleShowToggle = () => {
    if (visibleCount >= filteredItems.length) {
      setVisibleCount(6);
    } else {
      setVisibleCount(filteredItems.length);
    }
  };

  return (
    <section className="menu reveal" id="menu">
      <div className="section-heading">
        <h2>Our <span>Menu</span></h2>
        <p>Explore our exquisite culinary collection of signature dishes crafted with pure passion and served with premium hospitality.</p>
      </div>

      {/* Elegant Filter Tabs */}
      <div className="menu-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
            onClick={() => handleFilterChange(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="menu-container">
        {displayedItems.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="menu-img-container">
              <img src={item.image} alt={item.name} />
              {item.tag && <span className="menu-tag">{item.tag}</span>}
            </div>
            
            <div className="menu-info">
              <div className="menu-info-header">
                <h3>{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Show More/Less Button */}
      {filteredItems.length > 6 && (
        <div className="menu-more" style={{ textAlign: 'center', marginTop: '40px' }}>
          <button id="showMoreBtn" onClick={handleShowToggle}>
            {visibleCount >= filteredItems.length ? (
              <>
                Show Less <i className="fa-solid fa-chevron-up" style={{ marginLeft: '6px' }}></i>
              </>
            ) : (
              <>
                Show More <i className="fa-solid fa-chevron-down" style={{ marginLeft: '6px' }}></i>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Menu;
