import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../../App';

describe('App', () => {
    it('Should render component successfully', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.length).toEqual(1);
    });

    test('Should maintain existing snapshot', () => {
        const component = renderer.create(
            <App />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
