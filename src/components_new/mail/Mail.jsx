import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as SolicitationActions from '../../actions/solicitationActions';
import * as MessageActions from '../../actions/messageActions';
import MailSideBar from './MailSideBar.jsx';
import MailBody from './MailBody.jsx';
import toastr from 'toastr';
import moment from 'moment';
import * as AccountActions from '../../actions/accountActions';
import HeadPanel from '../../components/header/HeadPanel.jsx';
import { NavLink } from 'react-router-dom';


class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: this.props.solicitationData.items,
            messages: this.props.messageData.items,
            pageSize: this.props.solicitationData.pageSize,
            currentPage: this.props.solicitationData.currentPage,
            totalPages: this.props.solicitationData.totalPages,
            hasNextPage: this.props.solicitationData.hasNextPage,
            hasPreviousPage: this.props.solicitationData.hasPreviousPage,
            totalCount: this.props.solicitationData.totalCount,
            unreadCount: this.props.solicitationData.unreadCount,
            scheduledCount: this.props.solicitationData.scheduledCount,
            archivedCount: this.props.solicitationData.declinedCount,
            toggleArchived: false,
            selectedMessage: {},
            btnDisabled: false,
            messageText: "",
            startDate: moment(),
            selectedDate: "",
            selectedTime: "12:30 PM",
        };

        this.navigateNextPage = this.navigateNextPage.bind(this);
        this.navigatePreviousPage = this.navigatePreviousPage.bind(this);
        this.updateSolicitation = this.updateSolicitation.bind(this);
        this.updateSolicitationScheduleData = this.updateSolicitationScheduleData.bind(this);
        this.updateSolicitationDeclineData = this.updateSolicitationDeclineData.bind(this);
        this.sendMessageForSolicitation = this.sendMessageForSolicitation.bind(this);
        this.fetchMessagesForSolicitation = this.fetchMessagesForSolicitation.bind(this);
        this.toggleArchivedFunc = this.toggleArchivedFunc.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.selectMessage = this.selectMessage.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        this.closeCalendarWindow = this.closeCalendarWindow.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.declineOnClick = this.declineOnClick.bind(this);
        this.calendarChange = this.calendarChange.bind(this);
        this.timeChange = this.timeChange.bind(this);
        this.calendarSave = this.calendarSave.bind(this);
        
        if (!this.state.account) {
    
          let userId = localStorage.getItem('user');
          if (userId) {
            const accData = {
              id: userId
            };
            this.props.actions.fetchAccount(accData);
          }
        }
    }

    static getDerivedStateFromProps(props, state) {

        let selected = state.selectedMessage;
        let newSelected = {};
        if (selected.id)  {
            let items = props.solicitationData.items;
            newSelected = items.filter(item => item.id == selected.id);
            newSelected = newSelected[0];
            console.log(newSelected);
        }

        return {
            mail: props.solicitationData.items,
            messages: props.messageData.items,
            pageSize: props.solicitationData.pageSize,
            currentPage: props.solicitationData.currentPage,
            totalPages: props.solicitationData.totalPages,
            hasNextPage: props.solicitationData.hasNextPage,
            hasPreviousPage: props.solicitationData.hasPreviousPage,
            totalCount: props.solicitationData.totalCount,
            unreadCount: props.solicitationData.unreadCount,
            scheduledCount: props.solicitationData.scheduledCount,
            archivedCount: props.solicitationData.declinedCount,
            selectedMessage: newSelected
        };

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
            pageSize: 20,
            gateKey: this.props.accountData.gateKey
        }

        this.props.actions.fetchContacts(paginationData);
    }

    navigatePreviousPage() {
        if(!this.state.hasPreviousPage)
        {
            return;
        }

        let pageNum = this.state.currentPage - 1;

        const paginationData = {
            id: this.props.accountData.id,
            pageNumber: pageNum,
            pageSize: 20,
            gateKey: this.props.accountData.gateKey
        }

        this.props.actions.fetchContacts(paginationData);
    }

    //Test func
    updateSolicitation(solicitationId)
    {
        const updatedSolicitation = {
            PhoneNumber: "123-123-1234",
            FirstName: "Kiefer",
            LastName: "McFeeds",
            Email: "feeder@carry2plat.ca",
            CompanyName: "Company Co.",
            Text: "This is a message",
            URL: "www.feeds.co",
            RequestedUserTitle: "Test"
        };

        this.props.actions.updateSolicitation(this.props.accountData, updatedSolicitation, solicitationId);
    }

    //Schedule Meeting
    updateSolicitationScheduleData(time)
    {
        // "08/18/2018 07:22:16"
        const scheduleData = {
            Scheduled: true,
            Time: time
        };

        this.props.actions.setSolicitationScheduled(this.props.accountData, scheduleData, this.state.selectedMessage.id);
    }

    //Decline Solicitation
    updateSolicitationDeclineData(condition)
    {
        const declineData = {
            Declined: condition
        };

        condition ? toastr.success('Request Declined') : toastr.success('Request Un-Archived');
        this.props.actions.setSolicitationDeclined(this.props.accountData, declineData, this.state.selectedMessage.id);
    }

    //Send Message
    sendMessageForSolicitation(solicitationId)
    {
        const msgData = {
            gateKey: this.props.accountData.gateKey,
            solicitationId: this.state.selectedMessage.id
        };

        const msg = {
            Text: this.state.messageText,
            From: "Business"
        };

        this.props.actions.sendMessage(msgData, msg);
    }

    //Gets mail for selected solicitation
    fetchMessagesForSolicitation(solicitationId)
    {
        const msgData = {
            gateKey: this.props.accountData.gateKey,
            solicitationId: solicitationId,
            pageNumber: 1,
            pageSize: 20
        };

        this.props.actions.fetchMessages(msgData);
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

    selectMessage(selectedId) {
        let currentMail = [...this.state.mail];
        let matchedMail = currentMail.filter(mail => mail.id == selectedId);
        this.fetchMessagesForSolicitation(matchedMail[0].id);
        this.setState({
            selectedMessage: matchedMail[0]
        });
    }
    openCalendar() {
        document.getElementById('buttonWraps').classList.add('butHide');
        document.getElementById('mailCalendar').classList.remove('calHide');
    }
    closeCalendarWindow() {
        document.getElementById('mailCalendar').classList.add('calHide');
        document.getElementById('buttonWraps').classList.remove('butHide');
    }

    onTextAreaChange(e) {
        this.setState({ messageText: e.target.value });
    }

    declineOnClick() {
        let toBeDeclined = true;
        this.state.selectedMessage.declined ? toBeDeclined = false : toBeDeclined = true;
        this.setState({
            ...this.state.selectedMessage,
            declined: true
        })

        this.updateSolicitationDeclineData(toBeDeclined);
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
        let date = this.state.selectedDate + " " + this.state.selectedTime;
        debugger;
        // var verify = window.confirm("Are you sure you would like to request a meeting for " + date);
        // if (verify) {
        //     this.updateSolicitationScheduleData(date);
        //     toastr.success("Meeting request sent");
        //     document.getElementById('mailCalendar').classList.add('calHide');
        //     document.getElementById('buttonWraps').classList.remove('butHide');
        // }
    }


    render() {
        return (
            <div>
                <HeadPanel companyName="comp name"/>
                <div className="mailPage">
                    <div className="mailPage SideBar">
                        <MailSideBar
                            messages={this.state.mail}
                            toggleArchived={this.state.toggleArchived}
                            toggleArchivedFunc={this.toggleArchivedFunc}
                            searchChange={this.searchChange}
                            selectFunc={this.selectMessage}
                            selectedId={this.state.selectedMessage.id}
                        />
                        <div className="br-pageheader pd-y-15 pd-md-1-20">
                            <nav className="breadcrumb pd-0 mg-0 tx-12">
                                <NavLink to="/" className="breadcrumb-item">Dashboard</NavLink>
                                <span className="breadcrumb-item active">Solicitations</span>
                            </nav>
                        </div>
                        {this.state.selectedMessage.accountId ? 
                        <MailBody 
                            selectedMail={this.state.selectedMessage}
                            btnDisabled={this.state.btnDisabled}
                            messages={this.state.messages}
                            openCalendar={this.openCalendar}
                            closeCalendarWindow={this.closeCalendarWindow}
                            onSendMessage={this.sendMessageForSolicitation}
                            onTextAreaChange={this.onTextAreaChange}
                            messageText={this.state.messageText}
                            declineOnClick={this.declineOnClick}
                            calendarChange={this.calendarChange}
                            startDate={this.state.startDate}
                            selectedDate={this.state.selectedDate}
                            selectedTime={this.state.selectedTime}
                            timeChange={this.timeChange}
                            calendarSave={this.calendarSave}
                        /> 
                        : 
                            <div className="inner-Container">
                                <div className="row">
                                    <div className="col-md-11">
                                        <h1 className="tx-gray-800 mg-b-5">Open a Message</h1>
                                        <p className="mg-b-0 "></p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

        );
    }
}

Mail.propTypes = {
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    solicitationData: state.solicitations,
    accountData: state.account,
    messageData: state.messages
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, SolicitationActions, MessageActions, AccountActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mail);