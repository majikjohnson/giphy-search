import React, { useContext, useEffect } from 'react';
import Searchbar from '../giphy/Searchbar';
import GiphyLogo from './GiphyLogo';
import SearchContext from '../../context/SearchContext';

const Home = ({ history }) => {
	const searchContext = useContext(SearchContext);
	const { searchTerm } = searchContext;

	useEffect(() => {
		if (searchTerm !== '') {
			history.push('/Search');
		}
	});

	return (
		<div className="container">
			<div className="section">
				<div className="row">
					<div className="col s12 center-align">
						<GiphyLogo />
					</div>
					<div className="col s12">
						<Searchbar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
