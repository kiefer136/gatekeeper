import React, {PropTypes} from 'react';
import {NavLink} from 'react-router-dom';

const SideBar = ({contacts}) => {
    return(
        <div className="br-subleft pd-l-0 pd-r-0 l-0">
            <div className="br-mailbox-list-header">
                <h4 className="tx-uppercase tx-14 tx-mont tx-spacing-1  pd-l-10 tx-white-7">Contacts</h4>
            </div>
            <nav className="nav br-nav-mailbox flex-column">
            {contacts.map(contact => 
                <NavLink to={"/manageContact/" + contact.id} key={contact.id} className="nav-link navLinkIcon"><i className="fa fa-users"></i>{contact.contactName}</NavLink>
            )}
            </nav>
        </div>
    );
};


export default SideBar;
