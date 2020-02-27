import placeholderPoster from '../images/placeholder-poster.jpg';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const genres = [
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

function filterMovie(arr, i){
    return (
        arr.reduce((result, item, j) => {
            if( j < i ){
                result.push({ 
                    title: item.original_title,
                    posterURL: item.poster_path,
                    rating: item.vote_average,
                    genre: item.genre_ids,
                    releaseDate: item.release_date,
                    id: item.id
                });
                if(i == 1){
                    result.push({
                        genres: item.genres,
                        overview: item.overview,
                        tagline: item.tagline,
                        runtime: item.runtime
                    })
                }
            }
            return result;
        }, [])
    )
}

function setPosterURL(obj){
    if(obj.posterURL){
        const baseURL = 'http://image.tmdb.org/t/p/w400/';
        obj.posterURL = baseURL + obj.posterURL;
    }else{
        obj.posterURL = placeholderPoster;
    }
}

function setGenre(obj, i){
    let genreNames = [];

    if( obj.genres ){
        obj.genres.forEach( genre => genreNames.push(genre.name));
    }else if (i > 1) {
        obj.genre.forEach(id => {
            genres.forEach(genre => {
                if( genre.id === id ){
                    genreNames.push(genre.name);
                }
            });
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
    if(i == 1){
        tmdbAPI = [tmdbAPI];
    }

    tmdbAPI = filterMovie(tmdbAPI, i);
    tmdbAPI.forEach((item, j) => {
        setPosterURL(item);
        setGenre(item, i);
        setReleaseDate(item);
        return tmdbAPI[j];
    });

    return tmdbAPI;
}

export default getTheDeets;