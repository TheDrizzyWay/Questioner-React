import React from 'react';
import { shallow, mount } from 'enzyme';
import AppToast from '../../components/AppToast';

jest.useFakeTimers();
jest.advanceTimersByTime(3000);
const props = {
    callback: jest.fn(),
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

    test('Should update the state accurately', () => {
        wrapper = mount(<AppToast {...props} />);
        wrapper.setState({ open: true });
        expect(wrapper.state().open).toEqual(true);
        expect(setTimeout).toHaveBeenCalled();
        wrapper.setState({ open: false });
        expect(wrapper.state().open).toEqual(false);
    });
});
