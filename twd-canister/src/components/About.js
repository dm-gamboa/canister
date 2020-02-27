import React from 'react';

const About = () => (
    <main className="about">
        <h1 className="title">About</h1>
        <section className="info">
            <h2>This App</h2>
            <article>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas natus magni dicta, fugiat eaque error sint velit! Minus accusamus quisquam nam possimus! Nostrum hic totam temporibus laudantium dolorem aspernatur doloremque? </article> {/*.text*/}
        </section>{/*.info*/}
        
        <section className="credits">
            <h2>Credits</h2>
            <ul>
                <li>This product uses the TMDb API but is not endorsed or certified by TMDb.</li>
                <li>Icons by <a href="http://fontello.com/">Fontello</a> and <a href="https://www.flaticon.com/">Flaticon</a></li>
            </ul>
        </section>{/*.credits*/}
    </main>
);

export default About;