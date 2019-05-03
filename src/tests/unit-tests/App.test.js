import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('<App />', () => {
    it('Should render component successfully', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.length).toEqual(1);
    });
});
