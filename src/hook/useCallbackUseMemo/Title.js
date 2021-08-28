import React from 'react';

function Title() {
    console.log('title');
    return <h1>UseCallback Hook Tutorial</h1>;
}

export default React.memo(Title);
