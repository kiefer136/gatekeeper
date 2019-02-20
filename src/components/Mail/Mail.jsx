import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import { bindActionCreators } from 'redux';
import LoadingIndicator from '../common/LoadingIndicator.jsx';
import MailSideBar from './MailSideBar.jsx';


class Mail extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            messages: Object.assign([], this.props.messages),
            hasRequestedProps: false,
            currentMailIndex: 0,
            dealerMessage: Object.assign({}, this.props.dealerMessage),
            startDate: "",
            selectedDate: "",
            selectedTime: "12:30 PM",
            disabled: true,
            loading: true,
            btnDisabled: false,
            toggleArchived: false,
            searchLettering: ""
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.updateMessageState = this.updateMessageState.bind(this);
        this.calendarChange = this.calendarChange.bind(this);
        this.timeChange = this.timeChange.bind(this);
        this.calendarSave = this.calendarSave.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        this.closeCalendarWindow = this.closeCalendarWindow.bind(this);
        this.declineRequest = this.declineRequest.bind(this);
        this.toggleArchivedFunc = this.toggleArchivedFunc.bind(this);
        this.searchChange = this.searchChange.bind(this);
    }

    sendMessage() {
        var verify = window.confirm("Confirm message?");
        if (verify) {
            this.setState({
                btnDisabled: true
            });
            toastr.success(this.state.dealerMessage.message);

            let _msgList = this.props.messages;
            let _msgObjects = [];

            _msgList.forEach(function (msg, index) {
                let _next = {
                    accountId: msg.accountId,
                    companyName: msg.companyName,
                    companyUrl: msg.companyUrl,
                    dealerCode: msg.dealerCode,
                    email: msg.email,
                    firstName: msg.firstName,
                    id: msg.id,
                    lastName: msg.lastName,
                    phoneNumber: msg.phoneNumber,
                    productDescription: msg.productDescription,
                    requestedUserId: msg.requestedUserId,
                    commonMessages: msg.messages
                };

                _msgObjects.push(_next);
            });

            
            let _msg = {
                AccountId: sessionStorage.getItem("AccId"),
                Message: this.state.dealerMessage.message,
                From: "Dealer",
                SollicitationId: _msgObjects[this.state.currentMailIndex].id,
                phoneNumber: _msgObjects[this.state.currentMailIndex].phoneNumber,
                productDescription: _msgObjects[this.state.currentMailIndex].productDescription,
                requestedUserId: _msgObjects[this.state.currentMailIndex].requestedUserId,
                commonMessages: _msgObjects[this.state.currentMailIndex].messages,
                TimeSent: new Date()
            };

            this.props.actions.sendMail(_msg)
            .then(() => this.Reload());
        } else {
            return
        }
    }

    declineRequest() {
        let msg;
        let accountId = this.props.messages[0].accountId;
        let solicitationId = this.props.messages[this.state.currentMailIndex].id;
        let declinedCheck = this.props.messages[this.state.currentMailIndex].declined;
        declinedCheck ? msg = "Un-archive solicitation?" : msg = "Decline request?";
        var verify = window.confirm(msg);
        let resObj = {AccountId: accountId, SollicitationId: solicitationId};
        if (verify) {
            this.setState({
                btnDisabled: true
            });
            this.props.actions.tryDeleteSolicitation(resObj).then(() => {
                this.Reload();
            });
            toastr.success("Request Declined");
        }
        
    }

    updateMessageState(event) {
        const field = event.target.name;
        let buttonDisabled = false;
        let details = Object.assign({}, this.state.dealerMessage);
        details[field] = event.target.value;

        details[field].length > 0 ? buttonDisabled = false : buttonDisabled = true;

        this.setState({dealerMessage: details, disabled: buttonDisabled});
    }

    openCalendar() {
        // let button = document.getElementsByClassName('im-btn btn-save ion-checkmark');
        // button[0].innerHTML = "Schedule Meeting";
        document.getElementById('buttonWraps').classList.add('butHide');
        document.getElementById('mailCalendar').classList.remove('calHide');
    }

    calendarChange(date) {
        this.setState({
            startDate: date,
            selectedDate: date.toString().slice(0, 15)
        });
    }
    timeChange(e) {
        let val = e.target.value;
        let type = e.target.name;
        let newDate = this.state.selectedTime;
        let hr = newDate.substr(0, 2);
        let min = newDate.substr(3, 2);
        let amType = newDate.substr(6, 7);

        if (type == "hr") {
            newDate = val + ":" + min + " " + amType;
        } else if (type == "min") {
            newDate = hr + ":" + val + " " + amType;
        } else {
            newDate = hr + ":" + min + " " + val;
        }
        this.setState({
            selectedTime: newDate
        })
    }

    calendarSave() {
        let currentMailItem = this.props.messages[this.state.currentMailIndex];
        let data = {
            accountId: currentMailItem.accountId,
            solicitationId: currentMailItem.id,
            meetingTime: this.state.selectedDate + " " + this.state.selectedTime,
            message: this.state.dealerMessage.message ? this.state.dealerMessage.message : ""
        };
        var verify = window.confirm("Are you sure you would like to request a meeting for " + this.state.selectedDate + " " + this.state.selectedTime);
        if (verify) {
            this.setState({
                btnDisabled: true
            });
            this.props.actions.requestMeeting(data).then(() => {
                this.Reload();
            });
            toastr.success("Meeting request sent");
            document.getElementById('mailCalendar').classList.add('calHide');
            document.getElementById('buttonWraps').classList.remove('butHide');
        }
    }

    closeCalendarWindow() {
        document.getElementById('mailCalendar').classList.add('calHide');
        document.getElementById('buttonWraps').classList.remove('butHide');
    }

    toggleArchivedFunc() {
        this.setState({
            toggleArchived: this.state.toggleArchived ? false : true 
        })
    }
    
    searchChange(event) {
        let field = event.target.value;
        this.setState({searchLettering: field});
    }

    render() {

            // search code "keep for now"  
            // if (searchString != "") {
            //     let g = Object.values(_next);
            //     g.forEach(function (elem) {
            //         if (typeof elem === 'string') {
            //             if (elem.toLowerCase().includes(searchString)) {
            //                 match = true;
            //             }
            //         }
            //     });
            //     match ? _next.hidden = false : _next.hidden = true;
            // }
            // _msgObjects.push(_next);

        return (
            <div className="solicitationsPage">
                <div className="mailPage SideBar twoSideBars">
                    {!this.state.loading ? <LoadingIndicator message="Loading Mail" hasHeader={true}/> : "" }

                    <div className="sideBar">
                        {/* <SideBar
                            solicitor={_msgObjects[this.state.currentMailIndex] ? _msgObjects[this.state.currentMailIndex] : ""}
                        /> */}
                    </div>
                    <div className="mailSideBar">
                        <MailSideBar 
                            messages={_msgObjects}
                            mailIndexUpdated={this.mailIndexUpdated} 
                            toggleArchived={this.state.toggleArchived}
                            toggleArchivedFunc={this.toggleArchivedFunc}
                            index={this.state.currentMailIndex}
                            searchChange={this.searchChange}
                        />
                    </div>
                    <div className="mainBody">
                        <div className="br-pageheader pd-y-15 pd-md-1-20">
                            <nav className="breadcrumb pd-0 mg-0 tx-12">
                                <a href="/" className="breadcrumb-item">Dashboard</a>
                                <span className="breadcrumb-item active">Solicitations</span>
                            </nav>
                        </div>
                       {/* <MailBody/> */}
                            <div className="inner-Container">
                            <div className="row">
                                <div className="col-md-11">
                                    <h1 className="tx-gray-800 mg-b-5">No Messages</h1>
                                    {/* <p className="mg-b-0 ">Check back later...</p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    mail: state.mail
});

const mapDispatchToProps = (dispatch) => {
        // actions: bindActionCreators(solicitationActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Mail)