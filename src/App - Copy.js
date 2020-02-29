import React, { Component } from 'react';
//import './App.css';
import Navigationbar from './components/Navigationbar';
import Clock from './Clock';

class App extends Component {
	constructor(){
		super();
		this.state={
			currentCount:10000
		}
	}

	timer=()=> {
   // setState method is used to update the state
   this.setState({ currentCount: this.state.currentCount-1});
}
componentDidMount(){
	 var intervalId = setInterval(this.timer, 1000);
	 this.setState({intervalId: intervalId});
	 setTimeout(()=>{
		 clearInterval(intervalId)
	 },10000);
}

  render() {
console.log(new Date());
    return (
	<div className="container">
	<Navigationbar />
	{this.props.children}
	<Clock  date={new Date()} />
	</div>
	);
  }
}

export default App;
