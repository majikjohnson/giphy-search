import React from 'react';

const GiphyItem = ({ url, title, preview }) => {
	return (
		<div className="col s12">
			<div className="card-panel blue-grey darken-3">
                <div className="card-image">
				<video
					className="responsive-video center-align"
					muted
					autoPlay
					loop
					width="100%"
				>
					<source src={preview} type="video/mp4" />
				</video>
                <h5><span className="card-title white-text">{title}</span></h5>
                </div>
			</div>
		</div>
	);
};

export default GiphyItem;
