import React from 'react';
import './Header.css';
import {
  plannerItems,
  herItems,
  weddingItems,
  galleryItems,
  ideasItems,
  himItems,
  vendorsItems
} from '../DropDownData';
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="first-item">
          <i class="fas fa-user-plus"></i>
          <a className="lang">
            <strong>العربية</strong>
          </a>
        </div>
        <div className="header">
          <ul className="left">
            <li>
              <p>360 PLANNER</p>
              <div className="dd-container">
                {plannerItems.map((plannerItem) => (
                  <a href="/categories" className="dd">
                    {plannerItem}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <p>HER</p>
              <div className="dd-container">
                {herItems.map((item) => (
                  <a href="/categories" className="dd">
                    {item}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <p>HIM</p>
              <div className="dd-container">
                {himItems.map((himItem) => (
                  <a href="/categories" className="dd">
                    {himItem}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <p>THE WEDDING</p>
              <div className="dd-container">
                {weddingItems.map((weddingItem) => (
                  <a href="/categories" className="dd">
                    {weddingItem}
                  </a>
                ))}
              </div>
            </li>
          </ul>
          <div className="logo-container">
            <a href="/categories">
              <img
                className="logo"
                src="https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png"
                alt="360Weds"
              />{' '}
            </a>
          </div>
          <ul className="right">
            <li></li>
            <li>
              <p>VENDORS</p>
              <div className="dd-container">
                {vendorsItems.map((vendorsItem) => (
                  <a href="/categories" className="dd">
                    {vendorsItem}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <p>GALLERY</p>
              <div className="dd-container">
                {galleryItems.map((galleryItem) => (
                  <a href="/categories" className="dd">
                    {galleryItem}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <p>IDEAS & MORE</p>
              <div className="dd-container">
                {ideasItems.map((ideasItem) => (
                  <a href="/categories" className="dd">
                    {ideasItem}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav">
        <a href="/categories" className="gallery">
          <h3>GALLERY</h3>
        </a>

        <span className="angle">
          {' '}
          <i class="fas fa-angle-right"></i>
        </span>

        <a href="" className="nav-1">
          {' '}
          <h3>WEDDING IDEAS</h3>
        </a>
      </div>
    </>
  );
};

export default Header;
