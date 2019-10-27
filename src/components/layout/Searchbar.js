import React, { useState } from 'react';

const Navbar = () => {
    const [search, setSearch] = useState('');


	const onChange = e => {
		setSearch(e.target.value);
	};

	const onSubmit = async e => {
        e.preventDefault();
        const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;
        const res = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${search}&limit=20&rating=G`);
        const data = await res.json();
        console.log(data.data[0].url);
	};

	return (
		<nav>
			<div className="nav-wrapper">
				<form onSubmit={onSubmit}>
					<div className="input-field">
						<input
							id="search"
							type="search"
							placeholder="Enter your search term..."
							required
							onChange={onChange}
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
