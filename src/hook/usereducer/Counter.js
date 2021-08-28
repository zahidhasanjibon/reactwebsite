import React, { useReducer } from 'react';

export default function Counter() {
    const initialState = 0;

    const reduce = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            default:
                return state;
        }
    };

    const [count, dispatch] = useReducer(reduce, initialState);

    return (
        <div>
            <p>Count = {count}</p>
            <button onClick={() => dispatch('increment')} type="button">
                increment
            </button>
            <button onClick={() => dispatch('decrement')} type="button">
                decrement
            </button>
        </div>
    );
}
