import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const UpcomingMeetings = ({upComingMail}) => {
    console.log(upComingMail);
    return(
        <div className="bd bd-gray-300 rounded table-responsive card pd-0 mg-t-20 bd-0 shadow-base">
            <div className="card bd-0 shadow-base pd-30 schedWrap">
                <div className="d-flex align-items-center justify-content-between mg-b-30">
                    <div>
                    <h6 className="tx-20 tx-inverse tx-semibold tx-spacing-1">Scheduled Meetings</h6>
                    </div>
                </div>
                {upComingMail && upComingMail.length > 0 ? 
                    <table className="table table-valign-middle mg-b-0">
                        <thead>
                            <tr>
                                <td className="pd-l-0-force"><h6 className="tx-inverse tx-18 mg-b-0">Contact Info</h6></td>
                                <td className="pd-l-0-force"><h6 className="tx-inverse tx-18 mg-b-0">Meeting Time</h6></td>
                                <td className="pd-l-0-force"><h6 className="tx-inverse tx-18 mg-b-0">Description</h6></td>
                                <td className="pd-l-0-force"><h6 className="tx-inverse tx-18 mg-b-0"></h6></td>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {upComingMail.reverse().map(({id, email, firstName, lastName, text, requestedScheduleTime, companyName}) => 
                            <tr key={id}>
                                <th className="pd-l-0">
                                    <h6 className="tx-inverse tx-14 mg-b-0">{firstName} {lastName} [{companyName}]</h6>
                                    <span className="tx-12">{email}</span>
                                </th>
                                
                                <td>{moment(requestedScheduleTime).format('MMMM Do YYYY, h:mm a')}</td>
                                <td><span id="sparkline1">{text.substring(0, 50) + (text.length > 50 ? "..." : "") }</span></td>
                                <td className="pd-r-0-force tx-center">
                                    <NavLink to="/mail" className="tx-gray-600" activeClassName="active">
                                        <i className="fa fa-envelope tx-18 lh-0"></i>
                                        <i className="fa fa-arrow-right tx-14 lh-0 mg-l-10"></i>
                                    </NavLink>
                                </td>
                            </tr>
                        ) }
                        </tbody>
                    </table>
                    : "No scheduled meetings."}    
            </div>
        </div>
    );
}

export default UpcomingMeetings;