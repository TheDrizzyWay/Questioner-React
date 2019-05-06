import React from 'react';

const withFormError = (errorExists, component) => {
    return (
    <>
    <div>{component}</div>
    {errorExists && <div id="red">errors</div>}
    </>
    );
};

export default withFormError;
