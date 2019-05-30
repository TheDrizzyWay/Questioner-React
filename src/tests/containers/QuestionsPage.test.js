import React from 'react';
import { shallow } from 'enzyme';
import QuestionsPage from '../../containers/QuestionsPage';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<QuestionsPage />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<QuestionsPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
