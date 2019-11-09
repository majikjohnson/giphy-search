import React, { useState } from 'react';
import SearchContext from './SearchContext';

const SearchState = props => {
	const [giphys, setGiphys] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(false);
	const [redirect, setRedirect] = useState(false);
	const [error, setError] = useState(false);

	const getGiphys = async text => {
		const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;
		setSearchTerm(text);
		setLoading(true);
		setError(false);
		try {
			const res = await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${text}&limit=42&rating=G`
			);
			//console.log(res);
			const json = await res.json();
			//console.log(json);
			setGiphys(
				json.data.map(item => {
					return {
						id: item.id,
						url: item.url,
						title: item.title,
						preview: item.images.preview.mp4,
					};
				})
			);
		} catch (error) {
			setError(true);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const allowRedirect = value => setRedirect(value);

	return (
		<SearchContext.Provider
			value={{
				giphys: giphys,
				searchTerm: searchTerm,
				loading: loading,
				redirect: redirect,
				error: error,
				getGiphys,
				allowRedirect,
			}}
		>
			{props.children}
		</SearchContext.Provider>
	);
};

export default SearchState;
