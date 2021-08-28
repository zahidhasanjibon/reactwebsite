import { useEffect, useState } from 'react';

export default function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setPost(data);
                setError('');
            })
            .catch(() => {
                setLoading(false);
                setPost({});
                setError('error occured');
            });
    }, []);

    return (
        <div>
            <p>{loading ? 'Loading .....' : post.title}</p>
            <p>{error || null}</p>
        </div>
    );
}
