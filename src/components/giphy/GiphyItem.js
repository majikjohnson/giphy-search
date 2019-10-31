import React from 'react';

const GiphyItem = ({ title, preview, url }) => {
	return (
		<div className="col s12">
			<div className="card-panel blue-grey darken-3">
				<div className="card-image">
					<video
						data-testid="giphy-video-player"
						className="responsive-video center-align"
						muted
						autoPlay
						loop
						width="100%"
					>
						<source data-testid="giphy-preview-url" src={preview} type="video/mp4" />
					</video>
					<h6>
						<span data-testid="giphy-title" className="card-title white-text">{title}</span>
					</h6>
				</div>
			</div>
		</div>
	);
};

export default GiphyItem;
