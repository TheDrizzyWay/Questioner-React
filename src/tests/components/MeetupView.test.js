import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { MeetupView } from '../../components/MeetupView';

const props = {
    match: { params: 1 },
    getOneMeetup: jest.fn()
};
let wrapper;

describe('<MeetupView />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<MeetupView {...props} />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<MeetupView {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should get one meetup on mount', () => {
        wrapper = mount(<Router><MeetupView {...props} /></Router>);
        expect(props.getOneMeetup).toHaveBeenCalled();
    });

    test('should render top questions and tags', () => {
        props.meetup = {
            tags: ['tag1', 'tag2'],
            createdon: '2019-05-31T10:59:12.703Z'
        };
        props.topQuestions = ['question1', 'question2'];
        props.oneLoading = true;
        wrapper = shallow(<MeetupView {...props} />);
        expect(wrapper.exists('Spinner')).toEqual(true);
        expect(wrapper.exists('.tags')).toEqual(true);
        expect(wrapper.exists('.question')).toEqual(true);
    });
});
