import React from 'react';
import { shallow } from 'enzyme';
import { TopBar } from '../../components/TopBar';

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
});
