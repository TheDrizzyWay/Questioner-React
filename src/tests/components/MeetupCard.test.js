import React from 'react';
import { shallow } from 'enzyme';
import MeetupCard from '../../components/MeetupCard';

let wrapper;

describe('<MeetupCard />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<MeetupCard />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<MeetupCard />);
        expect(wrapper).toMatchSnapshot();
    });
});
