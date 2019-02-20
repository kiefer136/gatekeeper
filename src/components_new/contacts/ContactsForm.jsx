import React, {PropTypes} from 'react';
import TextInput from './TextInput.jsx';
import InputField from '../../components/common/InputField.jsx';

const ContactsForm = ({contact, onSave, onChange, saving, errors, hasHeader}) => {
    return(
        <form>
            <div className={hasHeader ? "hasHeader" : ""}>
                <span className="contactHeaderText tx-16">Contact Title:  </span>
                <InputField
                    name="contactName"
                    label="Contact Title"
                    value={contact.contactName}
                    onChange={onChange}
                    error={errors.contactName}
                    disabled={hasHeader ? true : false}
                />
            </div>

            <InputField
                name="email"
                label="Email"
                value={contact.email}
                onChange={onChange}
                error={errors.email}/>

            <InputField
                name="firstName"
                label="First Name"
                value={contact.firstName}
                onChange={onChange}
                error={errors.firstName}/>

            <InputField
                name="lastName"
                label="Last Name"
                value={contact.lastName}
                onChange={onChange}
                error={errors.lastName}/>

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

export default ContactsForm;