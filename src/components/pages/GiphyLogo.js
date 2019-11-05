import React, { Fragment } from 'react';
import giphy from './giphy.gif';

export default () => (
	<Fragment>
		<img
			data-testid="giphy-search-image"
			src={giphy}
			width="100%"
			alt=""
		/>
	</Fragment>
);