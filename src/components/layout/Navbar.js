import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css";
const Navbar = () => {

	useEffect(() => {
		M.AutoInit();
	})

	return (
		<Fragment>
			<nav className="blue-grey darken-4">
				<div className="container">
					<div className="nav-wrapper">
						<a href="#!" className="brand-logo">
							<i className="material-icons">
								sentiment_very_satisfied
							</i>
							Giphys
						</a>
						<a href="#!" data-target="mobile-menu" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><a href="https://www.testingninja.com">Testing Ninja</a></li>
						</ul>
					</div>
				</div>
			</nav>

			<ul className="sidenav blue-grey darken-4" id="mobile-menu">
				<li><Link className="white-text" to="/">Home</Link></li>
				<li><Link className="white-text" to="/about">About</Link></li>
				<li>
					<a className="white-text" href="https://www.testingninja.com">
						Testing Ninja
					</a>
				</li>
			</ul>
		</Fragment>
	);
};

export default Navbar;
