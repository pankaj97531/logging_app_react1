import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { logout } from '../actions/authAction'

class Navigationbar extends Component {

	onClick=(e)=>{
		e.preventDefault();
		this.props.logout();
		//console.log("click");
	}
  render() {
	  const { isAuthenticated } = this.props.auth;

	  //console.log(isAuthenticated);
	  const userlink=(
			<ul className="nav navbar-nav navbar-right">
			  <li><Link href="#" onClick={this.onClick}><span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
			</ul>
	  );
	  const guestlink=(
		<ul className="nav navbar-nav navbar-right">
		<li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
		<li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
	  </ul>
	  );
    return (
		<nav className="navbar navbar-inverse">
		  <div className="container-fluid">
			<div className="navbar-header">
			  <Link to="/" className="navbar-brand">Red Dice</Link>
			  {isAuthenticated ? (<Link to="/new-event" className="navbar-brand">New Event</Link>) : ""}
			</div>
			{ isAuthenticated  ? userlink : guestlink }
		  </div>
		</nav>
	);
  }
}
Navigationbar.propTypes={
	auth : PropTypes.object.isRequired,
	logout : PropTypes.func.isRequired
}
const mapsStateToProps=(state)=>{
//	console.log(state.auth);
	return{
		auth : state.auth
	}

}

export default connect(mapsStateToProps,{ logout })(Navigationbar);
