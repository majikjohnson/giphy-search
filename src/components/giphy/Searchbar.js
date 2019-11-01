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
				<form onSubmit={onSubmit} data-testid="search-form">
					<div className="input-field col s8">
						<i className="material-icons prefix">search</i>
						<input
							id="search"
							value={query}
							type="search"
							placeholder="Enter your search term..."
							required
							onChange={onChange}
						/>
						<label className="label-icon" htmlFor="search" />
						<i className="material-icons">close</i>
					</div>
					<div className="input-field col s4">
						<button
							className="btn waves-effect waves-light blue-grey darken-1"
							type="submit"
							name="submit"
						>
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Searchbar;
