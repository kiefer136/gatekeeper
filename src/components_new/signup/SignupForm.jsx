import React from 'react';
import InputField from '../../components/common/InputField.jsx';
import Logo from '../../logo.png';

const SignupForm = ({fieldData, onChange, onSubmit, saving, errors}) => {
    return(
        <div className="login-wrapper wd-300 wd-xs-450 pd-25 pd-xs-40 bg-white rounded shadow-base">
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-10 pd-t-30">
                <h5 className="tx-28 tx-normal  tx-semibold tx-mont tx-uppercase tx-gray-900">Welcome To</h5>
                <img className="titleLogo pd-y-30 wd-200" src={Logo} />
            </div>
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-40 pd-t-30"><span className="tx-normal"></span>Create New Account<span className="tx-normal"></span></div>
            <form>
                <InputField
                    name="email"
                    label="Email"
                    value={fieldData.email}
                    onChange={onChange}
                    errors={errors.email}
                    placeHolder="Email"/>

                <InputField
                    name="password"
                    label="Password"
                    type="password"
                    value={fieldData.password}
                    onChange={onChange}
                    errors={errors.password}
                    placeHolder="Password"/>

                <InputField
                    name="passwordconfirm"
                    label="Confirm Password"
                    type="password"
                    value={fieldData.passwordconfirm}
                    onChange={onChange}
                    errors={errors.passwordconfirm}
                    placeHolder="Confirm Password"/>

                <InputField
                    name="companyname"
                    label="Company Name"
                    type="text"
                    value={fieldData.companyname}
                    onChange={onChange}
                    errors={errors.companyname}
                    placeHolder="Company Name"/>

                <InputField
                    name="firstname"
                    label="First Name"
                    type="text"
                    value={fieldData.firstname}
                    onChange={onChange}
                    errors={errors.firstname}
                    placeHolder="First Name"/>

                <InputField
                    name="lastname"
                    label="Last Name"
                    type="text"
                    value={fieldData.lastname}
                    onChange={onChange}
                    errors={errors.lastname}
                    placeHolder="Last Name"/>

                <InputField
                    name="phonenumber"
                    label="Phone Number"
                    type="text"
                    value={fieldData.phonenumber}
                    onChange={onChange}
                    errors={errors.phonenumber}
                    placeHolder="Phone Number"/>

                <input
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Creating Account' : 'Sign Up'}
                    className="btn btn-primary"
                    onClick={onSubmit}/>
            </form>
        </div>
    );
}

export default SignupForm;