import React, { Component } from 'react'
import TextfieldGroup from './common/TextfieldGroup';
import validateInput from '../shared/validations/login';
import { login } from '../actions/authAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            identifier: "",
            password: "",
            errors: {},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    isValid(){
        const { errors, isValid } =validateInput(this.state);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    onChange(e) {
//        console.log("onchange");
        this.setState({[e.target.name] : e.target.value});
    }
    onSubmit(e) {
        e.preventDefault();
        if(this.isValid()){
            this.setState({errors:{},isLoading:true});
            this.props.login(this.state).then((response)=>{
              //  console.log(response);
                this.context.router.push('/');
                //return response.data;
            })/*.then((data)=>{
                this.setState({errors:data,isLoading:false});
               // console.log(data);
            });*/
        }
    }
    render() {
        const { errors, identifier, password, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                {errors.form && <div className='alert alert-danger'>{errors.form}</div>}
                <TextfieldGroup
                    field="identifier"
                    label="Username / Email"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                />
                <TextfieldGroup
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                />
                <div className="form-group">
                    <button type="submit" 
                    disabled={isLoading}
                    className="btn btn-primary btn-lg">Login</button>
                </div>
            </form>
        )
    }
}
LoginForm.propTypes={
    login : PropTypes.func.isRequired
}
LoginForm.contextTypes ={
	router : PropTypes.object.isRequired
}
export default connect(null,{ login })(LoginForm);