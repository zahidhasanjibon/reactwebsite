import React, { useReducer } from 'react';

export default function ComplexCounter() {
    const initialVal = {
        counter1: 0,
        counter2: 0
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment1':
                return { ...state, counter1: state.counter1 + action.value };
            case 'decrement1':
                return { ...state, counter1: state.counter1 - action.value };
            case 'increment2':
                return { ...state, counter2: state.counter2 + action.value };
            case 'decrement2':
                return { ...state, counter2: state.counter2 - action.value };
            default:
                return state;
        }
    };

    const [count, dispatch] = useReducer(reducer, initialVal);

    return (
        <div>
            <div>
                <p>Count = {count.counter1} </p>
                <button onClick={() => dispatch({ type: 'increment1', value: 1 })} type="button">
                    increment 1
                </button>
                <button onClick={() => dispatch({ type: 'increment1', value: 5 })} type="button">
                    increment 5
                </button>
                <br />
                <button onClick={() => dispatch({ type: 'decrement1', value: 1 })} type="button">
                    decrement 1
                </button>
                <button onClick={() => dispatch({ type: 'decrement1', value: 5 })} type="button">
                    decrement 5
                </button>
            </div>
            <br />
            <div>
                <p>Count = {count.counter2} </p>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })} type="button">
                    increment 1
                </button>
                <button onClick={() => dispatch({ type: 'increment2', value: 5 })} type="button">
                    increment 5
                </button>
                <br />
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })} type="button">
                    decrement 1
                </button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 5 })} type="button">
                    decrement 5
                </button>
            </div>
        </div>
    );
}
