import React from 'react';
import './Buttons.css';
const Buttons = () => {
  return (
    <>
      <div className="search">
        <div className="bts">
          {' '}
          <button
            className="btn"
            style={{ color: 'black', backgroundColor: 'white' }}
          >
            Clear
          </button>
          <button
            className="btn"
            style={{ color: 'white', backgroundColor: 'black' }}
          >
            Apply
          </button>
        </div>
        <div className="input">
          {' '}
          <input
            type="search"
            placeholder="search"
            id="gesearch"
            name="gsearch"
          />
        </div>
      </div>
    </>
  );
};

export default Buttons;
