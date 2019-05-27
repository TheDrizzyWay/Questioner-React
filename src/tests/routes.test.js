import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../routes';

describe('<Routes />', () => {
    test('should render successfully without crashing', () => {
        const wrapper = shallow(<Routes />);
        expect(wrapper).toMatchSnapshot();
    });
});
