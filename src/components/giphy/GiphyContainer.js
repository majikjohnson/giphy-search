import React, { useContext } from 'react';
import GiphyItem from './GiphyItem';
import SearchContext from '../../context/SearchContext';

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
			{columns.map((row, index) => {
				return (
					<div key={index} className="col s4">
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

const GiphyContainer = () => {
	const searchContext = useContext(SearchContext);
	const { giphys } = searchContext;
	console.log(searchContext);

	return (
		<div className="row">
			{giphys.length > 0 ? renderImages(giphys) : 'Enter a search term'}
		</div>
	);
};

export default GiphyContainer;
