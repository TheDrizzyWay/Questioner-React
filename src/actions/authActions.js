export const SIGN_UP = 'SIGN_UP';

export const signUp = (formObject) => ({
    type: SIGN_UP,
    payload: formObject
});
