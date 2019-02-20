import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as AccountActions from '../../actions/accountActions';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.accountData.id,
            gateKey: this.props.accountData.gateKey,
            companyName: this.props.accountData.companyName,
            address: this.props.accountData.address,
            phoneNumber: this.props.accountData.phoneNumber,
            firstName: this.props.accountData.firstName,
            lastName: this.props.accountData.lastName,
            email: this.props.accountData.email,
            password: this.props.accountData.password
        };

        this.updateAccount = this.updateAccount.bind(this);
    }

    static getDerivedStateFromProps(props) {
        return {
            id: props.accountData.id,
            gateKey: props.accountData.gateKey,
            companyName: props.accountData.companyName,
            address: props.accountData.address,
            phoneNumber: props.accountData.phoneNumber,
            firstName: props.accountData.firstName,
            lastName: props.accountData.lastName,
            email: props.accountData.email,
            password: props.accountData.password
        }
    }

    updateAccount(updatedAccount, accountId) {
        /*
        * Example 'updatedAccount' object
        const updatedAccount = {
            CompanyName: "Feeder Co.",
            Address: "421 st.",
            PhoneNumber: "123-123-12345",
            FirstName: "Kiefer",
            LastName: "McFeeds",
            Email: this.state.email,
            Password: this.state.password
        }
        */

        this.props.actions.updateAccount(updatedAccount, accountId);
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

Account.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);