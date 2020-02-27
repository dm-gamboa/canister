import React from 'react';

const FavBtn = (props) => {
    const getFavIndex = (movie, movieArr) => {        
        // Test if selected movie is in Favourites
        const movieMatch = (favMovie) => favMovie.id === props.movie.id;
        // Get index of selected movie in Favourites
        const favIndex = props.favList.findIndex(movieMatch);

        return favIndex;
    }

    const isFav = (movie, movieArr) => {
        if(getFavIndex(movie, movieArr) === -1){
            return false;
        }
        return true;
    }

    const handleChangeFav = () => {
        // Create copy of favourites to avoid mutating React state directly
        const newFavList = [...props.favList];

        const favIndex = getFavIndex(props.movie, props.favList);

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
            {isFav(props.movie, props.favList) ? <span className="icon icon-heart"></span> : <span className="icon icon-heart-empty"></span>}
            {isFav(props.movie, props.favList) ? <span className="text">Remove from Favourites</span> : <span className="text">Add to Favourites</span>}
        </button>
    );
}

export default FavBtn;