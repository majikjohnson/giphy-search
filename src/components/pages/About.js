import React, { Fragment } from 'react';

const About = () => {
	return (
		<Fragment>
			<h5>About Giphys</h5>
			<p>
				Giphys is a basic React app, created primary for contructing a{' '}
				<a href="#!">blog posting</a> on how to construct a CI/CD
				pipeline using GitHub, Travis CI and Heroku.
			</p>
			<p>
				The repository for this app can be found on my{' '}
				<a href="https://github.com/majikjohnson/giphy-search">
					GitHub page
				</a>
				.
			</p>
		</Fragment>
	);
};

export default About;
