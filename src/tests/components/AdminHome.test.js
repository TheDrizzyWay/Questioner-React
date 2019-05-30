import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { AdminHome } from '../../components/AdminHome';

const props = {
    isLoading: false,
    meetups: [],
    getMeetups: jest.fn()
};

let wrapper;

describe('<AdminHome />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<AdminHome {...props} />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<AdminHome {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should get meetups on mount', () => {
        props.isLoading = true;
        props.meetups = { paginatedResult:
          [{
              id: 1,
              topic: 'sample topic',
              image: 'image'
          }]
        };
        wrapper = mount(<Router><AdminHome {...props} /></Router>);
        expect(props.getMeetups).toHaveBeenCalled();
        expect(wrapper.exists('MeetupCard')).toEqual(true);
        expect(wrapper.exists('Spinner')).toEqual(true);
    });
});
