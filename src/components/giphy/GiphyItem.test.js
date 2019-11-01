import React from 'react';
import { render } from '@testing-library/react';
import GiphyItem from './GiphyItem';

describe('GiphyItem Component', () => {
	it('displays the Giphy title correctly', () => {
		const { getByTestId } = render(
			<GiphyItem
				title="Giphy title"
				preview="https://nacentpixels.io/preview"
			/>
    );
    
		expect(getByTestId('giphy-title')).toHaveTextContent('Giphy title');
	});

	it('automatically plays and loops the giphy video', () => {
		const { getByTestId } = render(<GiphyItem />);

		const videoPlayer = getByTestId('giphy-video-player');
		expect(videoPlayer.loop).toBe(true);
		expect(videoPlayer.muted).toBe(true);
		expect(videoPlayer.autoplay).toBe(true);
	});

	it('displays the correct Giphy video', () => {
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
	});
});
