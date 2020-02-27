import React, { useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Featured from './Featured';
import getTheDeets from '../utilities/getTheDeets';
import {setStorage, getStorage} from '../utilities/storageMaker';

const Home = (props) => {
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
    // # Featured Movies
    // -------------------------------------

    const [md, setMovieData] = useState(null);
    const [featured, setFeatured] = useState(props.featured);
    const [mts, setMoviesToShow] = useState(props.moviesToShow);
    
    useEffect(() => {
        const getMovieData = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${featured}?api_key=e5b6d06e4a6841ad3065e4384dafd691&language=en-US&page=1`);
            let data = await res.json();
            setMovieData(getTheDeets(data.results, mts));
        }        
        getMovieData();
    }, [md]);

    const handleChangeFeatured = (selection) => {
        setFeatured(selection);
    }

    // -------------------------------------

    return (
        <main className="home">
            <section className="landing">
                <div className="content">
                    <div className="title">
                        <h1>Canister</h1>
                        <img src={logo} alt="Canister logo"/>
                        <h2>An online movie database.</h2>
                    </div> {/*.title*/}

                    <div className="cta">
                        <SearchBar />
                        <span class="or">or</span>
                        <button class="discover">Discover</button>
                    </div> {/*.cta*/}
                </div> {/*.content*/}

            </section> {/*.landing*/}

            <section className="featured">
                <h2>{featured.split('_').join(' ').toUpperCase()}</h2>
                <Featured handleChangeFeatured={handleChangeFeatured}/>
                {md && <MovieList movieList={md} favList={favList} handleChangeFavList={handleChangeFavList}/>}
            </section>{/*.featured*/}
        </main>        
    );

}

Home.defaultProps = {
    featured: 'now_playing',
    moviesToShow: 12
}

export default Home;

// Now Playing API URL: https://api.themoviedb.org/3/movie/${featured}?api_key=e5b6d06e4a6841ad3065e4384dafd691&language=en-US&page=1