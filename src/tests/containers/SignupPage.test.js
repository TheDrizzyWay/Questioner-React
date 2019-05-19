import React from 'react';
import { shallow } from 'enzyme';
import SignUpPage from '../../containers/SignUpPage';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<SignUpPage />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<SignUpPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
