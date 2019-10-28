import React, { useState } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/layout/Searchbar';
import GiphyContainer from './components/giphy/GiphyContainer';

function App() {
	const [query, setQuery] = useState('');
	const [search, setSearch] = useState('');

	const onChange = e => {
		setQuery(e.target.value);
	};

	const onSubmit = async e => {
		e.preventDefault();
		setSearch(query);
	};

	return (
		<div className="App">
			<Navbar onChange={onChange} onSubmit={onSubmit} />
			<GiphyContainer searchTerm={search} />
		</div>
	);
}

export default App;
