import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({name, label, type, onChange, placeHolder, value, error}) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return(
        <div className={wrapperClass}>
            <div className="field">
                <textarea
                    type={type ? type : "text"}
                    name={name}
                    label={label}
                    rows="5"
                    className="form-control"
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange}/>

                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextArea;