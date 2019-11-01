// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
//global.fetch = require('jest-fetch-mock');

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

global.fetch = jest.fn(() => {
    Promise.resolve({
        ok: true,
        json: () => responseData
    })
})
