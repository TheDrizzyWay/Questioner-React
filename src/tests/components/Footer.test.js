import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<Footer />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });
});
