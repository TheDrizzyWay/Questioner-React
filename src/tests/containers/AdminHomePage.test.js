import React from 'react';
import { shallow } from 'enzyme';
import AdminHomePage from '../../containers/AdminHomePage';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<AdminHomePage />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<AdminHomePage />);
        expect(wrapper).toMatchSnapshot();
    });
});
