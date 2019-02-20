import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../common/InputField.jsx';

const AuthenticationForm = ({fieldData, onSubmit, onChange, saving, errors}) => {
    return(
        <div className="signbox">
            <div className="signbox-header">
                <h4>GateKeeper</h4>
                <p className="mg-b-0">Dashboard Login</p>
            </div>
            <div className="signbox-body">
                <InputField
                    name="email"
                    label="Email:"
                    value={fieldData.email}
                    onChange={onChange}
                    error={errors.email}
                    placeHolder="Enter Your Email"/>

                <InputField
                    name="password"
                    label="Password:"
                    value={fieldData.password}
                    onChange={onChange}
                    type="password"
                    error={errors.password}
                    placeHolder="Enter Your Password"/>

                <div className="form-group">
                    <a href="/home">Forgot password?</a>
                </div>

                <input
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Signing In': 'Sign In'}
                    className="btn btn-dark btn-block"
                    onClick={onSubmit}/>

                <div className="tx-center bd pd-10 mg-t-40">Not yet a member? <a href="page-signup.html">Create an account</a></div>
            </div>
        </div>
    );
};

AuthenticationForm.propTypes = {
    fieldData: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
}

export default AuthenticationForm;