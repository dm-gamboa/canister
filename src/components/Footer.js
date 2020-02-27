import React from 'react';
import tmdbLogo from '../images/tmdb-logo.svg';

const Footer = () => {
    const d = new Date();
    const y = d.getFullYear()
    
    return (
        <footer>
            <div className="content">
                <img className="tmdb-logo" src={tmdbLogo} alt="TMDb logo"/>
                <div className="text">
                    <a href="#0">Credits</a>
                    <span className="copyright">&copy;{y} Donna Gamboa</span>
                </div>{/*.text*/}
            </div> {/*.content*/}
        </footer>
    );
}

export default Footer;