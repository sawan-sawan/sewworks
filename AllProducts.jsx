import React from 'react';
import './AllProducts.css';


const allTrades = [
    {
        id: 1,
        name: 'Premium Rice',
        image: '/img/IMG-20250601-WA0063.jpg',
        description: 'High-quality basmati rice, perfect for export and local markets.',
      },
      {
        id: 2,
        name: 'Spices Pack',
        image: '/img/IMG-20250601-WA0064.jpg',
        description: 'Aromatic and pure Indian spices, sourced from certified farms.',
      },
      {
        id: 3,
        name: 'Organic Wheat',
        image: '/img/IMG-20250601-WA0066.jpg',
        description: 'Naturally grown organic wheat, rich in fiber and nutrition.',
      },
      {
        id: 1,
        name: 'Premium Rice',
        image: '/img/IMG-20250601-WA0058.jpg',
        description: 'High-quality basmati rice, perfect for export and local markets.',
      },
      {
        id: 2,
        name: 'Spices Pack',
        image: '/img/IMG-20250601-WA0030.jpg',
        description: 'Aromatic and pure Indian spices, sourced from certified farms.',
      },
      {
        id: 3,
        name: 'Organic Wheat',
        image: '/img/IMG-20250601-WA0029.jpg',
        description: 'Naturally grown organic wheat, rich in fiber and nutrition.',
      },
      {
        id: 1,
        name: 'Premium Rice',
        image: '/img/IMG-20250601-WA0040.jpg',
        description: 'High-quality basmati rice, perfect for export and local markets.',
      },
      {
        id: 2,
        name: 'Spices Pack',
        image: '/img/IMG-20250601-WA0061.jpg',
        description: 'Aromatic and pure Indian spices, sourced from certified farms.',
      },
      {
        id: 3,
        name: 'Organic Wheat',
        image: '/img/IMG-20250601-WA0029.jpg',
        description: 'Naturally grown organic wheat, rich in fiber and nutrition.',
      },
      {
        id: 1,
        name: 'Premium Rice',
        image: '/img/IMG-20250601-WA0040.jpg',
        description: 'High-quality basmati rice, perfect for export and local markets.',
      },
      {
        id: 2,
        name: 'Spices Pack',
        image: '/img/IMG-20250601-WA0061.jpg',
        description: 'Aromatic and pure Indian spices, sourced from certified farms.',
      },
      {
        id: 2,
        name: 'Spices Pack',
        image: '/img/IMG-20250601-WA0061.jpg',
        description: 'Aromatic and pure Indian spices, sourced from certified farms.',
      },
  // Add more products as needed
];

const AllProducts = () => {
 

  return (
    <div className="all-products">
      <h1>All Manufacturing Products</h1>
      <div className="all-products-container">
        {allTrades.map((item) => (
          <div className="trade-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
