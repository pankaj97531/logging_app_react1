import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addFlashMessage} from '../actions/flashMessages';

export default function (HigherOderComponent){
    class requireAuth extends Component {
        componentWillMount(){
            if(this.props.isAuthenticated===false){
                this.props.addFlashMessage({
                    type: "error",
                    text : "You have to login to access this page" 
                })
                this.context.router.push('/login');
            }
        }
        componentWillUpdate(nextProps){
            console.log(nextProps);
            if(nextProps.isAuthenticated===false){
                this.context.router.push('/login');
            }
        }

        render() {
            return (
               <HigherOderComponent {...this.props} /> 
             )
        }
    }
    function mapsStateToProps(state){
        return {
            isAuthenticated : state.auth.isAuthenticated
        }
    }
    requireAuth.contextTypes={
        router : PropTypes.object.isRequired
    }
    requireAuth.propTypes={
        isAuthenticated : PropTypes.bool.isRequired
    }
    return connect(mapsStateToProps,{ addFlashMessage })(requireAuth) ;    
}
