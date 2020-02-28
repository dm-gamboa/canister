import placeholderPoster from '../images/placeholder-poster.jpg';
import getIndex from './getIndex';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const tmdbGenres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
    ];

function getInfo(arr, i){
    let info = [];

    info = arr.map((item) => {
        return (
            {
                title: item.original_title,
                posterURL: item.poster_path,
                rating: item.vote_average,
                genre: item.genre_ids, // Not available in single movie query
                releaseDate: item.release_date,
                id: item.id                
            }
        );

    })

    // If single movie query
    if( i === 1 ){
        // Create a second object with additional info
        // And add to info array
        info.push(
            {
                genres: arr[0].genres,
                overview: arr[0].overview,
                tagline: arr[0].tagline,
                runtime: arr[0].runtime
            }
        )
    }

    return info;
}

function setPosterURL(obj){
    if(obj.posterURL){
        const baseURL = 'http://image.tmdb.org/t/p/w400/';
        obj.posterURL = baseURL + obj.posterURL;
    }else{ // No poster available
        obj.posterURL = placeholderPoster;
    }
}

function setRating(obj){
    obj.rating = (obj.rating*10) + "%";
}

function setGenre(obj, i){
    let genreNames = [];

    if(obj.genres){ // Single movie queries
        obj.genres.forEach( genre => genreNames.push(genre.name) );
    }else if (i > 1) { // Multiple movie queries
        obj.genre.forEach(genreID => {
            const genreName = tmdbGenres[getIndex(genreID, tmdbGenres, "var")].name;
            genreNames.push(genreName);
        });
    }

    obj.genre = genreNames;
}

function setReleaseDate(obj){
    let date = new Date(obj.releaseDate);

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    obj.releaseDate = `${day} ${month} ${year}`;
}

function getTheDeets(tmdbAPI, i){
    // If single movie query
    if(i === 1){
        // Convert object to array
        tmdbAPI = [tmdbAPI];
    }

    tmdbAPI = getInfo(tmdbAPI, i);
    tmdbAPI.forEach((item, j) => {
        setPosterURL(item);
        setRating(item);
        setGenre(item, i);
        setReleaseDate(item);
        return tmdbAPI[j];
    });

    return tmdbAPI;
}

export default getTheDeets;