import React from 'react';
import PropTypes from 'prop-types';
import DataCard from '../common/cards/DataCard.jsx';
import SimpleTable from './SimpleTable.jsx';
import LoadingIndicator from '../common/LoadingIndicator.jsx';
import SideBarLeft from '../sidebar/SideBarLeft.jsx';
import MessagingCard from '../common/MessagingCard.jsx';
import UpcomingMeetings from '../common/UpcomingMeetings.jsx';


const PageBody = ({NewMessageCount, ScheduledMeetingCount, DeclinedRequestCount, LifetimeRequestCount, UnreadSolicitations, ScheduledSolicitations, Gatekey}) => {
  return (
 
    <div className="homePage">
        <div className="themeFlexWrap">
          <SideBarLeft gatekey={Gatekey}/>
            <div className="homeBody">
                <div className="row row-sm">
                    <div className="col-sm-6 col-xl-3">
                        <DataCard
                            ContentTitle="New Messages:"
                            ContentValue={NewMessageCount}
                            backColor="blue"
                        />
                    </div>
                    <div className="col-sm-6 col-xl-3 mg-t-20 mg-sm-t-0">
                        <DataCard
                            ContentTitle="Scheduled Meetings:"
                            ContentValue={ScheduledMeetingCount}
                            backColor="tealBlue"
                        />
                    </div>
                    <div className="col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0">
                        <DataCard
                            ContentTitle="Declined Requests:"
                            ContentValue={DeclinedRequestCount}
                            backColor="blue"
                        />
                    </div>
                    <div className="col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0">
                        <DataCard
                            ContentTitle="Lifetime Requests:"
                            ContentValue={LifetimeRequestCount}
                            backColor="tealBlue"
                        />
                    </div>
                </div>

                <div className="row row-sm mg-t-20">
                    <div className="col-12">
                        <MessagingCard mail={UnreadSolicitations}/>
                    </div>
                </div>
                
                <div className="row row-sm mg-t-20">
                    <div className="col-md-12">
                        <UpcomingMeetings upComingMail={ScheduledSolicitations}/>
                    </div>
                    <div className="col-md-4">
                        {/* <Chart data={this.state.data} /> */}
                    </div>
                </div>

                <div className="row row-sm mg-t-20">
                    <div className="col-12">
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

PageBody.propTypes = {

}

export default PageBody;