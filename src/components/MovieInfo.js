import React, { useState } from 'react';

const Movie = (props) => {
    return (
        <article>
                <p className='rating'><h4>Rating</h4> {props.movie[0].rating} </p> {/*.rating*/}
                <p className='genres'><h4>Genre</h4> {props.movie[1].genre.join(' ')}</p> {/*.genre*/}
                <p className='released'><h4>Released</h4> {props.movie[0].releaseDate}</p> {/*.released*/}
                <p className='released'><h4>Runtime</h4> {props.movie[1].runtime} min</p> {/*.runtime*/}
                <p className='overview'>{props.movie[1].overview}</p> {/*.released*/}
        </article>
    );
}

export default Movie;


// URL: https://api.themoviedb.org/3/movie/{movieID}?api_key=e5b6d06e4a6841ad3065e4384dafd691&language=en-US