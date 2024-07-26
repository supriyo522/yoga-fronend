import React from 'react';
import './Pagination.css';


const Pagination = ({ currentPage, onPageChange }) => {
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>Previous</button>
      <span>Page {currentPage}</span>
      <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
