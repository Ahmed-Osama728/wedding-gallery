import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Categories from './screens/Categories';
import Home from './screens/Home';
import Idea from './screens/Idea';
const App = () => {
  return (
    <Router>
      <Route path="/photo/:id" component={Idea} />
      <Route path="/categories" component={Categories} />
      <Route path="/" component={Home} exact />
    </Router>
  );
};

export default App;
