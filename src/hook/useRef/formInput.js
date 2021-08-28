import React from 'react';

function FormInput({ type, placeholder }, ref) {
    return <input ref={ref} type={type} placeholder={placeholder} />;
}
const forwarded = React.forwardRef(FormInput);

export default forwarded;
