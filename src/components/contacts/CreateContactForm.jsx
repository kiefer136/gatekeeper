import React from 'react'

const CreateContactForm = ({FieldData, ChangeHandler, SubmitHandler, ToggleForm}) => {
  return (
    <div className="card pd-20 pd-sm-40 mg-t-60">
        <h6 className="card-body-title">Create New Contact</h6>
        <p className="mg-b-20 mg-sm-b-30">Enter information for a new contact.</p>
        <div className="form-layout">
            <div className="row mg-b-25">


                <div className="col-lg-4">
                    <div className="form-group">
                        <label className="form-control-label">Title: <span className="tx-danger">*</span></label>
                        <input className="form-control" type="text" name="title" onChange={ChangeHandler} value={FieldData.title} placeholder="Enter Title. Ex: 'Manager'"/>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="form-group">
                        <label className="form-control-label">Firstname: <span className="tx-danger">*</span></label>
                        <input className="form-control" type="text" name="firstname" onChange={ChangeHandler} value={FieldData.firstname} placeholder="Enter First Name"/>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="form-group">
                        <label className="form-control-label">Lastname: <span className="tx-danger">*</span></label>
                        <input className="form-control" type="text" name="lastname" onChange={ChangeHandler} value={FieldData.lastname} placeholder="Enter Last Name"/>
                    </div>
                </div>


                <div className="col-lg-12">
                    <div className="form-group mg-b-10-force">
                        <label className="form-control-label">Email Address: <span className="tx-danger">*</span></label>
                        <input className="form-control" type="text" name="email" onChange={ChangeHandler} value={FieldData.email} placeholder="Enter contact email address"/>
                    </div>
                    <div className="form-layout-footer">
                        <button onClick={SubmitHandler} className="btn btn-default mg-r-5">Create Contact</button>
                        <button onClick={ToggleForm} className="btn btn-secondary">Cancel</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CreateContactForm;