import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import './styles/react-input-moment.min.css';
import './styles/toastr.min.css';
import './styles/spinkit.css';
import './styles/bracket.min.css';
import './styles/katniss.css';
import './styles/styles.css';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components_new/Login/Login.jsx';
import HomePage from './components_new/home/Home.jsx';
import ContactsPage from './components/contacts/ContactsPage.jsx';
import Mail from './components_new/mail/Mail.jsx';
import HeadPanel from './components/header/HeadPanel.jsx';
import Account from './components_new/account/Account.jsx';
import SolicitationForm from './components_new/solicitation/Solicitation.jsx';
import ResetPassword from './components_new/password/ResetPassword.jsx';
import Signup from './components_new/signup/Signup.jsx';
import ManageAccount from './components_new/manage/ManageAccount.jsx';


export const authCheck = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authCheck.isAuthenticated === true
      ? <Component {...props} /> 
      : <Redirect to='/login' />
  )}/>
)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {/* <PrivateRoute path='/' component={Protected}/> */}

            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/contacts" component={ContactsPage}/>
            <PrivateRoute exact path="/mail" component={Mail}/>
            <PrivateRoute exact path="/manageaccount" component={ManageAccount}/>
            <PrivateRoute exact path="/account" component={Account}/>

            <Route path="/login/" component={Login} />
            <Route path="/message" component={SolicitationForm}/>
            <Route path="/resetpassword" component={ResetPassword}/>
            <Route path="/signup" component={Signup}/>

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;