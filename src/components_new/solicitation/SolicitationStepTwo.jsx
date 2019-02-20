import React from 'react';
import Logo from '../../logo.png';
import TextArea from '../../components/common/TextArea.jsx';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const SolicitationStepTwo = ({ contacts, businessName, onDropDownChange, onTextAreaChange, textAreaValue, textAreaError, onSubmit, dropDownValue }) => {
    return (
        <div>
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-30 pd-t-30">
                <h5 className="tx-28 tx-normal tx-semibold tx-mont tx-uppercase tx-gray-900">Welcome to</h5>
                <img className="titleLogo pd-y-30 wd-200" src={Logo} />
            </div>
            <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-45">
                <h5 className="tx-24 tx-normal tx-gray-900 solicHeader tx-uppercase">
                    {businessName}
                </h5>
            </div>
            <p className="mg-b-30 tx-15"></p>
            <form>
                <div className="form-group">
                    <label className="tx-inverse">I request a meeting with:</label>
                    <Dropdown
                        options={contacts}
                        onChange={onDropDownChange}
                        value={dropDownValue}
                        placeholder="Select a contact" />
                </div>

                <div className="form-group">
                    <label className="tx-inverse">Meeting description (180 characters max)</label>
                    <TextArea
                        type="text"
                        name="message"
                        label="Meeting Description"
                        onChange={onTextAreaChange}
                        placeHolder="Meeting Description"
                        value={textAreaValue}
                        error={textAreaError}/>

                </div>

                <input
                    type="submit"
                    value="Next"
                    className="btn btn-info btn-block"
                    onClick={onSubmit}/>
            </form>
        </div>
    );
};

export default SolicitationStepTwo;