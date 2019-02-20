import React from 'react';
import InputField from '../../components/common/InputField.jsx';

const SolicitationStepThree = ({onSubmit, businessName, fieldData, onChange, errors}) => {
    return(
        <div>
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse pd-t-30 solicHeader">
                <h5 className="tx-24 tx-normal tx-gray-900">Request Details</h5>
            </div>
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-30 pd-t-30 solicHeader">
                <h5 className="tx-24 tx-normal tx-gray-900 tx-uppercase">{businessName}</h5>
            </div>
            <p className="mg-b-30 tx-15 tx-center">Complete the following information form.</p>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <InputField
                        name="firstname"
                        label="First Name"
                        value={fieldData.firstname}
                        onChange={onChange}
                        error={errors.firstname}
                        placeHolder="Enter First Name"/>
                </div>

                <div className="form-group">
                    <InputField
                        name="lastname"
                        label="Last Name"
                        value={fieldData.lastname}
                        onChange={onChange}
                        error={errors.lastname}
                        placeHolder="Enter Last Name"/>
                </div>

                <div className="form-group">
                    <InputField
                        name="companyname"
                        label="Company Name"
                        value={fieldData.companyname}
                        onChange={onChange}
                        error={errors.companyname}
                        placeHolder="Enter Company Name"/>
                </div>

                <div className="form-group">
                    <InputField
                        name="companyurl"
                        label="Company URL"
                        value={fieldData.companyurl}
                        onChange={onChange}
                        error={errors.companyurl}
                        placeHolder="Enter Company URL"/>
                </div>

                <div className="form-group">
                    <InputField
                        name="email"
                        label="Email"
                        value={fieldData.email}
                        onChange={onChange}
                        error={errors.email}
                        placeHolder="Enter Email"/>
                </div>

                <div className="form-group">
                    <InputField
                        name="phonenumber"
                        label="Phone Number"
                        value={fieldData.phonenumber}
                        onChange={onChange}
                        error={errors.phonenumber}
                        placeHolder="Enter Phone Number"/>
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="Next"
                        className="btn btn-info btn-block"
                        onClick={onSubmit}/>
                </div>
            </form>
        </div>
    );
};

export default SolicitationStepThree;