import React, { Component } from 'react';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../../shared/validations/signup';
import TextfieldGroup from '../common/TextfieldGroup';
//import { browserHistory } from 'react-router';

class Signupform extends Component {
	constructor(props){
		super(props);
		this.state={
			username : "",
			email : "",
			password : "",
			passwordConfirmation : "",
			timezone : "",
			errors : {},
			isLoading : false,
			invalid : false
		}
		this.myonsubmit = this.myonsubmit.bind(this);
		this.checkUserExists=this.checkUserExists.bind(this);
	}
	onChange=(e)=>{
		this.setState({[e.target.name] : e.target.value});
	}
	isVlaid(){
		const { errors , isValid } = validateInput(this.state);
		if(!isValid){
			this.setState({errors});
		}
		return isValid;
	}
	checkUserExists(e){
		let fieldName=e.target.name;
		let fieldValue=e.target.value;
		if(fieldValue!==""){
			let errors  =this.state.errors;
			let invalid = this.state.invalid;
			this.props.isUserExists(fieldValue).then((response)=>{
				return response.data;
			}).then((data)=>{
				if(data.iserror==='exist'){
					errors[fieldName]="There is user with such "+fieldName;
					invalid=true;
				}else{
					errors[fieldName]="";
					invalid=false;
				}

			//	console.log(errors);
				this.setState({errors,invalid});
			}).catch((err)=>{
				console.log(err);
			});
		}
	//	console.log(e.target.name);
	//	console.log(e.target.value);
	}
	myonsubmit(e){
		e.preventDefault();
		//console.log(this.isVlaid());
		if(this.isVlaid()){
			this.setState({errors : "",isLoading:true});
			this.props.userSignUpRequest(this.state).then(
				(response)=>{
					return response.data
				}
				
			).then((data)=>{
				console.log(data);
				if(data && data.success){
			this.props.addFlashMessage({
				type:'success',
				text : "You are signed up successfully.Welcome!"
			})		
			//		browserHistory.push('/');
			this.context.router.push('/');
				}else{
				this.setState({errors:data,isLoading:false});
				}

			}).catch((err)=>{
				console.log(err);
			});
		}
	}

  render() {
//		console.log(Object.keys(timezones));
		//const timezones=timezones;
		let { errors } = this.state; 
		let options=Object.keys(timezones).map(el=>{
		return	(<option key={el} value={timezones[el]}>{timezones[el]}</option>)
		
		})
		//console.log(options);
    return (
		<form onSubmit={this.myonsubmit}>
		<h1>Join Our Community</h1>
		<TextfieldGroup 
		error={errors.username}
		label="Username"
		onChange={this.onChange}
		checkUserExists={this.checkUserExists}
		field = "username"
		value={this.state.username}
		/>
		<TextfieldGroup 
		error={errors.email}
		label="Email"
		onChange={this.onChange}
		checkUserExists={this.checkUserExists}
		field = "email"
		value={this.state.email}
		/>
		<div className={classnames("form-group",{'has-error' : errors.timezone})}>
		<label className="control-label">Timezone</label>
		<select 
		name="timezone"
		className="form-control"
		onChange={this.onChange}
		value={this.state.timezone}
		>
		<option value="" disabled>Choose Your Timezone</option> 
		{options}
		</select>
		{errors.timezone && <span className="text-danger">{errors.timezone}</span>}
		</div>
		<TextfieldGroup 
		error={errors.password}
		label="Password"
		onChange={this.onChange}
		field = "password"
		type="password"			
		value={this.state.password}																
		/>
		<TextfieldGroup 
		error={errors.passwordConfirmation}
		label="Conform Password"
		onChange={this.onChange}
		field = "passwordConfirmation"
		type="password"	
		value={this.state.passwordConfirmation}
		/>
		<div className="form-group">
		<button type="submit" disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">Sign Up</button>
		</div>
		</form>
	);
  }
}
Signupform.propTypes={
	userSignUpRequest : PropTypes.func.isRequired,
	addFlashMessage : PropTypes.func.isRequired,
	isUserExists : PropTypes.func.isRequired
}
Signupform.contextTypes ={
	router : PropTypes.object.isRequired
}

export default Signupform;
