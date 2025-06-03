import React from 'react';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

const trades = [
  {
    id: 1,
    name: 'Gearbox',
    image: '/img/IMG-20250601-WA0018.jpg',
    description: 'Gearbox is a mechanical system that transmits power from the engine to the machine, allowing speed and torque control for efficient operation in various industrial applications.',
  },
  {
    id: 2,
    name: 'Crompton Motor',
    image: '/img/IMG-20250601-WA0031.jpg',
    description: 'Crompton Motor is a high-performance electric motor known for its durability, energy efficiency, and reliable operation across industrial and commercial applications.',
  },
  {
    id: 3,
    name: 'Shredder Machine Blade',
    image: '/img/IMG-20250601-WA0049.jpg',
    description: 'Shredder Machine Blade is a heavy-duty cutting tool designed to efficiently shred materials like plastic, crop waste, or paper into smaller pieces for recycling or disposal.',
  },
  {
    id: 1,
    name: 'GearBox',
    image: '/img/IMG-20250601-WA0055.jpg',
    description: 'Shredder Machine Blade is a heavy-duty cutting tool designed to efficiently shred materials like plastic, crop waste, or paper into smaller pieces for recycling or disposal.',
  },
  {
    id: 2,
    name: 'Conveyor Roller',
    image: '/img/IMG-20250601-WA0024.jpg',
    description: 'Durable and smooth-rotating rollers used in conveyor systems to efficiently move goods across production or packaging lines.',
  },
  {
    id: 3,
    name: 'Shredder Pressure',
    image: '/img/IMG-20250601-WA0035.jpg',
    description: 'High-pressure mechanism in shredder machines ensures efficient cutting and compression of tough materials for optimal size reduction.',
  },
  {
    id: 1,
    name: 'Briquette Machine',
    image: '/img/IMG-20250601-WA0057.jpg',
    description: 'A briquette machine compresses biomass waste into solid fuel blocks, offering an eco-friendly and efficient energy alternative.',
  },
  {
    id: 2,
    name: 'Gearbox',
    image: '/img/IMG-20250601-WA0041.jpg',
    description: 'A gearbox is a mechanical device that transfers power from an engine to the wheels or machinery, adjusting speed and torque for efficient operation.',
  },
 
];

const   Tradeproducts = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/all-products'); // Make sure this route is defined in your app
  };

  return (
    <section className="trade-section1">
      <h2>Our Trade Products</h2>
      <div className="trade-container">
        {trades.map((trade) => (
          <div className="trade-card" key={trade.id}>
            <img src={trade.image} alt={trade.name} />
            <h3>{trade.name}</h3>
            <p>{trade.description}</p>
          </div>
        ))}
      </div>
      <Link to="/allproducts2" id="more-btn">
          More Info
        </Link>
    </section>
  );
};

export default  Tradeproducts;
