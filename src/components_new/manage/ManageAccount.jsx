import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as AccountActions from '../../actions/accountActions';
import ManageAccountForm from './ManageAccountForm.jsx';
import { NavLink } from 'react-router-dom';
import HeadPanel from '../../components/header/HeadPanel.jsx';

class ManageAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gatekey: this.props.accountData.gateKey,
            email: this.props.accountData.email,
            companyname: this.props.accountData.companyName,
            businesscontactname: this.props.accountData.firstName + ' ' + this.props.accountData.lastName,
            phonenumber: this.props.accountData.phoneNumber,
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("saving");
    }

    render() {
        return (
            <div>
                <HeadPanel companyName={"comp name"}/>
                <div id="manageAccount" className="br-contentpanel">
                <div className="br-subleft pd-l-0 pd-r-0 l-0">
                    <div className="br-mailbox-list-header">
                        <h4 className="tx-uppercase tx-14 tx-mont tx-spacing-1  pd-l-10 tx-white-7">Payment Information</h4>
                    </div>
                    <h5 className="tx-14 tx-mont tx-spacing-1 tx-uppercase mg-y-15 pd-l-10 tx-white-7">Status: Active <i className="fa fa-check-circle"/></h5>
                    {/* <nav className="nav br-nav-mailbox flex-column">
                        <i className="fa fa-credit-card nav-link navLinkIcon"/>
                    </nav> */}
                    <nav className="nav br-nav-mailbox flex-column mg-t-15">
                        <p className="nav-link navLinkIcon noFlex">To make billing changes or to cancel your subscription, please contact us at: contact@ourgatekeeper.com</p>
                    </nav>
                </div>
                <div className="br-pageheader pd-y-15 pd-md-1-20">
                    <nav className="breadcrumb pd-0 mg-0 tx-12">
                        <NavLink to="/" className="breadcrumb-item">Dashboard</NavLink>
                        <span className="breadcrumb-item active">Manage Account</span>
                    </nav>
                </div>
                <div classNameName="inner-Container">
                    <div className="row ">
                        <div className="col-md-12 col-lg-10 col-xl-10">
                            <div className="form-layout form-layout-5">
                                <h1 className="tx-gray-800 mg-b-5">Review &amp; Manage Account</h1>
                                <p className="mg-b-30 tx-gray-600">Update contact or enter new info if you have newly created your account.</p>
                                <ManageAccountForm
                                    fieldData={this.state}
                                    onChange={this.onChange}
                                    onSubmit={this.onSubmit}
                                    errors={this.state.errors}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ManageAccount.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    accountData: state.account
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, AccountActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAccount);