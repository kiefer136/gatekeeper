import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPanel from '../../components/home/MainPanel.jsx';
import {Redirect} from 'react-router-dom';
import HeadPanel from '../../components/header/HeadPanel.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newRequestCount: this.props.solicitationData.unreadCount,
            scheduledRequestCount: this.props.solicitationData.scheduledRequestCount,
            declinedRequestCount: this.props.solicitationData.declinedCount,
            lifetimeRequestCount: this.props.solicitationData.totalCount,
            newRequests: this.props.solicitationData.unreadItems,
            scheduledRequests: this.props.solicitationData.scheduledItems
        };

        console.log(this.state);
    }

    render() {
        return(
            <div>
                <HeadPanel companyName="comp name"/>
                { this.state.redirect == null ? null : <Redirect to={'/' + this.state.redirect}></Redirect> }
                <MainPanel
                    NewMessageCount={this.props.solicitationData.unreadCount}
                    ScheduledMeetingCount={this.props.solicitationData.scheduledCount}
                    DeclinedRequestCount={this.props.solicitationData.declinedCount}
                    LifetimeRequestCount={this.props.solicitationData.totalCount}
                    UnreadSolicitations={this.props.solicitationData.unreadItems}
                    ScheduledSolicitations={this.props.solicitationData.scheduledItems}
                    Gatekey={this.props.accountData.gateKey}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    accountData: state.account,
    solicitationData: state.solicitations
});

export default connect(mapStateToProps, null)(Home);