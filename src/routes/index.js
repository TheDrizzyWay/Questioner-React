import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../containers/LandingPage';
import NotFoundPage from '../containers/NotFoundPage';
import SignUpPage from '../containers/SignUpPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default Routes;
