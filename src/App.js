import React, { Component } from 'react';
import page from './img/dumb-wedding-2.png';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<img className="theImage" src={page} alt="wedding collage" />
			</div>
		);
	}
}

export default App;
