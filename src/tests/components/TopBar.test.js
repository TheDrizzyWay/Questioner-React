import React from 'react';
import { shallow } from 'enzyme';
import { TopBar } from '../../components/TopBar';

delete window.location;
window.location = { reload: jest.fn() };
const clearSpy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'clear');

const props = {
    section: 'section',
    classes: {
        sample: 'sample'
    }
};

let wrapper;

describe('<TopBar />', () => {
    it('Should render component successfully', () => {
        wrapper = shallow(<TopBar {...props} />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        wrapper = shallow(<TopBar {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should clear local storage on logout', () => {
        wrapper = shallow(<TopBar {...props} />);
        wrapper.find('WithStyles(Button)').simulate('click');
        expect(clearSpy).toHaveBeenCalled();
        expect(window.location.reload).toHaveBeenCalled();
    });
});
