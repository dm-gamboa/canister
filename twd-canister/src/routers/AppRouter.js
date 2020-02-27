// # Imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// ## Components
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// ## Pages
import Home from '../components/Home';
import Search from '../components/Search';
import Discover from '../components/Discover';
import Movie from '../components/Movie';
import Favourites from '../components/Favourites';
import About from '../components/About';
import Error from '../components/Error';


const AppRouter = () => (
	<Router>
		<div className="wrapper">
			<Header />
			<Nav />
			<Switch>
				<Route path="/" exact><Home /></Route>
				<Route path="/favourites"><Favourites /></Route>
				<Route path="/about" exact><About /></Route>
				<Route path="/movies/:id" component={Movie} />
				<Route path="/search/:query" component={Search} />
				<Route><Error /></Route>
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default AppRouter;
