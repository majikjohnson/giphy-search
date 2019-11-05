import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchState from './context/SearchState';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<SearchState>
		<Router>
			<App />
		</Router>
	</SearchState>,
	document.getElementById('root')
);
