import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App';

describe('App', () => {
    test('Should maintain existing snapshot', () => {
        const component = renderer.create(
            <App />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
