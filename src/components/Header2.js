import React, { useState } from 'react';
import './Header2.css';
const Header2 = () => {
  const [show, setShow] = useState(false);
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  return (
    <div className={`header2 ${show && 'header2-show'}`}>
      <div className="logo-container2">
        <a href="/">
          <img
            className="logo2"
            src="https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png"
            alt="360Weds"
          />{' '}
        </a>
      </div>
      <ul className="h-ul">
        <li>360 PLANNER</li>
        <li>HIM</li>
        <li>HER</li>
        <li>THE WEDDING</li>
        <li>VENDORS</li>
        <li>GALLERY</li>
        <li>IDEAS & MORE</li>
        <i class="fas fa-user-plus"></i>
        <a className="lang">
          <strong>العربية</strong>
        </a>
      </ul>
    </div>
  );
};

export default Header2;
