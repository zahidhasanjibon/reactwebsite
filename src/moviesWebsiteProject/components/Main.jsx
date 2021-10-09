import { useEffect, useState } from 'react';
import Header from './header/Header';
import Movie from './Movie/Movie';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [inp, setInp] = useState('');

    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=e7338393a8d93a2f6e42617e183f8f57&query=`;
    const handler = (e) => {
        setInp(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        fetch(`${SEARCH_API}${inp}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
        setInp('');
    };

    useEffect(() => {
        let page = 1;

        const getdata = () => {
            fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=e7338393a8d93a2f6e42617e183f8f57&language=en-US&page=${page}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setMovies((prev) => prev.concat(data.results));
                });
        };
        getdata();

        const concat = () => {
            setTimeout(() => {
                page += 1;
                console.log(page);
                getdata();
            }, 300);
        };

        window.addEventListener('scroll', () => {
            const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight) {
                concat();
            }
        });
    }, []);

    return (
        <>
            <form onSubmit={(e) => submitHandler(e)}>
                <Header value={inp} changeHandler={handler} />
            </form>

            <div className="container">
                {movies.map((movie) => (
                    <Movie key={movie.id + Math.random()} data={movie} />
                ))}
            </div>
        </>
    );
};

export default Main;
