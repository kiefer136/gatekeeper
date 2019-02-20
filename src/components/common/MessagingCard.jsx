import React from 'react';
import { NavLink } from 'react-router-dom';

const MessagingCard = ({mail}) => {
    console.log(mail);
    return(
        <div className="card bd-0 shadow-base pd-30 messCard">
            <div className="d-flex align-items-center justify-content-between mg-b-30">
                <div>
                <h6 className="tx-20 tx-inverse tx-semibold tx-spacing-1">New Requests</h6>
                </div>
                <NavLink to="/mail" className="btn btn-outline-info btn-oblong tx-11 tx-uppercase tx-mont tx-medium tx-spacing-1 pd-x-30 bd-2" activeClassName="active">
                    See all
                </NavLink>
            </div>

            <table className="table table-valign-middle mg-b-0">
                <tbody>
                {mail && mail.length > 0 ? mail.map(({id, companyName, companyUrl, email, firstName, lastName, text, phoneNumber, timeSent}) => 
                    <tr key={id}>
                        <td className="pd-l-0-force">
                            <h6 className="tx-inverse tx-14 mg-b-0">{firstName} {lastName}</h6>
                            <span className="tx-12">{email}</span>
                        </td>

                        <td>
                        </td>
                        <td>{timeSent.substring(0, 10)}</td>
                        <td><span id="sparkline1">{text.substring(0, 50) + (text.length > 50 ? "..." : "") }</span></td>
                        <td className="pd-r-0-force tx-center">
                            <NavLink to="/mail" className="tx-gray-600" activeClassName="active">
                                <i className="fa fa-envelope tx-18 lh-0"></i>
                                <i className="fa fa-arrow-right tx-14 lh-0 mg-l-10"></i>
                            </NavLink>
                        </td>
                    </tr>
                ) : "No new Requests."}
            
                </tbody>
            </table>
        </div>
    )
}

export default MessagingCard;