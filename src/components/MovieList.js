import React from 'react';
import MoviePoster from './MoviePoster';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    const getMovies = (arr) => {
        return arr.map((item, i) => {
            return (
                <div key={i} className="movie-card">
                    <MoviePoster posterURL={item.posterURL}
                                 movie={item}
                                 favList={props.favList}
                                 handleChangeFavList={props.handleChangeFavList}/>
                    <article className='movie-info'>
                        <h3> {item.title} </h3>
                        <div className='summary'>
                            <p className='rating'><h4>Rating</h4> {item.rating} </p> {/*.rating*/}
                            <p className='genres'><h4>Genre</h4> {item.genre.join(' ')}</p> {/*.genre*/}
                            <p className='released'><h4>Released</h4> {item.releaseDate}</p> {/*.released*/}
                        </div> {/*.summary*/}
                        <Link to={`/movies/${item.id}`}><button>More</button></Link>
                    </article>
                </div>
            );
        });
    }

    return (
        <div className="movie-list">
            {getMovies(props.movieList)}
        </div>        
    )
}

export default MovieList;