import React from 'react';
import './RetreatCard.css';

const RetreatCard = ({ retreat }) => (
  <div className="retreat-card">
    <div className="retreat-card-image-wrapper">
      <img src={retreat.image} alt={retreat.title} className="retreat-card-image" />
    </div>
    <div className="retreat-card-content">
      <h2 className="retreat-card-title">{retreat.title}</h2>
      <p className="retreat-card-description">{retreat.description}</p>
      <div className="retreat-card-details">
        <p className="retreat-card-date"><strong>Date:</strong> {new Date(retreat.date * 1000).toDateString()}</p>
        <p className="retreat-card-location"><strong>Location:</strong> {retreat.location}</p>
        <p className="retreat-card-price"><strong>Price:</strong> ${retreat.price}</p>
      </div>
    </div>
  </div>
);

export default RetreatCard;




