/* eslint-disable camelcase */
import React from 'react';
import classes from './Movie.module.css';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const MOVI_API = `https://www.themoviedb.org/movie/`;

const Movie = ({ data }) => {
    const { poster_path, title, vote_average, id } = data;
    return (
        <div className={classes.container}>
            <div className={classes.img}>
                <img src={IMG_API + poster_path} alt="Img" />
            </div>

            <div className={classes.innerDiv}>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>

            {/* <div className={classes.overview}>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div> */}
            <div className={classes.btn}>
                <a href={MOVI_API + id} target="blank">
                    watch
                </a>
            </div>
        </div>
    );
};
export default Movie;
