import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import history from '../history'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
         {/* <Route path="/events" exact component={Events} />*/}
        </div>
      </Router>
    </div>
  );
};

export default App;
