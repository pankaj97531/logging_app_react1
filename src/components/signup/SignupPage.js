import React, { Component } from 'react';
import Signupform from './Signupform';
import { connect } from 'react-redux';
import { userSignUpRequest,isUserExists } from '../../actions/usersignupaction';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends Component {
	
  render() {
	  const { userSignUpRequest,addFlashMessage,isUserExists } = this.props;
    return (
		<div className="row">
		<div className="col-md-3">
		</div>
		<div className="col-md-6">
		<Signupform 
		userSignUpRequest={userSignUpRequest} 
		addFlashMessage={addFlashMessage} 
		isUserExists={isUserExists}
		/>
		</div>
		</div>
	);
  }
}

export default connect((state)=>{return {}},{ userSignUpRequest,addFlashMessage, isUserExists })(SignupPage) ;
