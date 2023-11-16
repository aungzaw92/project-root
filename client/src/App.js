// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'; // Import your CSS or stylesheets here

// Define components for navigation, hero, and product list
const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

const Hero = () => (
  <div className="hero">
    <h1>Welcome to our Fish Market!</h1>
    <p>Discover the freshest seafood in town.</p>
  </div>
);

const ProductList = () => {
  const fishItems = [
    { id: 1, name: 'Salmon', description: 'Premium Atlantic Salmon', price: '$12.99', image: 'salmon.jpg' },
    // Add more fish items as needed
  ];

  return (
    <div className="product-list">
      {fishItems.map(fish => (
        <div key={fish.id} className="fish-item">
          <img src={fish.image} alt={fish.name} />
          <h3>{fish.name}</h3>
          <p>{fish.description}</p>
          <p>{fish.price}</p>
          <Link to={`/product/${fish.id}`}>Learn More</Link>
        </div>
      ))}
    </div>
  );
};

const App = () => (
  <Router>
    <div className="app">
      <Navigation />
      <Hero />
      <Route path="/products" component={ProductList} />
      {/* Additional routes for about, contact, and individual product pages */}
    </div>
  </Router>
);

export default App;
