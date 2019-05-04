import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../containers/LandingPage';

describe('<App />', () => {
    it('Should render component successfully', () => {
        const wrapper = shallow(<NotFoundPage />);
        expect(wrapper.length).toEqual(1);
    });
});
