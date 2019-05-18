import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../containers/LandingPage';
import SignUpPage from '../containers/SignUpPage';
import LoginPage from '../containers/LoginPage';
import AdminHomePage from '../containers/AdminHomePage';
import MeetupViewPage from '../containers/MeetupViewPage';
import UserHomePage from '../containers/UserHomePage';
import NotFoundPage from '../containers/NotFoundPage';

const Routes = () => {
    return (
      <>
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/signin" component={LoginPage} />
                <Route exact path="/adminhome" component={AdminHomePage} />
                <Route exact path="/view" component={MeetupViewPage} />
                <Route exact path="/userhome" component={UserHomePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
      </>
    );
};

export default Routes;
