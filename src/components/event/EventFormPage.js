import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextfieldGroup from '../common/TextfieldGroup';
import createEvent from '../../actions/eventAction';

class EventFormPage extends Component {
    constructor() {
        super();
        this.state = {
            event: "",
            errors : {},
            isLoading : false
        }
    }
    onChange = (e) => {
        this.setState({ event: e.target.value });
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.createEvent(this.state).then((response)=>{
            return response.data;
        }).then((data)=>{
            console.log(data);
        });

    }
    render() {
        const { event,errors,isLoading } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Create New Game Event</h1>
                <TextfieldGroup
                    value={event}
                    onChange={this.onChange}
                    name="newevent"
                    label="New Event"
                    field="event"
                />
                <div className="form-group">
                    <button type="submit" 
                    disabled={this.state.isLoading || this.state.invalid} 
                    className="btn btn-primary btn-lg">Submit</button>
                </div>
            </form>
        )
    }
}
EventFormPage.propTypes={
    createEvent : PropTypes.func.isRequired
}
export default connect(null,{createEvent})(EventFormPage);