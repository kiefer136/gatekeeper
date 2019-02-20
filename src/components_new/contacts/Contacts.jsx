import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as ContactActions from '../../actions/contactActions';
import SideBar from './SideBar.jsx';
import DealerGroupList from './DealerGroupList.jsx';
import HeadPanel  from '../../components/header/HeadPanel.jsx';

class Contacts extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            Contacts: this.props.contactsData.items,
            pageSize: this.props.contactsData.pageSize,
            currentPage: this.props.contactsData.currentPage,
            totalPages: this.props.contactsData.totalPages,
            hasNextPage: this.props.contactsData.hasNextPage,
            hasPreviousPage: this.props.contactsData.hasPreviousPage,
            totalCount: this.props.contactsData.totalCount
        };

        this.createNewContact = this.createNewContact.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.navigateNextPage = this.navigateNextPage.bind(this);
        this.navigatePreviousPage = this.navigatePreviousPage.bind(this);
        this.newContact = this.newContact.bind(this);
    }

    static getDerivedStateFromProps(props) {
        return {
            Contacts: props.contactsData.items,
            pageSize: props.contactsData.pageSize,
            currentPage: props.contactsData.currentPage,
            totalPages: props.contactsData.totalPages,
            hasNextPage: props.contactsData.hasNextPage,
            hasPreviousPage: props.contactsData.hasPreviousPage,
            totalCount: props.contactsData.totalCount
        };
    }

    createNewContact(newContact) {
        /*
        * Example 'newContact' object
        const newContact = {
            Title: "Dev",
            Email: "Kiefs@Dev.com",
            FirstName: "Kiefs",
            LastName: "Dev"
        }
        */

        this.props.actions.createContact(this.props.accountData, newContact);
    }

    updateContact(contactId, updatedContact) {
        /*
        * Example 'updatedContact' object
        const updatedContact = {
            Title: "Dev" + Math.floor((Math.random() * 100) + 1).toString(),
            Email: "Kiefs@Dev.com",
            FirstName: "Aviator",
            LastName: "Dev"
        }
        */

        this.props.actions.updateContact(this.props.accountData, updatedContact, contactId);
    }

    deleteContact(contactId) {
        const contactToDelete = {
            id: contactId
        };

        this.props.actions.deleteContact(this.props.accountData, contactToDelete);
    }

    navigateNextPage() {
        if(!this.state.hasNextPage)
        {
            return;
        }

        let pageNum = this.state.currentPage + 1;
        
        const paginationData = {
            id: this.props.accountData.id,
            pageNumber: pageNum,
            pageSize: 5,
            gateKey: this.props.accountData.gateKey
        }

        this.props.action.fetchContacts(paginationData);
    }

    navigatePreviousPage() {
        if(!this.state.hasPreviousPage)
        {
            return;
        }

        let pageNum = this.state.currentPage -1;

        const paginationData = {
            id: this.props.accountData.id,
            pageNumber: pageNum,
            pageSize: 5,
            gateKey: this.props.accountData.gateKey
        }

        this.props.actions.fetchContacts(paginationData);
    }

    editContact() {
        alert('neeed to program');
    }

    newContact() {
        let select = document.getElementById('contactName');
        let contactName = select.options[select.selectedIndex].value;
        // let email = document.getElementById('contactEmail').value;
        //+"&email="email
        this.props.history.push('/manageContact?contactName=' + contactName);
    }

    render() {
        return (
            <div>
                <div className="br-contentpanel SideBar contactsPage" >
                    <div className="br-pageheader pd-y-15 pd-md-1-20">
                        <nav className="breadcrumb pd-0 mg-0 tx-12">
                            <NavLink to="/" className="breadcrumb-item">Dashboard</NavLink>
                            <span className="breadcrumb-item active">Contacts</span>
                        </nav>
                    </div>
                    <div className="inner-Container">
                    <div className="row">
                        <div className="col-md-11">
                            <h1 className="tx-gray-800 mg-b-5">Manage Contacts</h1>
                            <p className="mg-b-0 ">Set up business management contacts from dropdown below.</p>
                            <div className="align-items-center justify-content-start pd-t-25 ">
                                <div className="addContactButtons">
                                    <select id="contactName" className="form-control tx-15 select2-hidden-accessible">
                                        <option selected disabled>Select Contact Title</option>
                                        <option>Accounting</option>
                                        <option>Body Shop Manager</option>
                                        <option>Business Manager</option>
                                        <option>Dealer Principal</option>
                                        <option>General Manager</option>
                                        <option>General Sales Manager</option>
                                        <option>Human Resources</option>
                                        <option>New Car Sales Manager</option>
                                        <option>Parts Manager</option>
                                        <option>Service Manager</option>
                                        <option>Used Car Sales Manager</option>
                                        <option>Custom</option>
                                    </select>
                                    <button onClick={this.newContact} className="btn btn-info">New Contact</button>
                                </div>
                            </div>
                            <SideBar contacts={this.state.Contacts && this.state.Contacts}  />
                            
                            <DealerGroupList contacts={this.state.Contacts} editContact={this.editContact} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Contacts.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    accountData: state.account,
    contactsData: state.contacts
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, ContactActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);