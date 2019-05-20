import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../../containers/LandingPage';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<LandingPage />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<LandingPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
