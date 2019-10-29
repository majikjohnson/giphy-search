import React, { useEffect, useState } from 'react';
import GiphyItem from './GiphyItem';

// chunkArray will split the given array into the given number of chunks
// Each "chunk" will be a new array
const chunkArray = (orginalArray, chunkSize) => {
	let chunkedArrays = [];

	while (orginalArray.length) {
		chunkedArrays.push(orginalArray.splice(0, chunkSize));
	}

	return chunkedArrays;
};

const renderImages = results => {
    // We have three column and want an even number of Giphy results in each.
    // We therefore want to divide the number of search results by three to 
    // determine how many search results we will put in each column
	const columns = chunkArray(results, results.length / 3);
	return (
		<>
			{columns.map(row => {
				return (
					<div className="col s4">
						{row.map(result => (
							<GiphyItem
								key={result.id}
								url={result.url}
								title={result.title}
								preview={result.preview}
							/>
						))}
					</div>
				);
			})}
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
