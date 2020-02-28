import React, { useState } from 'react';
import MovieList from './MovieList';
import {setStorage, getStorage} from '../utilities/storageMaker';

const Favourites = (props) => {
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

    return (
        <main className="favourites">
            <h1 className="title">My Favourites</h1>
            <MovieList movieList={favList} moviesToShow={favList.length} favList={favList} handleChangeFavList={handleChangeFavList}/>
        </main>        
    );

}

export default Favourites;