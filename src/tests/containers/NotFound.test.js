import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../containers/NotFoundPage';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<NotFoundPage />);
        expect(wrapper.length).toEqual(1);
        expect(wrapper.find('div').length).toEqual(4);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<NotFoundPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
