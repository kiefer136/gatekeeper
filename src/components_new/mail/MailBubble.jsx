import React, { PropTypes } from 'react';
import moment from 'moment';

const MailBubble = ({ firstName, lastName, companyName, productDescription, from, time }) => {

    if(from != "Business")
    {
        return (
            <div className="br-msg-body">
                <h6 className="tx-inverse mg-b-25 lh-4">{firstName} {lastName} [{companyName}] at {moment(time).format('MMMM Do YYYY, h:mm a')}: </h6>
    
                <p>{productDescription}</p>
            </div>
        );
    }
    else
    {
        return (
            <div className="br-msg-body">
                <h6 className="tx-inverse mg-b-25 lh-4">Message from you at {moment(time).format('MMMM Do YYYY, h:mm a')}: </h6>
                <p>{productDescription}</p>
            </div>
        );
    }
}

export default MailBubble;