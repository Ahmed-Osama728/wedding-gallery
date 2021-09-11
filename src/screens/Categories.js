import React, { useState } from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import categories from '../catData.json';
import './Categories.scss';

const Categories = () => {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <Header2 />
        <Header />
        <div className="container">
          <div className="cat1">
            <button onClick={() => setShow(!show)}>
              FIND CATEGORIES HERE{' '}
              <span>
                <i class="fas fa-chevron-down"></i>
              </span>
            </button>
            <input
              placeholder="SEARCH"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div
            className="cat2"
            style={
              show
                ? { display: 'flex', transition: 'height 2s ease-in-out 0s' }
                : { display: 'none' }
            }
          >
            {categories.map((x) => (
              <a href="/" className="cat-info">
                <img className="cat-icon" src={x.icon} alt={x.title} />
                <p href="/">{x.title}</p>
              </a>
            ))}
          </div>
          <div
            className="cat3"
            style={
              show
                ? {
                    marginTop: '25px',
                    transition: 'height 2s ease-in-out 0s'
                  }
                : { marginTop: '-223px' }
            }
          >
            {categories.map((x) => (
              <div className="cat3-case">
                <a href="/">
                  <img src={x.image} alt={x.title} className="cat3-img" />
                  <img src={x.icon} alt={x.title} className="cat3-icon" />
                  <h3>{x.title}</h3>
                </a>

                <div className="cat3-info">
                  <span>
                    <i class="fas fa-home"></i>
                  </span>
                  <h4>{x.title}</h4>
                  <p>{x.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pagination />
      <Footer />
    </>
  );
};

export default Categories;
