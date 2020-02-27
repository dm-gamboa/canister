import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const Nav = () => (
    <nav className="main">
        <ul>
            {/* <li><SearchBar compact='true'/></li> */}
            <li><NavLink to='/' exact><Icon icon='home' />Home</NavLink></li>
            <li><NavLink to='/favourites'><Icon icon='heart' />Favourites</NavLink></li>
            <li><NavLink to='/about' exact><Icon icon='info' />About</NavLink></li>
        </ul>
    </nav>
);

export default Nav;