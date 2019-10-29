import React, { useEffect, useState } from 'react';
import GiphyItem from './GiphyItem';

const chunkArray = (myArray, chunk_size) => {
	let results = [];

	while (myArray.length) {
		results.push(myArray.splice(0, chunk_size));
	}

	return results;
};

const renderImages = results => {
	const sections = chunkArray(results, 7);
	return (
		<>
			<div className="col s4">
				{sections[0].map(result => (
					<GiphyItem key={result.id} url={result.url} title={result.title} preview={result.preview} />
				))}
			</div>
			<div className="col s4">
				{sections[1].map(result => (
					<GiphyItem key={result.id} url={result.url} title={result.title} preview={result.preview} />
				))}
			</div>
			<div className="col s4">
				{sections[2].map(result => (
					<GiphyItem key={result.id} url={result.url} title={result.title} preview={result.preview} />
				))}
			</div>
		</>
	);
};

const GiphyContainer = props => {
	const [results, setResults] = useState([]);
	const { searchTerm } = props;

	useEffect(() => {
		async function fetchData() {
			const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;
			try {
				const res = await fetch(
					`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchTerm}&limit=21&rating=G`
				);
				const json = await res.json();
				console.log({ json });
				setResults(
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
		}
		if (searchTerm !== '') {
			fetchData();
		}
	}, [searchTerm]);

	return (
		<div className="row">
			{results.length > 0 ? renderImages(results) : 'Enter a search term'}
		</div>
	);
};

export default GiphyContainer;
