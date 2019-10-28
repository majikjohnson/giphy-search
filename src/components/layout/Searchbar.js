import React from 'react';

const Navbar = props => {
	return (
		<nav>
			<div className="nav-wrapper">
				<form onSubmit={props.onSubmit}>
					<div className="input-field">
						<input
							id="search"
							type="search"
							placeholder="Enter your search term..."
							required
							onChange={props.onChange}
						/>
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
