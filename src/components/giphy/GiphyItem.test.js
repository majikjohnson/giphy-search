import React from 'react';
import { render } from '@testing-library/react';
import GiphyItem from './GiphyItem';

describe('GiphyItem Component', () => {
	it('displays the Giphy title correctly', () => {
		console.error = jest.fn(); //to suppress the known error to unstable_flushDiscreteUpdates
		
		const { getByTestId } = render(
			<GiphyItem
				title="Giphy title"
				preview="https://nacentpixels.io/preview"
			/>
		);

		expect(getByTestId('giphy-title')).toHaveTextContent('Giphy title');
		//check that console error is only called the expect number of times
		expect(console.error.mock.calls.length).toBe(1);
	});

	it('automatically plays and loops the giphy video', () => {
		console.error = jest.fn(); //to suppress the known error to unstable_flushDiscreteUpdates
		
		const { getByTestId } = render(<GiphyItem />);

		const videoPlayer = getByTestId('giphy-video-player');
		expect(videoPlayer.loop).toBe(true);
		expect(videoPlayer.muted).toBe(true);
		expect(videoPlayer.autoplay).toBe(true);
		//check that console error is only called the expect number of times
		expect(console.error.mock.calls.length).toBe(1);
	});

	it('displays the correct Giphy video', () => {
		console.error = jest.fn(); //to suppress the known error to unstable_flushDiscreteUpdates

		const { getByTestId } = render(
			<GiphyItem
				title="Giphy title"
				preview="https://nacentpixels.io/preview"
			/>
		);

		expect(getByTestId('giphy-preview-url')).toHaveAttribute(
			'src',
			'https://nacentpixels.io/preview'
		);
		//check that console error is only called the expect number of times
		expect(console.error.mock.calls.length).toBe(1);
	});
});
