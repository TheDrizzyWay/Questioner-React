import React from 'react';
import { mount } from 'enzyme';
import withFormError from '../../components/FormWithErrorHOC';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = mount(withFormError(null, <div />));
        expect(wrapper.length).toEqual(1);
    });

    it('Should render error div successfully', () => {
        wrapper = mount(withFormError('error', <div />));
        expect(wrapper.length).toEqual(2);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = mount(withFormError(null, <div />));
        expect(wrapper).toMatchSnapshot();
    });
});
