import React from 'react';
import PropTypes from 'prop-types';

const InputTextField = ({name, label, type, onChange, placeHolder, value, error}) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0) {
        wrapperClass += 'has-error';
    }

    return(
        <div className={wrapperClass}>
            {label &&
                <label className="form-control-label">{label}</label>
            }
            <textarea
                type={type ? type : "text"}
                name={name}
                className="form-control"
                placeholder={placeHolder}
                value={value}
                onChange={onChange}/>

            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

InputTextField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default InputTextField;