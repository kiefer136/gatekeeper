import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as AuthenticationActions from '../../actions/authenticationActions';
import * as AccountActions from '../../actions/accountActions';
import * as ContactActions from '../../actions/contactActions';
import * as SolicitationActions from '../../actions/solicitationActions';
import LoginForm from './LoginForm.jsx';
import { Redirect } from 'react-router';
import { authCheck } from  '../../App.js';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {email: '', password: ''},
            saving: false,
            done: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({saving: true});

        const authData = {
            Email: this.state.email,
            Password: this.state.password
        };

        this.props.actions.authenticate(authData);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.authData.success !== this.props.authData.success)
        {
            if(nextProps.authData.success === true)
            {
                const accData = {
                    id: nextProps.authData.id
                };
                localStorage.setItem('user', nextProps.authData.id);
                this.props.actions.fetchAccount(accData);
                toastr.success('Signed In Successfully');
            }
            else if(nextProps.authData.success === false)
            {
                this.setState({saving: false});
                toastr.error('Incorrect Login. Try Again.');
            }
        }
        else
        {
            if(nextProps.authData.success === false)
            {
                this.setState({saving: false});
                toastr.error('Incorrect Login. Try Again.');
            }
        }

        if(nextProps.accData.id != null && nextProps.accData.id !== this.props.accData.id)
        {
            if(nextProps.accData.error == null)
            {
                const accData = {
                    id: nextProps.accData.id,
                    pageNumber: 1,
                    pageSize: 5,
                    gateKey: nextProps.accData.gateKey
                }

                this.props.actions.fetchContacts(accData);
            }
        }

        if(nextProps.conData.totalCount != null && nextProps.conData.totalCount !== this.props.conData.totalCount)
        {
            const accData = {
                id: nextProps.accData.id,
                pageNumber: 1,
                pageSize: 20,
                gateKey: nextProps.accData.gateKey
            }

            this.props.actions.fetchSolicitations(accData);
        }

        if(nextProps.solData.totalCount != null && nextProps.solData.totalCount !== this.props.solData.totalCount)
        {
            authCheck.authenticate(() => {
                this.setState(() => ({
                  redirectToReferrer: true,
                  done: true
                }))
              })
        }
    }

    render() {
        let fieldData = {
            email: this.state.email,
            password: this.state.password
        };

        return(
            <div className="d-flex align-items-center justify-content-center bg-br-primary ht-100v">
                { this.state.done ? <Redirect to="/"></Redirect> : null}
                <LoginForm
                    fieldData={fieldData}
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    saving={this.state.saving}
                    errors={this.state.errors}/>
            </div>
        );
    }
}

Login.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    authData: state.authentication,
    accData: state.account,
    conData: state.contacts,
    solData: state.solicitations
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, AuthenticationActions, AccountActions, ContactActions, SolicitationActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);