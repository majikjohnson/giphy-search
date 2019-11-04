import React from 'react';
import { render, waitForElement, getByTestId, findAllByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GiphyContainer from './GiphyContainer';
import Searchbar from './Searchbar';
import SearchState from '../../context/SearchState';
import getGiphyData from '../../utils/test/giphyGen';

describe('GiphyContainer Component', () => {
	beforeEach(() => {
		fetch.resetMocks();
	});

	it('displays single Giphy results', async () => {
		//Arrange
		const giphyData = getGiphyData();
		fetch.mockResponse(JSON.stringify(giphyData));

		const { getByPlaceholderText, getByText, getByTestId } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(getByPlaceholderText('Enter your search term...'), 'test');
		userEvent.click(getByText('Search'));

		//Assert
		await waitForElement(() => getByTestId('giphy-card'));
		expect(getByTestId('giphy-title')).toHaveTextContent(giphyData.data[0].title);
	});

	it('displays two Giphy results', async () => {
		//Arrange
		const giphyData = getGiphyData(2);
		fetch.mockResponse(JSON.stringify(giphyData));

		const { getByPlaceholderText, getByText, findAllByTestId } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(getByPlaceholderText('Enter your search term...'), 'test');
		userEvent.click(getByText('Search'));

		//Assert
		const giphyCards = await findAllByTestId('giphy-card');
		expect(giphyCards).toHaveLength(2);
		expect(giphyCards[0]).toHaveTextContent(giphyData.data[0].title);
		expect(giphyCards[1]).toHaveTextContent(giphyData.data[1].title);
		
	});
	it('displays three Giphy results', async () => {
		//Arrange
		const giphyData = getGiphyData(3);
		fetch.mockResponse(JSON.stringify(giphyData));

		const { getByPlaceholderText, getByText, findAllByTestId } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(getByPlaceholderText('Enter your search term...'), 'test');
		userEvent.click(getByText('Search'));

		//Assert
		const giphyCards = await findAllByTestId('giphy-card');
		expect(giphyCards).toHaveLength(3);
		expect(giphyCards[0]).toHaveTextContent(giphyData.data[0].title);
		expect(giphyCards[1]).toHaveTextContent(giphyData.data[1].title);
		expect(giphyCards[2]).toHaveTextContent(giphyData.data[2].title);
	});
	it.skip('displays 21 Giphy results', async () => {});
	it.skip('displays an error if Giphy API is unreachable', async () => {});
	it.skip('displays a message if no search results are found', async () => {});
	it.skip('displays a spinner while the Giphys are being retrieved', async () => {});
});
