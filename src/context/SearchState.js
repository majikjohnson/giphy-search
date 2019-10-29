import React, { useState } from 'react';
import SearchContext from './SearchContext';

const SearchState = props => {
	const [giphys, setGiphys] = useState([]);

	const getGiphys = async text => {
		const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;
		try {
			const res = await fetch(
				`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${text}&limit=21&rating=G`
			);
			const json = await res.json();
			console.log({ json });
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
		} catch (error) {}
	};

	return (
		<SearchContext.Provider
			value={{
				giphys: giphys,
				getGiphys,
			}}
		>
			{props.children}
		</SearchContext.Provider>
	);
};

export default SearchState;
