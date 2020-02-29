import React, { Component } from 'react';
//import './App.css';
import Navigationbar from './components/Navigationbar';
import FlashMessageList from './components/flash/FlashMessageList';

class App extends Component {
	
  render() {
    return (
	<div className="container">
	<Navigationbar />
	<FlashMessageList />
	{this.props.children}
	</div>
	);
  }
}

export default App;
