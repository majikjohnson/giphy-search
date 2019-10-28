import React, { useEffect, useState } from 'react';
import GiphyItem from './GiphyItem';

const GiphyContainer = props => {
	const [results, setResults] = useState([]);
	const { searchTerm } = props;

	useEffect(() => {
		async function fetchData() {
			const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;
			try {
				const res = await fetch(
					`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchTerm}&limit=20&rating=G`
				);
				const json = await res.json();
				console.log({ json });
				setResults(
					json.data.map(item => {
						return {
							id: item.id,
							url: item.images.preview.mp4,
						};
					})
				);
			} catch (error) {}
		}
		if (searchTerm !== '') {
			fetchData();
		}
	}, [searchTerm]);

	return (
		<div className="row">
			{results.length > 0
				? results.map(result => (
						<GiphyItem key={result.id} url={result.url} />
				  ))
				: 'Enter a search term'}
		</div>
	);
};

export default GiphyContainer;
