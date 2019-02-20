import React from 'react';
import Logo from '../../logo.png';
import InputField from '../../components/common/InputField.jsx';

const SolicitationStepOne = ({onSubmit, fieldData, onChange, errors, saving}) => {
    return(
        <div className="solOneDiv">
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-30 pd-t-30">
                <h5 className="tx-28 tx-normal tx-semibold tx-mont tx-uppercase tx-gray-900">Welcome To</h5>
                <img className="titleLogo pd-y-30 wd-200" src={Logo}></img>
            </div>
            <p className="mg-b-30 tx-15">Enter the GateKey provided to you from the business you're trying to reach.</p>
            <form>
                <InputField
                    name="gatekey"
                    label="Gate Key"
                    value={fieldData.gatekey}
                    onChange={onChange}
                    error={errors.gatekey}
                    placeHolder="Enter Gate Key"/>

                <input
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Loading' : 'Submit'}
                    className="btn btn-info btn-block"
                    onClick={onSubmit}/>
            </form>
        </div>
    );
}

export default SolicitationStepOne;