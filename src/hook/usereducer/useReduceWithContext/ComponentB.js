import React, { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { counterContext } from '../../../App';

export default function ComponentB() {
    const context = useContext(counterContext);

    return (
        <div>
            <p>Component A</p>
            <button type="button" onClick={() => context.countDispatch('increment')}>
                increment
            </button>
            <button type="button" onClick={() => context.countDispatch('decrement')}>
                decrement
            </button>
        </div>
    );
}
