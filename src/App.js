import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import SearchState from './context/SearchState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<SearchState>
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/search" component={Search} />
						</Switch>
					</div>
				</div>
			</Router>
		</SearchState>
	);
}

export default App;
