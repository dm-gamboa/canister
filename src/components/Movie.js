import React, { useState, useEffect } from 'react';
import getTheDeets from '../utilities/getTheDeets';
import {setStorage, getStorage} from '../utilities/storageMaker';
import MoviePoster from './MoviePoster';
import MovieInfo from './MovieInfo';
import Rating from './Rating';

const Movie = (props) => {
    // -------------------------------------
    // # Favourites
    // -------------------------------------

    let favListStorage = getStorage();

    if(favListStorage === false){
        favListStorage = [];
        setStorage(favListStorage);
    }

    const [favList, setFavList] = useState(favListStorage);

    const handleChangeFavList = (newFavList) => {
        setFavList(newFavList);
        setStorage(newFavList);
    }

    // -------------------------------------


    const [movie, setMovie] = useState(props.match.params.id);
    const [md, setMovieData] = useState(null);

    useEffect(() => {
        const getMovieData = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=e5b6d06e4a6841ad3065e4384dafd691`);
            let data = await res.json();
            setMovieData(getTheDeets(data, 1));
        }
        getMovieData();
    }, [movie]);

    return (
        <main className="movie">
            <div className="title">
                <h1 className="main">{md && md[0].title} ({md && md[0].releaseDate.split(" ")[2]})</h1>
                <div className="sub">
                    <h2 className="tagline">{md && `"${md[1].tagline}"`}</h2>
                    {md && <Rating rating={md[0].rating} />}                    
                </div>{/*.sub*/}
            </div>{/*.title*/}
            <div className="content">
                {md && <MoviePoster posterURL={md[0].posterURL}
                                    movie={md[0]}
                                    favList={favList}
                                    handleChangeFavList={handleChangeFavList} />}
                {md && <MovieInfo movie={md} />}
            </div>{/*.content*/}
        </main>  
    );
}

export default Movie;


// URL: https://api.themoviedb.org/3/movie/{movieID}?api_key=e5b6d06e4a6841ad3065e4384dafd691&language=en-US