import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import SideLeftHeader from '../header/SideLeftHeader.jsx';
import HeadPanel from '../header/HeadPanel.jsx';
import SideBarLeft from '../sidebar/SideBarLeft.jsx';
import BreadCrumbs from '../header/BreadCrumbs.jsx';
import MainPanel from './MainPanel.jsx';
import moment from 'moment';
import { Redirect } from 'react-router';
import * as ContactActions from '../../actions/contactActions';
import { bindActionCreators } from 'redux';

export class ContactsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: '',
            redirect: null,
            title: '',
            firstname: '',
            lastname: '',
            email: '',
            contact: null,
            saving: false,
            creating: false,
            selectedItems: []
        };

        this.onDeleteClicked = this.onDeleteClicked.bind(this);
        this.onListItemSelected = this.onListItemSelected.bind(this);
        this.ToggleForm = this.ToggleForm.bind(this);
        this.onSubmitContact = this.onSubmitContact.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onNavClick = this.onNavClick.bind(this);
        this.onNextPageClick = this.onNextPageClick.bind(this);
        this.onPreviousPageClick = this.onPreviousPageClick.bind(this);
    };

  componentDidMount() {
    setInterval(() => {
      let str = moment().format('MMMM Do YYYY, h:mm:ss a');

      this.setState({time: str})
    }, 1000);  
  }

  ToggleForm(e)
  {
    e.preventDefault();
    this.setState({creating: !this.state.creating});
  }

  onSubmitContact(e)
  {
    e.preventDefault();
    this.setState({saving: true});

    const newContactData = {
      Title: this.state.title,
      Email: this.state.email,
      FirstName: this.state.firstname,
      LastName: this.state.lastname
    }

    this.props.actions.createContact(this.props.accData, newContactData);
    this.setState({creating: false});
  }

  onListItemSelected(e) {
    let items = this.state.selectedItems;
    var index = items.indexOf(e.target.name);

    if(index > -1)
    {
      items.splice(index, 1);
    }
    else
    {
      items.push(e.target.name);
    }
    this.setState({selectedItems: items});

  }

  onDeleteClicked(e) {
    let selectedItems = this.state.selectedItems;
    for (var i = 0; i < selectedItems.length; i++)
    {
      let accData = {
        id: this.props.accData.id
      };
      let conData = {
        id: selectedItems[i]
      };

      this.props.actions.deleteContact(accData, conData);
    }

    this.setState({selectedItems: []});
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onNavClick(e)
  {
    this.setState({redirect: e.target.name});
  }

  onNextPageClick()
  {
    let pageNum = this.props.conData.currentPage + 1;

    const accData = {
      id: this.props.accData.id,
      pageNumber: pageNum,
      pageSize: 5,
      gateKey: this.props.accData.gateKey
    }

    this.props.actions.fetchContacts(accData);
  }

  onPreviousPageClick()
  {
    let pageNum = this.props.conData.currentPage - 1;

    const accData = {
      id: this.props.accData.id,
      pageNumber: pageNum,
      pageSize: 5,
      gateKey: this.props.accData.gateKey
    }

    this.props.actions.fetchContacts(accData);
  }

  render() {

    let TableHeaders = ['Title', 'Email', 'Name'];

    let fieldData = {
      title: this.state.title,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    };

    return (
      <div className="br-contentpanel contactsPage">

        { this.state.redirect == null ? null : <Redirect to={'/' + this.state.redirect}></Redirect> }

        <SideBarLeft
          onClick={this.onNavClick}/>
          
        <HeadPanel companyName="comp name"/>

        <MainPanel
          TableHeaders={TableHeaders}
          Contacts={this.props.conData.items}
          HasNext={this.props.conData.hasNextPage}
          HasPrevious={this.props.conData.hasPreviousPage}
          NextPageClickHandler={this.onNextPageClick}
          PreviousPageClickHandler={this.onPreviousPageClick}
          FieldData={fieldData}
          ChangeHandler={this.onInputChange}
          SubmitHandler={this.onSubmitContact}
          ShowForm={this.state.creating}
          ToggleForm={this.ToggleForm}
          OnListItemSelected={this.onListItemSelected}
          OnDeleteClicked={this.onDeleteClicked}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    accData: state.account,
    solData: state.solicitations,
    conData: state.contacts
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, ContactActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);