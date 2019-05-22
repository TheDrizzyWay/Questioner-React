import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import { AdminHOC } from '../../components/AdminHOC';
jest.mock('../../utils/tokenExpired');

const props = {
    auth: {
        loggedIn: [{ token: '' }]
    }
};

describe('<AuthorizationHOC />', () => {
    let wrapper;

    it('should be a route component', () => {
        wrapper = shallow(<AdminHOC {...props} />);
        expect(wrapper.is(Route)).toEqual(true);
    });

    it('renders authenticated route without crashing', () => {
        const wrapper = shallow(<AdminHOC component={() => <div />} {...props} />);
        const render = wrapper.prop('render')({ location: {} });
        const renderWrapper = shallow(render);
        expect(renderWrapper.is('div')).toBe(false);
    });

    it('should redirect unauthenticated request to landing page', () => {
        const wrapper = shallow(<AdminHOC {...props} />);
        const render = wrapper.prop('render')({ location: {} });
        expect(render.props.to).toEqual('/signin');
    });
});
