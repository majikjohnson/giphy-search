import React, { Fragment, useEffect, useContext } from 'react';
import Searchbar from '../giphy/Searchbar';
import GiphyContainer from '../giphy/GiphyContainer';
import SearchContext from '../../context/SearchContext';

const Search = () => {
	const searchContext = useContext(SearchContext);
	const { allowRedirect } = searchContext;

	useEffect(() => {
		allowRedirect(false);
	})

	return (
		<Fragment>
			<Searchbar />
			<GiphyContainer />
		</Fragment>
	);
};

export default Search;
