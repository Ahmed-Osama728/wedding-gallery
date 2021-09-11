import React from 'react';
import Examples from '../components/Examples';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';

import './Home.css';
import Buttons from '../components/Buttons';
import Pagination from '../components/Pagination';

const Home = () => {
  return (
    <>
      <div>
        <Header2 />
        <Header />
        <div className="core">
          <Buttons />
          <div className="examples">
            <Examples />
          </div>
        </div>
        <Pagination />
      </div>
      <Footer />
    </>
  );
};

export default Home;
