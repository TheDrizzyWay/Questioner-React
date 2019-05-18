import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpPage from '../containers/SignUpPage';
import LoginPage from '../containers/LoginPage';
import AdminHomePage from '../containers/AdminHomePage';
import NotFoundPage from '../containers/NotFoundPage';
import LandingPage from '../containers/LandingPage';

const Routes = () => {
    return (
      <>
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/signin" component={LoginPage} />
                <Route exact path="/adminhome" component={AdminHomePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
      </>
    );
};

export default Routes;
