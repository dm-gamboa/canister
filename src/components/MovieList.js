import React from 'react';
import MoviePoster from './MoviePoster';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    const getMovies = (arr, i = 12) => {
        let movies = [];

        // Make sure number of movies to show does not
        // exceed list of available movies
        if(i <= arr.length){
            // Get desired number of movies from movie data array
            movies = arr.slice(0, i);
        }else{
            return;
        }

        return movies.map((item, i) => {
            return (
                <div key={i} className="movie-card">
                    <MoviePoster posterURL={item.posterURL}
                                 movie={item}
                                 favList={props.favList}
                                 handleChangeFavList={props.handleChangeFavList}/>
                    <article className="movie-info">
                        <h3> {item.title} </h3>
                        <div className="summary">
                            <Rating rating={item.rating}/>
                            <p className="genres"><h4>Genre</h4> {item.genre.join(' ')}</p> {/*.genre*/}
                            <p className="released"><h4>Released</h4> {item.releaseDate}</p> {/*.released*/}
                        </div> {/*.summary*/}
                        <Link to={`/movies/${item.id}`}><button>More</button></Link>
                    </article>
                </div>
            );
        });
    }

    return (
        <div className="movie-list">
            {getMovies(props.movieList, props.moviesToShow)}
        </div>        
    )
}

export default MovieList;