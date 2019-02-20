import React, { PropTypes } from 'react';
import MailItem from './MailItem.jsx';
import InputField from '../../components/common/InputField.jsx';

function days_between(date1, date2) {

    if(sameDay(date1, date2))
    {
        return 0;
    }

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)
}

function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

function sortMes(messages) {
    let mes = messages.sort((a, b) => new Date(b.timeSent) - new Date(a.timeSent));
    return mes;
}

const MailSideBar = ({ messages, selectFunc, toggleArchived, toggleArchivedFunc, searchChange, selectedId  }) => {
    return (
        <div className="br-mailbox-list">
            <div className="br-mailbox-list-header">
                <h6 className="tx-inverse mg-b-0 tx-13 tx-uppesrcase">Sollicitations <span className="tx-roboto">({messages.length})</span></h6>
                <div onClick={toggleArchivedFunc} className="btn btn-info tx-12">{!toggleArchived ? "ARCHIVED" : "Back"}</div>
            </div>
            <div className="br-mailbox-list-body">
                <div className="search">
                    <span className="searchWrap">
                        <InputField onChange={searchChange}  placeHolder="Search" name="searchBar" type="text"></InputField>
                    </span> 
                    <span>
                        <i className="fa fa-search"></i>
                    </span>
                </div>
               
                {messages.length > 0 ? messages.map((msg, i) =>
                    <div key={msg.id}>
                        <MailItem
                            id={msg.id}
                            selectFunc={selectFunc}
                            hidden={messages[i].hidden}
                            className={msg.id == selectedId ? " selected" : ""}
                            toggled={toggleArchived}
                            declined={!messages[i].declined ? false : true}
                            firstName={messages[i].firstName}
                            lastName={messages[i].lastName}
                            companyName={messages[i].companyName}
                            text={messages[i].text}
                            propId={i}
                            daysAgo={days_between(new Date(messages[i].timeSent), new Date())}
                        />
                    </div>
                ) : <p></p>}
            </div>
        </div>
    );
}

export default MailSideBar;