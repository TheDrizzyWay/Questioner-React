import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminHOC from '../components/AdminHOC';
import AuthorizationHOC from '../components/AuthorizationHOC';
import LandingPage from '../containers/LandingPage';
import SignUpPage from '../containers/SignUpPage';
import LoginPage from '../containers/LoginPage';
import AdminHomePage from '../containers/AdminHomePage';
import MeetupViewPage from '../containers/MeetupViewPage';
import UserHomePage from '../containers/UserHomePage';
import QuestionsPage from '../containers/QuestionsPage';
import CommentsPage from '../containers/CommentsPage';
import NotFoundPage from '../containers/NotFoundPage';

const Routes = () => {
    return (
      <>
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/signin" component={LoginPage} />
                <AdminHOC exact path="/adminhome" component={AdminHomePage} />
                <AuthorizationHOC exact path="/view/:id" component={MeetupViewPage} />
                <AuthorizationHOC exact path="/userhome" component={UserHomePage} />
                <Route exact path="/questions" component={QuestionsPage} />
                <Route exact path="/comments" component={CommentsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
      </>
    );
};

export default Routes;
