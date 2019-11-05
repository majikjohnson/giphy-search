import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import getGiphyData from '../../utils/test/giphyGen';
import { createMemoryHistory } from 'history';
import SearchState from '../../context/SearchState';
import { Router } from 'react-router-dom';
import App from '../../App';

const renderApp = (path = '/') => {
	const history = createMemoryHistory();
	history.push(path);

	return render(
		<SearchState>
			<Router history={history}>
				<App />
			</Router>
		</SearchState>
	);
};

describe('App Routing', () => {
	it('displays the home page by default', () => {
		const { getByTestId } = renderApp();

        //Assert
		getByTestId('giphy-search-image');
	});

	it('displays the search page when submitting a search from the home page', async () => {
        //Arrange
        console.error = jest.fn(); //to suppress the known error to unstable_flushDiscreteUpdates
		const giphyData = getGiphyData();
		fetch.mockResponse(JSON.stringify(giphyData));

		const { getByPlaceholderText, getByText } = renderApp();
		await userEvent.type(
			getByPlaceholderText('Enter your search term...'),
			'test'
        );
        
        //Act
		userEvent.click(getByText('Search'));

        //Assert
		await waitForElement(() => getByText('Test GIF 1'));
		expect(console.error.mock.calls.length).toBe(1); //check that console error is only called the expect number of times
	});

	it('displays the home page when selecting home link from the search page', async () => {
		//Arrange
		const { getByTestId, getByText, getAllByText } = renderApp('/search');

		//Check that we are on the correct page to start with
		getByText('There are no Giphys for your search term.');

		//Act
		userEvent.click(getAllByText('Home')[0]);

		//Assert
		await waitForElement(() => getByTestId('giphy-search-image'));
	});

	it('displays the about page when selecting the about link from the desktop menu', async () => {
		//Arrange
		const { getByText, getAllByText, getByTestId } = renderApp();

		//Check that we are on the correct page to start with
		getByTestId('giphy-search-image');

		//Act
		userEvent.click(getAllByText('About')[0]);

		//Assert
		await waitForElement(() => getByText('About Giphys'));
	});

	it('displays the about page when selecting the about link from the mobile menu', async () => {
		//Arrange
		const { getByText, getAllByText, getByTestId } = renderApp();

		//Check that we are on the correct page to start with
		getByTestId('giphy-search-image');

		//Act
		userEvent.click(getAllByText('About')[1]);

		//Assert
		await waitForElement(() => getByText('About Giphys'));
	});
});
