import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as AccountActions from '../../actions/accountActions';
import { Redirect } from 'react-router';
import SignupForm from './SignupForm.jsx';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordconfirm: '',
            companyname: '',
            firstname: '',
            lastname: '',
            phonenumber: '',
            errors: {},
            saving: false,
            account: null
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static getDerivedStateFromProps(props) {
        return {
            account: props.accountData.gateKey
        };
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ saving: true });

        const accountData = {
            CompanyName: this.state.companyname,
            Address: null,
            PhoneNumber: this.state.phonenumber,
            FirstName: this.state.firstname,
            LastName: this.state.lastname,
            Email: this.state.email,
            Password: this.state.passwordconfirm
        };

        this.props.actions.createAccount(accountData);
    }

    render() {
        return (
            <div>
                {this.state.account == null ?
                    <SignupForm
                        fieldData={this.state}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        saving={this.state.saving}
                        errors={this.state.errors} />
                        :
                    <Redirect to="/"></Redirect>
                }
            </div>
        );
    }
}

Signup.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    accountData: state.account
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, AccountActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);