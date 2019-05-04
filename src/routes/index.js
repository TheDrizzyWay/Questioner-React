import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../containers/NotFoundPage';
import LandingPage from '../containers/LandingPage';

const Routes = () => {
    return (
    <>
      <Router>
          <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route component={NotFoundPage} />
          </Switch>
      </Router>
    </>
    );
};

export default Routes;
