import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';
import Events from './events/Events';
import history from '../history'

const App = () => {
  return (
    <div className="">
      <Router history={history}>
        <div>
          <Header />
          <div className={'pl-4 pr-4 pt-2'}>
              <Route path="/" exact component={Home} />
              <Route path="/events" exact component={Events} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
