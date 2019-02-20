import React from 'react';

const SolicitationStepFour = ({data, onSubmit, saving}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-30 pd-t-30">
                    <h2 className="tx-28 tx-normal tx-gray-900">Confirmation</h2>
                </div>
                <p className="mg-b-30 tx-15">Please review your meeting request submission before submitting your request to <strong className="tx-uppercase">{data.businessName}</strong>.</p>
                <p className="mg-y-30 tx-13">Note: A service charge of <strong>$9.99</strong> will apply to this request.</p>
                <div className="mg-b-30">
                    <p>Your Company Name: {data.companyName}</p>
                    <p>Your Company Url: {data.companyUrl}</p>
                    <p>Your Email: {data.email}</p>
                    <p>Your First Name: {data.firstName}</p>
                    <p>Your Last Name: {data.lastName}</p>
                    <p>Your PhoneNumber: {data.phoneNumber}</p>
                    <p>Your Message: {data.text}</p>
                </div>

                <input
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Sending' : 'Submit'}
                    className="btn btn-info btn-block"
                    onClick={onSubmit}/>
            </form>
        </div>
    );
};

export default SolicitationStepFour;