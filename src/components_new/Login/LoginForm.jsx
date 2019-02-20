import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../components/common/InputField.jsx';
import Logo from '../../logo.png';

const LoginForm = ({fieldData, onSubmit, onChange, saving, errors}) => {
    return(
        <div>
        {/* <div className="signbox">
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
        </div> */}

        <div className="login-wrapper wd-300 wd-xs-450 pd-25 pd-xs-40 bg-white rounded shadow-base">
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-30 pd-t-30">
                <h5 className="tx-28 tx-normal  tx-semibold tx-mont tx-uppercase tx-gray-900">Welcome to</h5>
                <img className="titleLogo pd-y-30 wd-200" src={Logo} />
            </div>
            <form autoComplete='true'>
                <InputField
                    name="email"
                    label="Email"
                    value={fieldData.email}
                    onChange={onChange}
                    error={errors.email}
                    placeHolder="Enter Your Email"/>

                
                <InputField
                    name="password"
                    label="Password"
                    type="password"
                    value={fieldData.password}
                    onChange={onChange}
                    error={errors.password}
                    placeHolder="Enter Your Password"/>

                <div className="form-group">
                    <a href="" className="tx-info tx-12 d-block mg-t-10">Forgot password?</a>
                </div>

                <input
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Signing In' : 'Sign In'}
                    className="btn btn-info btn-block"
                    onClick={onSubmit}/>
            </form>
            <div className="mg-t-60 tx-center">Not a member, but want to join?<a href="/signup" className="tx-info"> Click here</a> to sign up.</div>
        </div>
        </div>
    );
};

LoginForm.propTypes = {
    fieldData: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
}

export default LoginForm;