import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from '../../containers/LandingPage';

describe('NotFoundPage', () => {
    test('Should maintain existing snapshot', () => {
        const component = renderer.create(
            <Router><NotFoundPage /></Router>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
