import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SideLeftHeader from '../header/SideLeftHeader.jsx';
import BreadCrumbs from '../header/BreadCrumbs.jsx';
import SideBarLeft from '../sidebar/SideBarLeft.jsx';
import MainPanel from './MainPanel.jsx';
import moment from 'moment';
import { Redirect } from 'react-router';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      redirect: null
    };

    this.onNavClick = this.onNavClick.bind(this);
  };

  onNavClick(e)
  {
    this.setState({redirect: e.target.name});
  }

  render() {
    let TableHeaders = ['Name', 'Email', 'Time', 'Message'];

    return (
      <div>
          { this.state.redirect == null ? null : <Redirect to={'/' + this.state.redirect}></Redirect> }
          <MainPanel
            NewMessageCount={this.props.solData.unreadCount}
            ScheduledMeetingCount={this.props.solData.scheduledCount}
            DeclinedRequestCount={this.props.solData.declinedCount}
            LifetimeRequestCount={this.props.solData.totalCount}
            UnreadSolicitations={this.props.solData.unreadItems}
            ScheduledSolicitations={this.props.solData.scheduledItems}
            TableHeaders={TableHeaders}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  accData: state.account,
  solData: state.solicitations
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);