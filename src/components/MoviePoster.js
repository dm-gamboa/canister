import React from 'react';
import FavBtn from './FavBtn';

const MoviePoster = (props) => (
    <div className="movie-poster">
        <img className="thumbnail" src={props.posterURL} alt="Movie Poster" />
        <FavBtn movie={props.movie} 
                favList={props.favList}
                handleChangeFavList={props.handleChangeFavList} />
    </div>
);

export default MoviePoster;