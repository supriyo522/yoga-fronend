import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ onFilterChange }) => {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const handleChange = () => {
    onFilterChange({ type, location, price, date });
  };

  return (
    <div className="filter">
      <label>
        Type:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">All</option>
          <option value="Signature">Signature</option>
          <option value="Standalone">Standalone</option>
        </select>
      </label>
      <label>
        Location:
        <select value={location} onChange={e => setLocation(e.target.value)}>
          <option value="">All</option>
          <option value="Goa">Goa</option>
          <option value="Rishikesh">Rishikesh</option>
          <option value="Kerala">Kerala</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Pune">Pune</option>
          <option value="Chennai">Chennai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Varanasi">Varanasi</option>
          <option value="Kolkata">Kolkata</option>
        </select>
      </label>
      <label>
        Price:
        <select value={price} onChange={e => setPrice(e.target.value)}>
          <option value="">All</option>
          <option value="0-100">Under $100</option>
          <option value="101-300">$101 - $300</option>
          <option value="301-500">$301 - $500</option>
          <option value="501-700">$501 - $700</option>
          <option value="701-900">$701 - $900</option>
          <option value="901-1000">$901 - $1000</option>
          <option value="1000+">Above $1000</option>
        </select>
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </label>
      <button onClick={handleChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;



