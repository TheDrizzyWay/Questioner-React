import React from 'react';
import { shallow } from 'enzyme';
import MeetupViewPage from '../../containers/MeetupViewPage';

let wrapper;

describe('<App />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<MeetupViewPage />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<MeetupViewPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
