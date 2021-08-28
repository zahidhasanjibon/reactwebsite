import React from 'react';

function Button({ incrementFunc, increNum }) {
    console.log('func call');
    return (
        <button type="button" onClick={() => incrementFunc()}>
            increment by {increNum}
        </button>
    );
}
export default React.memo(Button);
