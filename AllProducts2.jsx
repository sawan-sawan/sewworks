import React from 'react';
import './AllProducts2.css';



const allTrades = [
    {
        id: 1,
        name: 'Premium Rice',
        image: '/img/IMG-20250601-WA0018.jpg',
        description: 'High-quality basmati rice, perfect for export and local markets.',
      },
      {
        id: 2,
        name: 'Spices Pack',
        image: '/img/IMG-20250601-WA0031.jpg',
        description: 'Aromatic and pure Indian spices, sourced from certified farms.',
      },
      {
        id: 3,
        name: 'Organic Wheat',
        image: '/img/IMG-20250601-WA0049.jpg',
        description: 'Naturally grown organic wheat, rich in fiber and nutrition.',
      },
      {
        id: 1,
        name: 'Premium Rice',
        image: '/img/IMG-20250601-WA0055.jpg',
        description: 'High-quality basmati rice, perfect for export and local markets.',
      },
      {
        id: 2,
        name: 'Spices Pack',
        image: '/img/IMG-20250601-WA0024.jpg',
        description: 'Aromatic and pure Indian spices, sourced from certified farms.',
      },
      {
        id: 3,
        name: 'Organic Wheat',
        image: '/img/IMG-20250601-WA0035.jpg',
        description: 'Naturally grown organic wheat, rich in fiber and nutrition.',
      },
      {
        id: 1,
        name: 'Premium Rice',
        image: '/img/IMG-20250601-WA0057.jpg',
        description: 'High-quality basmati rice, perfect for export and local markets.',
      },
      {
        id: 2,
        name: 'Spices Pack',
        image: '/img/IMG-20250601-WA0041.jpg',
        description: 'Aromatic and pure Indian spices, sourced from certified farms.',
      },
      {
        id: 3,
        name: 'Organic Wheat',
        image: '/img/IMG-20250601-WA0035.jpg',
        description: 'Naturally grown organic wheat, rich in fiber and nutrition.',
      },
      {
        id: 1,
        name: 'Premium Rice',
        image: '/img/IMG-20250601-WA0057.jpg',
        description: 'High-quality basmati rice, perfect for export and local markets.',
      },
      {
        id: 2,
        name: 'Spices Pack',
        image: '/img/IMG-20250601-WA0041.jpg',
        description: 'Aromatic and pure Indian spices, sourced from certified farms.',
      },
      {
        id: 2,
        name: 'Spices Pack',
        image: '/img/IMG-20250601-WA0041.jpg',
        description: 'Aromatic and pure Indian spices, sourced from certified farms.',
      },
 
 
];

const AllProducts2 = () => {
  return (
    <div className="all-products">
      <h1>Our Trade Products</h1>
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

export default AllProducts2;