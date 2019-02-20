import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../header/PageTitle.jsx';
import PageBody from './PageBody.jsx';
import Footer from '../footer/Footer.jsx';

const MainPanel = ({NewMessageCount, ScheduledMeetingCount, DeclinedRequestCount, LifetimeRequestCount, UnreadSolicitations, ScheduledSolicitations, Gatekey}) => {
  return (
    <div className="appContainer br-pagebody mg-t-5 pd-x-30">
        <PageBody
          NewMessageCount={NewMessageCount}
          ScheduledMeetingCount={ScheduledMeetingCount}
          DeclinedRequestCount={DeclinedRequestCount}
          LifetimeRequestCount={LifetimeRequestCount}
          UnreadSolicitations={UnreadSolicitations}
          ScheduledSolicitations={ScheduledSolicitations}
          Gatekey={Gatekey}
          />
        <Footer></Footer>
    </div>
  )
}

MainPanel.propTypes = {

}

export default MainPanel;