import React from 'react';
import InputField from '../../components/common/InputField.jsx';
import Logo from '../../logo.png';

const ManageAccountForm = ({ fieldData, onChange, onSubmit, errors }) => {
    return (
        <form>
            <div className="row">
                <label className="col-sm-2 col-xl-2 form-control-label"><span className="tx-danger"></span> GateKey:</label>
                <div className="col-sm-5 mg-t-10 mg-sm-t-0">
                    <span className="tx-16 tx-inverse">{fieldData.gatekey}</span>
                </div>
            </div>
            <div className="row mg-t-20 mg-sm-t-10">
                <label className="col-sm-2 col-xl-2 form-control-label"><span className="tx-danger"></span> Email Address:</label>
                <div className="col-sm-5 mg-t-10 mg-sm-t-0">
                    <span className="tx-16 tx-inverse">{fieldData.email}</span>
                </div>
            </div>
            <div className="row mg-t-20 mg-sm-t-10">
                <label className="col-sm-3 col-xl-2 form-control-label"><span className="tx-danger"></span> Company Name:</label>
                <div className="col-sm-9 mg-t-10 mg-sm-t-0">
                    <InputField
                        name="companyname"
                        value={fieldData.companyname}
                        onChange={onChange}
                        errors={errors.companyname}
                        placeHolder="Enter Company Name" />
                </div>
            </div>
            <div className="row mg-t-20 mg-sm-t-5">
                <label className="col-sm-3 col-xl-2 form-control-label"><span className="tx-danger"></span> Business Contact name:</label>
                <div className="col-sm-9 mg-t-10 mg-sm-t-0">
                    <InputField
                        name="businesscontactname"
                        type="text"
                        value={fieldData.businesscontactname}
                        onChange={onChange}
                        errors={errors.businesscontactname}
                        placeHolder="Update Business Contact Name" />
                </div>
            </div>
            <div className="row mg-t-20 mg-sm-t-5">
                <label className="col-sm-3 col-xl-2 form-control-label"><span className="tx-danger"></span> Phone Number:</label>
                <div className="col-sm-9 mg-t-10 mg-sm-t-0">
                    <InputField
                        name="phonenumber"
                        type="text"
                        value={fieldData.phonenumber}
                        onChange={onChange}
                        errors={errors.phonenumber}
                        placeHolder="Enter Phone Number" />
                </div>
            </div>
            <div className="row mg-t-30">
                <div className="col-sm-8">
                    <div className="form-layout-footer">
                        <input
                            type="submit"
                            value={'Update account'}
                            className="btn btn-info"
                            onClick={onSubmit} />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ManageAccountForm;