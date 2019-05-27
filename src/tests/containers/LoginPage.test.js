import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../containers/LoginPage';

let wrapper;

describe('<LoginPage />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<LoginPage />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<LoginPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
