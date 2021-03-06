import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

let wrapper;

describe('App', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<App />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
