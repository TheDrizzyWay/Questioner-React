import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<Header />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});
