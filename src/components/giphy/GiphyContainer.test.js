import React from 'react';
import { render, waitForElement } from '@testing-library/react';
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
		console.error = jest.fn(); //to suppress the known error to unstable_flushDiscreteUpdates
		const giphyData = getGiphyData();
		fetch.mockResponse(JSON.stringify(giphyData));

		const { getByPlaceholderText, getByText, getByTestId } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(
			getByPlaceholderText('Enter your search term...'),
			'test'
		);
		userEvent.click(getByText('Search'));

		//Assert
		await waitForElement(() => getByTestId('giphy-card'));
		expect(getByTestId('giphy-title')).toHaveTextContent(
			giphyData.data[0].title
		);
		expect(console.error.mock.calls.length).toBe(1); //check that console error is only called the expect number of times
	});

	it('displays two Giphy results', async () => {
		//Arrange
		console.error = jest.fn(); //to suppress the known error to unstable_flushDiscreteUpdates
		const giphyData = getGiphyData(2);
		fetch.mockResponse(JSON.stringify(giphyData));

		const { getByPlaceholderText, getByText, findAllByTestId } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(
			getByPlaceholderText('Enter your search term...'),
			'test'
		);
		userEvent.click(getByText('Search'));

		//Assert
		const giphyCards = await findAllByTestId('giphy-card');
		expect(giphyCards).toHaveLength(2);
		expect(giphyCards[0]).toHaveTextContent(giphyData.data[0].title);
		expect(giphyCards[1]).toHaveTextContent(giphyData.data[1].title);
		expect(console.error.mock.calls.length).toBe(2); //check that console error is only called the expect number of times
	});

	it('displays three Giphy results', async () => {
		//Arrange
		console.error = jest.fn(); //to suppress the known error to unstable_flushDiscreteUpdates
		const giphyData = getGiphyData(3);
		fetch.mockResponse(JSON.stringify(giphyData));

		const { getByPlaceholderText, getByText, findAllByTestId } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(
			getByPlaceholderText('Enter your search term...'),
			'test'
		);
		userEvent.click(getByText('Search'));

		//Assert
		const giphyCards = await findAllByTestId('giphy-card');
		expect(giphyCards).toHaveLength(3);
		expect(giphyCards[0]).toHaveTextContent(giphyData.data[0].title);
		expect(giphyCards[1]).toHaveTextContent(giphyData.data[1].title);
		expect(giphyCards[2]).toHaveTextContent(giphyData.data[2].title);
		expect(console.error.mock.calls.length).toBe(3); //check that console error is only called the expect number of times
	});

	it('displays 42 Giphy results', async () => {
		//Arrange
		console.error = jest.fn(); //to suppress the known error to unstable_flushDiscreteUpdates
		const giphyData = getGiphyData(42);
		fetch.mockResponse(JSON.stringify(giphyData));

		const { getByPlaceholderText, getByText, findAllByTestId } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(
			getByPlaceholderText('Enter your search term...'),
			'test'
		);
		userEvent.click(getByText('Search'));

		//Assert
		const giphyCards = await findAllByTestId('giphy-card');
		expect(giphyCards).toHaveLength(42);
		expect(giphyCards[0]).toHaveTextContent(giphyData.data[0].title);
		expect(giphyCards[20]).toHaveTextContent(giphyData.data[20].title);
		expect(giphyCards[41]).toHaveTextContent(giphyData.data[41].title);
		expect(console.error.mock.calls.length).toBe(42); //check that console error is only called the expect number of times
	});

	it('displays an error if Giphy API is unreachable', async () => {
		//Arrange
		fetch.mockReject(new Error('fake error message'));

		const { getByPlaceholderText, getByText, findByText } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(
			getByPlaceholderText('Enter your search term...'),
			'test'
		);
		userEvent.click(getByText('Search'));

		//Assert
		await findByText('Unable to get Giphys. Please try again.');
	});

	it('displays a message if no search results are found', async () => {
		//Arrange
		const giphyData = getGiphyData(0);
		fetch.mockResponse(JSON.stringify(giphyData));

		const { getByPlaceholderText, getByText, findByText } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(
			getByPlaceholderText('Enter your search term...'),
			'empty result set'
		);
		userEvent.click(getByText('Search'));

		//Assert
		await findByText('There are no Giphys for your search term.');
	});

	it('displays a spinner while the Giphys are being retrieved', async () => {
		//Arrange
		console.error = jest.fn(); //to suppress the known error to unstable_flushDiscreteUpdates
		const giphyData = getGiphyData();
		//insert a 100ms delay in the mock response so we can be sure that the spinner will display when we expect it to.
		fetch.mockResponse( () => new Promise(resolve => setTimeout(() => resolve({ body: JSON.stringify(giphyData) }), 100)));

		const { getByPlaceholderText, getByText, getByTestId } = render(
			<SearchState>
				<Searchbar />
				<GiphyContainer />
			</SearchState>
		);

		//Act
		await userEvent.type(
			getByPlaceholderText('Enter your search term...'),
			'test'
		);
		userEvent.click(getByText('Search'));

		//Assert
		//Check that the spinner is displayed for some time
		await waitForElement(() => getByTestId('spinner'));
		//check that the giphy eventually loads
		await waitForElement(() => getByTestId('giphy-card'));

		expect(console.error.mock.calls.length).toBe(1); //check that console error is only called the expect number of times
	});
});
