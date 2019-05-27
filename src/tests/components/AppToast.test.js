import React from 'react';
import { shallow } from 'enzyme';
import AppToast from '../../components/AppToast';

const props = {
    callback: null,
    message: '',
    open: false
};
let wrapper;

describe('AppToast', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<AppToast {...props} />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<AppToast {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
