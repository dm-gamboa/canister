import React from 'react';

const featuredOptions = ['Now Playing', 'Popular', 'Top Rated', 'Upcoming'];

const Featured = (props) => {

    const getOptions = (optionsArr) => {
        return optionsArr.map((option, i) => {
            return (
                <option key={i} value={option}>
                    {option}
                </option>
            );
        });
    }

    const handleChangeFeatured = (e) => {
        e.preventDefault();
        let newFeatured =  e.target.value;
        newFeatured = newFeatured.split(' ').join('_').toLowerCase();
        props.handleChangeFeatured(newFeatured);
    }

    return (
        <form className="featured">
            {console.log("hello from Featured")}
            <label htmlFor="featured">Feature by </label>
            <select onChange={handleChangeFeatured} name="featuredOpt" id="featuredOpt">
                {getOptions(featuredOptions)}
            </select>
        </form>        
    );
}

export default Featured;