import React, { PropTypes } from 'react';

const MailItem = ({firstName, lastName, companyName, text, propId, daysAgo, className, declined, toggled, hidden, selectFunc, id}) => {

    let selfDescriptor = text;

    if(selfDescriptor.length > 30) {
        selfDescriptor = selfDescriptor.substr(0, 29);
        selfDescriptor = selfDescriptor + "...";
    }

    if(daysAgo <= 0)
    {
        daysAgo = "Today";
    }
    else if(daysAgo == 1)
    {
        daysAgo = "Yesterday";
    }
    else
    {
        daysAgo = daysAgo + " days ago";
    }
    return (
        <div onClick={() => selectFunc(id)}>
            <div id={propId}>
                <div className={"br-mailbox-list-item mailIndex:" + propId + (className != "" ? className : "") + (declined && !toggled ? " declinedSolic" : "") + (!declined && toggled ? " declinedSolic" : "") + (hidden ? " declinedSolic" : "")}>
                    <div className={"d-flex justify-content-between mg-b-5 mailIndex:" + propId}>
                        <div>
                            <i className={"icon ion-ios-star mailIndex:" + propId}></i>
                            <i className={"icon ion-android-attach mailIndex:" + propId}></i>
                        </div>
                        <span className={"tx-12 mailIndex:" + propId}>{daysAgo}</span>
                    </div>
                    <h6 className={"tx-14 mg-b-10 tx-gray-800 mailIndex:" + propId}>{firstName + " " + lastName + " [" + companyName + "]"}</h6>
                    <p className={"tx-12 tx-gray-600 mg-b-5 mailIndex:" + propId}>{selfDescriptor}</p>
                </div>
            </div>
        </div>
    );
}

export default MailItem;