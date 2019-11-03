import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GiphyContainer from './GiphyContainer';
import Searchbar from './Searchbar';
import SearchState from '../../context/SearchState';

const responseData = {
	data: [
		{
			id: 'gw3IWyGkC0rsazTi',
			url: 'https://giphy.com/gifs/test-gw3IWyGkC0rsazTi',
			title: 'test GIF',
			images: {
				preview: {
					mp4:
						'https://media2.giphy.com/media/gw3IWyGkC0rsazTi/giphy-preview.mp4',
				},
			},
		},
	],
};

describe('GiphyContainer Component', () => {
	beforeEach(() => {
		fetch.resetMocks();
	});

	it('displays single Giphy results', async () => {
		//Arrange
		fetch.mockResponse(JSON.stringify(responseData));

		const { getByPlaceholderText, getByText } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(getByPlaceholderText('Enter your search term...'), 'test');
		userEvent.click(getByText('Search'));

		//Assert
		await waitForElement(() => getByText('test GIF'));
	});

	it.skip('displays two Giphy results', async () => {});
	it.skip('displays three Giphy results', async () => {});
	it.skip('displays 21 Giphy results', async () => {});
	it.skip('displays an error if Giphy API is unreachable', async () => {});
	it.skip('displays a message if no search results are found', async () => {});
	it.skip('displays a spinner while the Giphys are being retrieved', async () => {});
});
