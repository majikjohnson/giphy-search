import React from 'react';

const GiphyItem = ({ url }) => {
	return (
		<div className="col s4">
			<div className="card-panel red darken-1">
				<video
					className="responsive-video center-align"
					muted
					autoPlay
					loop
                    width="100%"
				>
					<source src={url} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default GiphyItem;
