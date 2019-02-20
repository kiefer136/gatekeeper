import React, { PropTypes } from 'react';
import MailBubble from './MailBubble.jsx';
import moment from 'moment';
import ButtonsInput from './ButtonsInput.jsx';
import '../../styles/react-input-moment.min.css';


const TimeToExclude = ([moment().hours(17).minutes(0), moment().hours(18).minutes(30), moment().hours(19).minutes(30)], moment().hours(17).minutes(30));

const MailBody = (props) => {
    console.log(props.selectedMail);
    // declined, firstName, lastName, companyName, 
    //     productDescription, messages, openCalendar, 
    //     onSendMessage, onChange, calendarChange, calendarSave, details, time, 
    //     timeToday, disabled, selectedDate, closeCalendarWindow, 
    //     declineRequest, scheduled, scheduledDate, btnDisabled, timeChange, selectedTime 
    if(props.selectedMail)
    {
        var date =  new Date(props.selectedMail.timeSent);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var dt = date.getDate();

        if(dt < 10) {
            dt = '0' + dt;
        }
        if(month < 10) {
            month = '0' + month;
        }
    }

    return (
        <div id="mailBody" className="br-mailbox-body">
            <div className="mg-b-15 mailDetailsCard">
                <div className="form-layout mg-l-30 mg-t-30">
                    <h1 className="tx-gray-800 tx-22 mg-b-5">Message Details</h1>
                    <p className="mg-b-0 tx-gray-600">Details of the person who sent you this message request.</p>
                </div>
                <div className="br-msg-header">

                    <div className="media align-items-center">
                        <div className="media-body ">
                            <p className="tx-inverse tx-medium mg-b-0 tx-uppercase">Requested Contact:</p>
                            <p className="tx-12 mg-b-0">
                                <span className="tx-15">{props.selectedMail.requestedUserTitle}</span>
                            </p>
                        </div>
                    </div>

                    <div className="media align-items-center">
                        <div className="media-body ">
                            <p className="tx-inverse tx-medium mg-b-0 tx-uppercase">Company Name:</p>
                            <p className="tx-12 mg-b-0">
                                <span className="tx-15">{props.selectedMail.companyName}</span>
                            </p>
                        </div>
                    </div>

                    <div className="media align-items-center">
                        <div className="media-body ">
                            <p className="tx-inverse tx-medium mg-b-0 tx-uppercase">First Name:</p>
                            <p className="tx-12 mg-b-0">
                                <span className="tx-15">{props.selectedMail.firstName}</span>
                            </p>
                        </div>
                    </div>

                    <div className="media align-items-center">
                        <div className="media-body ">
                            <p className="tx-inverse tx-medium mg-b-0 tx-uppercase">Last Name:</p>
                            <p className="tx-12 mg-b-0">
                                <span className="tx-15">{props.selectedMail.lastName}</span>
                            </p>
                        </div>
                    </div>

                    <div className="media align-items-center">
                        <div className="media-body ">
                            <p className="tx-inverse tx-medium mg-b-0 tx-uppercase">Email: </p>
                            <p className="tx-12 mg-b-0">
                                <span className="tx-15">{props.selectedMail.email}</span>
                            </p>
                        </div>
                    </div>

                    <div className="media align-items-center">
                        <div className="media-body ">
                            <p className="tx-inverse tx-medium mg-b-0 tx-uppercase">Phone Number: </p>
                            <p className="tx-12 mg-b-0">
                                <span className="tx-15">{props.selectedMail.phoneNumber}</span>
                            </p>
                        </div>
                    </div>
                    {props.selectedMail.url && 
                        <div className="media align-items-center">
                            <div className="media-body ">
                                <p className="tx-inverse tx-medium mg-b-0 tx-uppercase">Company Url: </p>
                                <p className="tx-12 mg-b-0">
                                    <span className="tx-15">{props.selectedMail.url}</span>
                                </p>
                            </div>
                        </div>
                    }
                </div>

            </div>
            <div className="messages">
                <MailBubble
                    firstName={props.selectedMail.firstName}
                    lastName={props.selectedMail.lastName}
                    companyName={props.selectedMail.companyName}
                    productDescription={props.selectedMail.text}
                    from={"Sollicitor"}
                    time={props.selectedMail.timeSent} />

                {props.messages.map((msg, index) =>
                    <div key={msg.id}>
                        <MailBubble
                            firstName={props.selectedMail.firstName}
                            lastName={props.selectedMail.lastName}
                            companyName={props.selectedMail.companyName}
                            productDescription={msg.text}
                            from={msg.from}
                            time={msg.timeSent} />
                    </div>
                )}
            </div>
            <div className="pd-l-30 pd-b-30 buttonWrapTop">
            {!props.btnDisabled ? 
                <div>
                    {!props.selectedMail.declined && !props.selectedMail.scheduled ?
                        <ButtonsInput 
                            // onChange={onChange}
                            messageText={props.messagesText}
                            onTextAreaChange={props.onTextAreaChange}
                            onSendMessage={props.onSendMessage}
                            openCalendar={props.openCalendar} 
                            declineRequest={props.declineOnClick} 
                            // disabled={disabled} 
                            // scheduled={scheduled}
                            calendarSave={props.calendarSave} 
                            calendarChange={props.calendarChange} 
                            timeToday={props.startDate}
                            selectedDate={props.selectedDate}
                            selectedTime={props.selectedTime}
                            closeCalendarWindow={props.closeCalendarWindow}
                            // btnDisabled={btnDisabled}
                            timeChange={props.timeChange}
                        />
                    : <div></div> }
                    
                    {props.selectedMail.declined && 
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card bd-0">
                                    <div className="card-header bg-danger bd-0 d-flex align-items-center justify-content-between pd-y-5">
                                        <h6 className="mg-b-0 tx-16 tx-white tx-normal">Declined Request</h6>
                                        <div className="card-option tx-24">
                                            <a href="" className="tx-white-8 hover-white mg-l-10"></a>
                                            <a href="" className="tx-white-8 hover-white mg-l-10"></a>
                                            <a href="" className="tx-white-8 hover-white mg-l-10"></a>
                                        </div>
                                    </div>
                                    <div className="card-body bd bd-t-0 rounded-bottom-0">
                                        <p className="mg-b-0 tx-15 fw-500">This solicitation has been declined by your request. If you want to get back in contact with this solicitor or accidentally declined it.</p>
                                        Click <span onClick={props.declineOnClick}className="unarchive">here</span> to un-archive it.
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    {props.selectedMail.scheduled && 
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card bd-0">
                                    <div className="card-header bg-success bd-0 d-flex align-items-center justify-content-between pd-y-5">
                                        <h6 className="mg-b-0 tx-16 tx-white tx-normal">Accepted Request</h6>
                                        <div className="card-option tx-24">
                                            <a href="" className="tx-white-8 hover-white mg-l-10"></a>
                                            <a href="" className="tx-white-8 hover-white mg-l-10"></a>
                                            <a href="" className="tx-white-8 hover-white mg-l-10"></a>
                                        </div>
                                    </div>
                                    <div className="card-body bd bd-t-0 rounded-bottom-0">
                                        <p className="mg-b-0 tx-15 fw-500">You have accepted this meeting request for {moment(props.selectedMail.requestedScheduleTime).format('MMMM Do YYYY, h:mm a')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            : 
            <div className="sk-circle">
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
            </div>
            }
            </div>
        </div>
    );
}


export default MailBody;