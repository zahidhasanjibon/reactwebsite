import React from 'react';

function ShowCount({ counterName, count }) {
    console.log('count');
    return (
        <p>
            {counterName} is {count}
        </p>
    );
}
export default React.memo(ShowCount);
