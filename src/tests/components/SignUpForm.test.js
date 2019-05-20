import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from '../../components/SignUpForm';

const props = {
    auth: {
        isLoading: false
    },
    history: {
        push: jest.fn()
    },
    signUp: jest.fn(),
    clearError: jest.fn()
};
let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<SignUpForm.WrappedComponent {...props} />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<SignUpForm.WrappedComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should clear errors on focus', () => {
        wrapper = shallow(<SignUpForm.WrappedComponent {...props} />);
        wrapper.find('input').at(0).simulate('focus', { target: { id: 'firstname' } });
        expect(props.clearError).toHaveBeenCalled();
    });

    test('should correctly update state on input change', () => {
        wrapper = shallow(<SignUpForm.WrappedComponent {...props} />);
        wrapper.find('input').at(0).simulate('change', { target: { value: 'myname' } });
        wrapper.find('input').at(1).simulate('change', { target: { value: 'lastname' } });
        wrapper.find('input').at(2).simulate('change', { target: { value: 'user@email.com' } });
        wrapper.find('input').at(3).simulate('change', { target: { value: 'password' } });
        wrapper.find('input').at(4).simulate('change', { target: { value: 'password' } });
        wrapper.find('input').at(5).simulate('change', { target: { value: 'username' } });
        wrapper.find('input').at(6).simulate('change', { target: { value: '08011112222' } });
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(props.signUp).toHaveBeenCalled();
    });
});
