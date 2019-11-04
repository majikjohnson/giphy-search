const getGiphyData = (quantity = 1) => {
	let giphys = [];

	for (let i = 0; i < quantity; i++) {
		const id = Math.random().toString(36).substr(2);
		giphys[i] = {
			id: id,
			url: `https://giphy.com/gifs/test-${id}`,
			title: `Test GIF ${i + 1}`,
			images: {
				preview: {
					mp4: `https://media2.giphy.com/media/${id}/giphy-preview.mp4`,
				},
			},
		};
	}

	return {
        data: giphys
    }
};

export default getGiphyData;
