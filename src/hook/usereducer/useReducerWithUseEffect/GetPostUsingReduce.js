import { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    post: {},
    error: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return { loading: false, post: action.result, error: '' };
        case 'FAILURE':
            return { loading: false, post: {}, error: 'error ocured' };
        default:
            return state;
    }
};

export default function GetPostUsingRedducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'SUCCESS', result: data });
            })
            .catch(() => {
                dispatch({ type: 'FAILURE' });
            });
    }, []);

    return (
        <div>
            {state.loading ? 'LOADING.....' : state.post.title}
            {state.error || null}
        </div>
    );
}
