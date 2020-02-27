import React from 'react';
import { withRouter } from 'react-router-dom';

const SearchBar = (props) => {

    const getQuery = (e) => {
        e.preventDefault();

        // Format input correctly
        let query =  encodeURI(e.target.elements.query.value.trim());
        
        // If input is not blank
        if(query){
            // Redirect to Search Results page
            props.history.push(`/search/${query}`);
        }else{
            return;
        }
    }

    return (
        <form className="search-bar" onSubmit={getQuery}>
            <input type="text" name="query" id="query" placeholder="Search the database" />
            <button type="submit" class="icon-link">
                <span className="icon icon-search"></span>
            </button>
        </form>
    );
}

export default withRouter(SearchBar);