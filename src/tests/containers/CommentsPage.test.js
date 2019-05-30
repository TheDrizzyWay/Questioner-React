import React from 'react';
import { shallow } from 'enzyme';
import CommentsPage from '../../containers/CommentsPage';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<CommentsPage />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<CommentsPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
