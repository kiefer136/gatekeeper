import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as PasswordActions from '../../actions/passwordActions';
import InputField from '../../components/common/InputField.jsx';
import Logo from '../../logo.png';
import queryString from 'query-string';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            newpassword: '',
            newpasswordrepeat: '',
            errors: {},
            saving: false,
            success: false,
            id: queryString.parse(this.props.location.search).id
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        if (this.state.id != null) {
            this.props.actions.resetPassword(this.state.id)
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ saving: true });

        const resetData = {
            Email: this.state.email,
            NewPassword: this.state.newpasswordrepeat
        };

        this.setState({ success: true });

        this.props.actions.createPasswordReset(resetData);
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center bg-br-primary ht-100v">
                {this.state.id == null && this.state.success == false ?
                    <div className="login-wrapper wd-300 wd-xs-450 pd-25 pd-xs-40 bg-white rounded shadow-base">
                        <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-30 pd-t-30">
                            <h5 className="tx-28 tx-normal  tx-semibold tx-mont tx-uppercase tx-gray-900">Enter Email To Reset Password</h5>
                            <img className="titleLogo pd-y-30 wd-200" src={Logo} />
                        </div>
                        <form>
                            <InputField
                                name="email"
                                label="Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                error={this.state.errors.email} />

                            <InputField
                                name="newpassword"
                                label="New Password"
                                value={this.state.newpassword}
                                onChange={this.onChange}
                                error={this.state.errors.newpassword} />

                            <InputField
                                name="newpasswordrepeat"
                                label="Repeat New Password"
                                value={this.state.newpasswordrepeat}
                                onChange={this.onChange}
                                error={this.state.errors.newpasswordrepeat} />

                            <input
                                type="submit"
                                disabled={this.state.saving}
                                value={this.state.saving ? 'Loading' : 'Reset Password'}
                                className="btn btn-info btn-block"
                                onClick={this.onSubmit} />
                        </form>
                    </div>
                    : null
                }
                {this.state.id != null && this.state.success == false ?
                    <div className="login-wrapper wd-300 wd-xs-450 pd-25 pd-xs-40 bg-white rounded shadow-base">
                        <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-30 pd-t-30">
                            <h5 className="tx-28 tx-normal  tx-semibold tx-mont tx-uppercase tx-gray-900">Password Successfully Reset</h5>
                            <img className="titleLogo pd-y-30 wd-200" src={Logo} />
                        </div>
                    </div> : null
                }
                {this.state.success == true && this.state.id == null ?
                    <div className="login-wrapper wd-300 wd-xs-450 pd-25 pd-xs-40 bg-white rounded shadow-base">
                        <div className="signin-logo tx-center tx-28 tx-bold tx-inverse mg-b-30 pd-t-30">
                            <h5 className="tx-28 tx-normal  tx-semibold tx-mont tx-uppercase tx-gray-900">A link to reset your password was emailed to you</h5>
                            <img className="titleLogo pd-y-30 wd-200" src={Logo} />
                        </div>
                    </div> : null
                }

            </div>
        );
    }
}

ResetPassword.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    passwordData: state.password
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, PasswordActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);