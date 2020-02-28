import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import getTheDeets from '../utilities/getTheDeets';
import {setStorage, getStorage} from '../utilities/storageMaker';

const Search = (props) => {
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


    // -------------------------------------
    // # Search
    // -------------------------------------

    const [query, setQuery] = useState(props.match.params.query);
    const [mts, setMoviesToShow] = useState(props.moviesToShow);
    const [sr, setSearchResults] = useState(null);

    useEffect(() => {
        const getSearchResults = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e5b6d06e4a6841ad3065e4384dafd691&language=en-US&query=${query}&page=1&include_adult=false`);
            let data = await res.json();
            setSearchResults(getTheDeets(data.results, mts));
        }        
        getSearchResults();
    }, [query]);

    // -------------------------------------


    return (
        <main className="search">
            <h1 className="title">Search Results</h1>
            <p>You searched for: {query}</p>
            {sr && <MovieList movieList={sr} moviesToShow={mts} favList={favList} handleChangeFavList={handleChangeFavList}/>}
        </main>
    );
}

Search.defaultProps = {
    moviesToShow: 12
}

export default Search;

// API URL: https://api.themoviedb.org/3/search/movie?api_key=e5b6d06e4a6841ad3065e4384dafd691&language=en-US&query={query}&page=1&include_adult=false