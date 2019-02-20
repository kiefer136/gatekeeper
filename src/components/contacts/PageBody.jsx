import React from 'react';
import PropTypes from 'prop-types';
import SimpleTable from './SimpleTable.jsx';
import CreateContactForm from './CreateContactForm.jsx';

const PageBody = ({TableHeaders, Contacts, HasNext, HasPrevious, NextPageClickHandler, PreviousPageClickHandler, FieldData, ChangeHandler, SubmitHandler, ShowForm, ToggleForm, OnListItemSelected, OnDeleteClicked}) => {
  return (
    <div className="kt-pagebody">
      <div className="content-wrapper">
        <div className="content-left">
        {
            ShowForm
            ?
            <button onClick={ToggleForm} className="btn btn-danger btn-block mg-b-10">Cancel</button>
            :
            <button onClick={ToggleForm} className="btn btn-default btn-block mg-b-20">Create New Contact</button>
        }
            
        </div>
        <div className="content-body">
            <div className="content-body-header">
                <div className="d-flex">
                    {/* <div className="content-checkall">
                        <label className="ckbox mg-b-0">
                            <input type="checkbox"></input>
                            <span></span>
                        </label>
                    </div> */}
                    {Contacts.length > 0 ?
                    <div className="btn-group mg-b-0 hidden-xs-down">
                        <button onClick={OnDeleteClicked} className="btn btn-secondary">
                            <i className="fas fa-trash-alt tx-20"></i>
                        </button>
                    </div> : <div></div> }
                </div>
                {Contacts.length > 0 ?
                <div className="mg-l-auto">
                    <div className="btn-group mg-b-0">
                        {HasPrevious 
                        ?
                        <button className="btn btn-secondary" onClick={PreviousPageClickHandler}>
                            <i className="fas fa-arrow-left tx-20"></i>
                        </button>
                        :
                        <button className="btn btn-secondary disabled">
                            <i className="fas fa-arrow-left tx-20"></i>
                        </button>
                        }

                        {HasNext
                        ?
                        <button className="btn btn-secondary" onClick={NextPageClickHandler}>
                            <i className="fas fa-arrow-right tx-20"></i>
                        </button>
                        :
                        <button className="btn btn-secondary disabled">
                            <i className="fas fa-arrow-right tx-20"></i>
                        </button>
                        }
                    </div>
                </div>
                : <div></div> }
            </div>
        </div>
      </div>
      {
          ShowForm
          ?
          <CreateContactForm
          FieldData={FieldData}
          ChangeHandler={ChangeHandler}
          SubmitHandler={SubmitHandler}
          ToggleForm={ToggleForm}/>
          :
          null
      }
      {Contacts.length == 0 ?
        <div className="mg-y-60">
            <h3>You currently have no contacts.</h3>
            <p className="mg-y-15 tx-17">Please create contacts relative to your company.</p>
        </div> : 
      <SimpleTable
        Title="Contacts"
        Items={Contacts}
        MaxSize={20}
        Headers={TableHeaders}
        OnListItemSelected={OnListItemSelected}/>
      }
    </div>
  )
}

PageBody.propTypes = {

}

export default PageBody;