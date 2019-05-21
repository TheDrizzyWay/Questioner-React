import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<Spinner />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<Spinner />);
        expect(wrapper).toMatchSnapshot();
    });
});
