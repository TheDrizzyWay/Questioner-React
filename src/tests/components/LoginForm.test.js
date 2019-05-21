import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../components/LoginForm';

const props = {
    auth: {
        isLoading: false
    },
    login: jest.fn(),
    clearError: jest.fn()
};

let wrapper;

describe('<LoginForm />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<LoginForm.WrappedComponent {...props} />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<LoginForm.WrappedComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should clear errors on focus', () => {
        wrapper = shallow(<LoginForm.WrappedComponent {...props} />);
        wrapper.find('input').at(0).simulate('focus', { target: { id: 'email' } });
        expect(props.clearError).toHaveBeenCalled();
    });

    test('should correctly update state on input change', () => {
        wrapper = shallow(<LoginForm.WrappedComponent {...props} />);
        wrapper.find('input').at(0).simulate('change', { target: { value: 'user@email.com' } });
        wrapper.find('input').at(1).simulate('change', { target: { value: 'password' } });
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(props.login).toHaveBeenCalled();
    });
});
