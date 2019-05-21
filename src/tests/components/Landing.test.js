import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../../components/Landing';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<Landing />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<Landing />);
        expect(wrapper).toMatchSnapshot();
    });
});
