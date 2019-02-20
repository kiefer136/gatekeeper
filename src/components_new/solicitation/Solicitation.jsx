import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as SolicitationActions from '../../actions/solicitationActions';
import StepOne from './SolicitationStepOne.jsx';
import StepTwo from './SolicitationStepTwo.jsx';
import StepThree from './SolicitationStepThree.jsx';
import StepFour from './SolicitationStepFour.jsx';

class Solicitation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Contacts: [],
            businessName: "",
            solicitation: null,
            currentPage: 1,
            pageOneData: {
                gatekey: "",
                errors: {},
                saving: false
            },
            pageTwoData: {
                dropDownValue: "",
                textAreaValue: "",
                textAreaError: null
            },
            pageThreeData: {
                firstname: "",
                lastname: "",
                companyname: "",
                companyurl: "",
                email: "",
                phonenumber: "",
                errors: {}
            },
            finalData: {
                businessName: "",
                companyName: "",
                companyUrl: "",
                email: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                text: "",
                saving: false
            }
        };

        this.onStepOneSubmit = this.onStepOneSubmit.bind(this);
        this.onStepOneChange = this.onStepOneChange.bind(this);

        this.onStepTwoDropDownChange = this.onStepTwoDropDownChange.bind(this);
        this.onStepTwoTextAreaChange = this.onStepTwoTextAreaChange.bind(this);
        this.onStepTwoSubmit = this.onStepTwoSubmit.bind(this);

        this.onStepThreeChange = this.onStepThreeChange.bind(this);
        this.onStepThreeSubmit = this.onStepThreeSubmit.bind(this);

        this.onStepFourSubmit = this.onStepFourSubmit.bind(this);
    }

    static getDerivedStateFromProps(props, prevState) {
        if (prevState.Contacts.length != props.solicitationData.contactNames.length && prevState.currentPage == 1) {
            return {
                Contacts: props.solicitationData.contactNames,
                businessName: props.solicitationData.accountName,
                currentPage: 2
            };
        }

        if(prevState.solicitation == null && props.solicitationData.solicitation != null)
        {
            //TODO redirect to payment
            console.log("Solicitation Created");
        }

        return {
            Contacts: props.solicitationData.contactNames
        };
    }

    onStepOneChange(e) {
        var pageOneData = this.state.pageOneData;
        pageOneData[e.target.name] = e.target.value;

        this.setState({ pageOneData: pageOneData });
    }

    onStepOneSubmit(e) {
        e.preventDefault();

        var pageOneData = this.state.pageOneData;
        pageOneData.saving = true;

        this.setState({ pageOneData: pageOneData });
        this.props.actions.getContactNamesForAccount(this.state.pageOneData.gatekey);
    }

    onStepTwoDropDownChange(e) {
        var pageTwoData = this.state.pageTwoData;
        pageTwoData.dropDownValue = e.value;
        this.setState({pageTwoData: pageTwoData});
    }

    onStepTwoTextAreaChange(e) {
        var pageTwoData = this.state.pageTwoData;
        pageTwoData.textAreaValue = e.target.value;
        this.setState({pageTwoData: pageTwoData});
    }

    onStepTwoSubmit(e) {
        e.preventDefault();
        this.setState({currentPage: 3});
    }

    onStepThreeChange(e) {
        var pageThreeData = this.state.pageThreeData;
        pageThreeData[e.target.name] = e.target.value;

        this.setState({ pageThreeData: pageThreeData });
    }

    onStepThreeSubmit(e) {
        e.preventDefault();

        const finalData = {
            companyName: this.state.pageThreeData.companyname,
            businessName: this.state.businessName,
            companyUrl: this.state.pageThreeData.companyurl,
            email: this.state.pageThreeData.email,
            firstName: this.state.pageThreeData.firstname,
            lastName: this.state.pageThreeData.lastname,
            phoneNumber: this.state.pageThreeData.phonenumber,
            text: this.state.pageTwoData.textAreaValue
        };

        this.setState({finalData: finalData});
        this.setState({currentPage: 4});
    }

    onStepFourSubmit(e) {
        e.preventDefault();

        var finalData = this.state.finalData;
        finalData.saving = true;
        this.setState({finalData: finalData});

        const solData = {
            PhoneNumber: finalData.phoneNumber,
            FirstName: finalData.firstName,
            LastName: finalData.lastName,
            Email: finalData.email,
            CompanyName: finalData.companyName,
            Text: finalData.text,
            URL: finalData.companyUrl,
            RequestedUserTitle: this.state.pageTwoData.dropDownValue
        };

        this.props.actions.createSolicitation(this.state.pageOneData.gatekey, solData);
    }

    render() {
        return (
            <div className="login-wrapper wd-300 wd-xs-450 pd-25 pd-xs-40 bg-white rounded shadow-base" id="solicitationForm">

                {this.state.currentPage == 1 ?
                    <StepOne
                        onSubmit={this.onStepOneSubmit}
                        fieldData={this.state.pageOneData}
                        onChange={this.onStepOneChange}
                        errors={this.state.pageOneData.errors}
                        saving={this.state.pageOneData.saving} /> : null
                }

                {this.state.currentPage == 2 ?
                    <StepTwo
                        contacts={this.state.Contacts}
                        businessName={""}
                        onDropDownChange={this.onStepTwoDropDownChange}
                        onTextAreaChange={this.onStepTwoTextAreaChange}
                        textAreaValue={this.state.pageTwoData.textAreaValue}
                        onSubmit={this.onStepTwoSubmit}
                        dropDownValue={this.state.pageTwoData.dropDownValue} /> : null
                }

                {this.state.currentPage == 3 ?
                    <StepThree
                        onSubmit={this.onStepThreeSubmit}
                        businessName=""
                        fieldData={this.state.pageThreeData}
                        onChange={this.onStepThreeChange}
                        errors={this.state.pageThreeData.errors}/> : null
                }

                {this.state.currentPage == 4 ?
                    <StepFour
                        data={this.state.finalData}
                        onSubmit={this.onStepFourSubmit}
                        saving={this.state.finalData.saving}/> : null
                }

            </div>
        );
    }
}

Solicitation.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    solicitationData: state.solicitations
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, SolicitationActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Solicitation);