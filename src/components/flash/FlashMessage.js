import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends Component {
    constructor(){
        super();
        this.onClick=this.onClick.bind(this);
    }
    onClick(){
        this.props.deleteFlashMessage(this.props.message.id);
    }
    render() {
        //console.log(this.props.message);
        const { type,text } = this.props.message;
        return (
            <div className={classnames('alert',{
                'alert-success' : type==='success',
                'alert-danger' : type === 'error'
            })}>
                <button onClick={this.onClick} className="close"><span>&times;</span></button>
                {text}
            </div>
        )
    }
}
FlashMessage.propTypes={
    message : PropTypes.object.isRequired,
    deleteFlashMessage : PropTypes.func.isRequired
}
export default FlashMessage