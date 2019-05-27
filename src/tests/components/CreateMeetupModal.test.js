import React from 'react';
import { shallow } from 'enzyme';
import CreateMeetupModal from '../../components/modals/CreateMeetupModal';

const props = {
    toggleCreateModal: jest.fn(),
    createMeetup: jest.fn(),
    clearCreateError: jest.fn(),
    created: false
};
let wrapper;

describe('<CreateMeetupModal />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<CreateMeetupModal {...props} />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<CreateMeetupModal {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    /* test('should close modal on meetup cration', () => {
        props.created = true;
        wrapper = shallow(<CreateMeetupModal {...props} />);
        expect(props.toggleCreateModal).toHaveBeenCalled();
    }); */

    test('should correctly update state on input change', () => {
        wrapper = shallow(<CreateMeetupModal {...props} />);
        wrapper.find('input').at(0).simulate('change', { target: { value: 'topic' } });
        wrapper.find('textarea').simulate('change', { target: { value: 'location' } });
        wrapper.find('input').at(2).simulate('change', { target: { value: Date.now().toString() } });
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(props.clearCreateError).toHaveBeenCalled();
        expect(props.createMeetup).toHaveBeenCalled();
    });
});
