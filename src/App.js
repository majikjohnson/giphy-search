import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import About from './components/pages/About';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		
				<div className="App">
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/search" component={Search} />
							<Route exact path="/about" component={About} />
						</Switch>
					</div>
				</div>
			
	);
}

export default App;
