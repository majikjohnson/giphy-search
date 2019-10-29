import React from 'react';

const Searchbar = props => {
	return (
		<div className="container">
			<div className="row">
				<form onSubmit={props.onSubmit}>
					<div className="input-field col s12">
					<i className="material-icons prefix">search</i>
						<input
							id="search"
							type="search"
							placeholder="Enter your search term..."
							required
							onChange={props.onChange}
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
