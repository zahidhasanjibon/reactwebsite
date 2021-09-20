import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideosList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        async function fetchVideos() {
            const db = getDatabase();
            const videosRef = ref(db, 'videos');
            const videoQuery = query(videosRef, orderByKey());

            try {
                setLoading(true);
                setError(false);

                // request firebase database
                const snapshot = await get(videoQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setVideos((prevVideos) => [...prevVideos, ...Object.values(snapshot.val())]);
                } else {
                    console.log('jani na');
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(false);
            }
        }
        fetchVideos();
    }, []);

    return {
        loading,
        error,
        videos
    };
}
