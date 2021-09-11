import React from 'react';
import './Pagination.css';
const Pagination = () => {
  return (
    <>
      <div className="paginate">
        <a href="/" className="num">
          Previous
        </a>
        <a
          href="/"
          className="num"
          style={{ color: 'white', backgroundColor: 'rgb(2, 77, 76)' }}
        >
          1
        </a>
        <a href="/" className="num">
          2
        </a>
        <a href="/" className="num">
          3
        </a>
        <a href="/" className="num">
          4
        </a>
        <a href="/" className="num">
          ...
        </a>
        <a href="/" className="num">
          11
        </a>
        <a href="/" className="num">
          12
        </a>
        <a href="/" className="num">
          next
        </a>
      </div>
    </>
  );
};

export default Pagination;
