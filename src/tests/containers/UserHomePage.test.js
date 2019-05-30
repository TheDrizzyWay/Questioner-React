import React from 'react';
import { shallow } from 'enzyme';
import UserHomePage from '../../containers/UserHomePage';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<UserHomePage />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<UserHomePage />);
        expect(wrapper).toMatchSnapshot();
    });
});
