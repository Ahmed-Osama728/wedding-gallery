import React from 'react';
import products from '../data.js';
import './Footer.css';
const footer = () => {
  return (
    <>
      <div>
        <div className="item1">
          <h3>
            {' '}
            WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT
            MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.
          </h3>
        </div>
        <div className="item">
          {products.map((product) => (
            <div>
              <strong className="name">{product.name}</strong>
              <div className="products">
                <div className="icon">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="image"
                  />{' '}
                </div>
                <div>
                  <span className="description">{product.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="item2">
        <div className="weds">
          <h2>360Weds</h2>
          <div className="socialmedia">
            <i
              style={{ color: 'aliceblue', padding: '5px' }}
              class="fab fa-facebook-f"
            ></i>
            <i
              style={{ color: 'aliceblue', padding: '5px' }}
              class="fab fa-instagram"
            ></i>
          </div>
        </div>
        <div className="copy">
          @Copy right{' '}
          <a
            href="/"
            style={{ color: 'rgb(51, 122, 183)', textDecoration: 'none' }}
          >
            Plus360All
          </a>{' '}
          Rights Reserved
        </div>
        <div className="last-item">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </>
  );
};

export default footer;
