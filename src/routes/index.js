import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../containers/NotFoundPage';

const Routes = () => {
    return (
    <>
      <Router>
          <Switch>
              <Route exact path="/" />
              <Route component={NotFoundPage} />
          </Switch>
      </Router>
    </>
    );
};

export default Routes;
