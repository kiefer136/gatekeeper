import React from 'react';
import PropTypes from 'prop-types';
import PageBody from './PageBody.jsx';
import Footer from '../footer/Footer.jsx';
import { NavLink } from 'react-router-dom';
//TableHeaders, Contacts

const MainPanel = ({TableHeaders, Contacts, HasNext, HasPrevious, NextPageClickHandler, PreviousPageClickHandler, FieldData, ChangeHandler, SubmitHandler, ShowForm, ToggleForm, OnListItemSelected, OnDeleteClicked}) => {
  return (
    <div className="kt-mainpanel">
        <div className="br-pageheader pd-y-15 pd-md-1-20">
            <nav className="breadcrumb pd-0 mg-0 tx-12">
                <NavLink to="/" className="breadcrumb-item">Dashboard</NavLink>
                <span className="breadcrumb-item active">Contacts</span>
            </nav>
        </div>
        <PageBody
          TableHeaders={TableHeaders}
          Contacts={Contacts}
          HasNext={HasNext}
          HasPrevious={HasPrevious}
          NextPageClickHandler={NextPageClickHandler}
          PreviousPageClickHandler={PreviousPageClickHandler}
          FieldData={FieldData}
          ChangeHandler={ChangeHandler}
          SubmitHandler={SubmitHandler}
          ShowForm={ShowForm}
          ToggleForm={ToggleForm}
          OnListItemSelected={OnListItemSelected}
          OnDeleteClicked={OnDeleteClicked}/>
        <Footer></Footer>
    </div>
  )
}

MainPanel.propTypes = {

}

export default MainPanel;