import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextfieldGroup=(props)=> {
    return (
		<div className={classnames("form-group",{'has-error' : props.error})}>
		<label className="control-label">{props.label}</label>
		<input type={props.type}
		value={props.value}
        onChange={props.onChange}
        onBlur={props.checkUserExists}
		name={props.field}
		className="form-control" />
		{props.error && <span className="help-block">{props.error}</span>}
		</div>
    )
}
TextfieldGroup.propTypes={
    field : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    errors : PropTypes.string,
    type : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    onBlur : PropTypes.func
}
TextfieldGroup.defaultProps={
    type:'text'
}
export default TextfieldGroup;