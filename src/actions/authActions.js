import authTypes from '../actiontypes';
const { SIGN_UP } = authTypes;

const signUp = (formObject) => ({
    type: SIGN_UP,
    payload: formObject
});

export default signUp;
