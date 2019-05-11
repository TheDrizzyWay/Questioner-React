import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from '../../containers/LandingPage';

describe('<App />', () => {
    it('Should render component successfully', () => {
        const wrapper = shallow(<NotFoundPage />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        const component = renderer.create(
            <Router><NotFoundPage /></Router>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
