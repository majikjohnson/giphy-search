import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GiphyContainer from './GiphyContainer';
import Searchbar from './Searchbar';
import SearchState from '../../context/SearchState';
//import fetchMock from 'fetch-mock';

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
		//fetch.resetMocks();
		//fetchMock.reset();
	});
	it('displays Giphy results', async () => {
		//Arrange
		 /* fetch.mockResponse(
			JSON.stringify({
                "data": [{
                  "id": "gw3IWyGkC0rsazTi",
                  "url": "https://giphy.com/gifs/test-gw3IWyGkC0rsazTi",
                  "title": "test GIF",
                  "images": {
                    "preview": {
                      "mp4": "https://media2.giphy.com/media/gw3IWyGkC0rsazTi/giphy-preview.mp4"
                    }
                  }
                }]
              })
        ); */

		//fetchMock.get(
	//		'begin:http://api.giphy.com/v1/gifs/search',
	//		responseData
	//	);

		const { getByPlaceholderText, getByText, getByTestId } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);
		const searchInput = getByPlaceholderText('Enter your search term...');

		//Act
		//act(() => {
		userEvent.type(searchInput, 'test');
		userEvent.click(getByText('Search'));
		//});

		await waitForElement(() => getByTestId('spinner'));
		await waitForElement(() => getByText('test GIF'));
	});
});
