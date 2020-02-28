import React, { useState, useEffect } from 'react';
import getIndex from '../utilities/getIndex';

const FavBtn = (props) => {

    const [fav, setFav] = useState(false);

    useEffect(() => {
        const isFav = (movie, favList) => {
            if(getIndex(movie, favList) === -1){
                setFav(false);
            }else{
                setFav(true);
            }
        }        
        isFav(props.movie, props.favList);
    });

    // const isFav = (movie, movieArr) => {
    //     if(getIndex(movie, movieArr) === -1){
    //         return false;
    //     }
    //     return true;
    // }

    const handleChangeFav = () => {
        // Create copy of favourites to avoid mutating React state directly
        const newFavList = [...props.favList];

        const favIndex = getIndex(props.movie, props.favList);

        if(favIndex === -1){
            // Add to favourites
            newFavList.push(props.movie);
        }else{
            // Remove from favourites
            newFavList.splice(favIndex, 1);
        }

        // Update Favourites
        props.handleChangeFavList(newFavList);
    }

    return (
        <button className="fav icon-link" onClick={handleChangeFav}>
            <span className={fav ? "fav icon icon-heart" : "icon icon-heart"}></span>
            <span className="text">{fav ? "Remove from Favourites" : "Add to Favourites" }</span>
        </button>
    );
}

export default FavBtn;