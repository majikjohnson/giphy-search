import React, { Fragment } from 'react';
import Searchbar from '../giphy/Searchbar';
import GiphyContainer from '../giphy/GiphyContainer';

const Search = () => {
	return (
		<Fragment>
			<Searchbar />
			<GiphyContainer />
		</Fragment>
	);
};

export default Search;
