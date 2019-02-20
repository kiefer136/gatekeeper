import React from 'react';
import {DatePicker} from 'react-input-moment';
import InputTextField from '../../components/common/InputTextField.jsx';
import moment from 'moment';

const ButtonsInput = ({messageText, onSendMessage, openCalendar, declineRequest, disabled, calendarSave, calendarChange, timeToday, closeCalendarWindow, selectedDate, btnDisabled, timeChange, selectedTime, onTextAreaChange}) => {
    console.log(messageText);
    return(
        <div className="mg-x-0 flex-row">
            <div className="buttonWrap">

                <div id="buttonWraps" className="buttons">
                    <button onClick={onSendMessage} disabled={false} className="btn btn-info btn-Success-Blue"><i className="fa fa-envelope mg-r-10"></i> Send Message</button>
                    <button onClick={declineRequest} disabled={false} className="btn btn-info "><i className="fa fa-times-circle mg-r-10"></i> Decline Request</button>
                    <button onClick={openCalendar} disabled={false} className="btn btn-request"><i className="fa fa-calendar mg-r-10"></i> Schedule Meeting</button>
                </div>

                <div className="clockInside calHide" id="mailCalendar">
                    <h3 className="selectedTime">Select a Time</h3>
                    <DatePicker
                        moment={timeToday}
                        onChange={calendarChange}
                        prevMonthIcon="fa fa-chevron-left" // default
                        nextMonthIcon="fa fa-chevron-right" // default
                    />
                    <div className="timeSelectGroup">
                        <select name="hr" className="form-control timeDropdown hrDrop" onChange={timeChange}>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12" selected>12</option>
                        </select>
                        
                        <select name="min" className="form-control timeDropdown minDrop" onChange={timeChange}>
                            <option value="00">00</option>
                            <option value="05">05</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30" selected>30</option>
                            <option value="35">35</option>
                            <option value="40">40</option>
                            <option value="45">45</option>
                            <option value="50">50</option>
                            <option value="55">55</option>
                            <option value="60">60</option>
                        </select>

                        <select name="ampm" className="form-control timeDropdown amPmDrop" onChange={timeChange}>
                            <option>AM</option>
                            <option selected>PM</option>
                        </select>
                    </div>
                    <h3 className="selectedTimeBottom">{selectedDate != "" ? selectedDate + " " + selectedTime : "Select a Time" }</h3>
                    <div className="tx-center">
                        <button className="btn btn-blue" disabled={selectedDate != "" ? false : true} onClick={calendarSave}>Schedule Meeting</button>
                    </div>
                    <div onClick={closeCalendarWindow} className="closeWindow tx-15">x <span className="tx-10">close window</span></div>
                </div>
            </div>

            <div className="textAreaMail">
                <InputTextField
                    name="message"
                    value={messageText}
                    disabled={messageText ? "true" : "false"}
                    onChange={onTextAreaChange}
                    errors={""}
                    placeHolder="Enter Message To Sollicitor"/>
            </div>
        </div>
    )
}

export default ButtonsInput;