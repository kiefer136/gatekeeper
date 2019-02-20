import React, {PropTypes} from 'react';

const DealerGroupList = ({contacts, editContact}) => {
    return (
        <div className="mg-t-30 bd-0">
            {/* <div className="row contactCard">
                {contacts.length > 0 ? contacts.map(contact => 
                <div key={contact.id} className="col-md-3 cardRow">
                    <div className="card">
                        <div className="card-body card bd-0 shadow-base pd-30 ">
                            <h2 className="card-title tx-dark tx-medium mg-b-10">{contact.contactName}</h2>
                            <hr />
                            <p className="card-subtitle tx-normal mg-b-15">{contact.firstName + " " + contact.lastName}</p>
                            <p className="card-text">{contact.email}</p>
                            <div className="wd-50">
                                <Link to={'/manageContact/' + contact.id} className="btn btn-blue tx-14">Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <div>
                    <h3>You haven't set your contacts yet. Click "New Contact" to add contacts the solicitor will see.</h3>
                    <p>*The solicitor will only be able to see their Contact Name.</p>
                </div>}
            </div> */}
            <div className="shadow-base">
                <div className="bg bg-white pd-15 rounded table-responsive">
                {contacts.length == 0 ?
                        <div>
                            <h3>You have not set up your contacts yet. Select and complete contacts from the drop down menu above.</h3>
                            <p>*Only the Contact Name is shown to the person sending a request to you</p>
                        </div>
                    :
                    <table className={editContact ? "table table-hover mg-b-0" : "table mg-b-0" }>
                        <thead>
                            <tr>
                            <th>Contact Title</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                                {editContact && <th></th> }
                            </tr>
                        </thead>
                        <tbody>

                        {contacts.map(contact => 
                            
                                <tr onClick={() => (editContact ? editContact(contact.id) : console.log('0'))} key={contact.id} className={editContact ? "ContactRow" : ""}>
                                    <td>{contact.contactName}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.firstName}</td>
                                    <td>{contact.lastName}</td>
                                    {editContact &&
                                    <td>
                                        <button className="btn btn-blue" onClick={() => (editContact ? editContact(contact.id) : console.log('0'))}>Edit</button>
                                    </td>
                                    }
                                </tr>
                            
                            )}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default DealerGroupList;