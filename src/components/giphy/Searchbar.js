import React, { useState, useContext } from 'react';
import SearchContext from '../../context/SearchContext';

const Searchbar = () => {
	const searchContext = useContext(SearchContext);
	const [query, setQuery] = useState('');

	const onChange = e => {
		setQuery(e.target.value);
	};

	const onSubmit = async e => {
		e.preventDefault();
		searchContext.getGiphys(query);
		searchContext.allowRedirect(true);
	};

	return (
		<div className="container">
			<div className="row">
				<form onSubmit={onSubmit}>
					<div className="input-field col s12">
						<i className="material-icons prefix">search</i>
						<input
							id="search"
							type="search"
							placeholder="Enter your search term..."
							required
							onChange={onChange}
						/>
						<label className="label-icon" htmlFor="search" />
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Searchbar;
