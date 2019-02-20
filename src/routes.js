// import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';

// // isLoggedIn is coming from the redux store
// export default App ({ isLoggedIn }) {
//   // render the private routes when the user is logged in
//   if (isLoggedIn) {
//     return (
//       <Switch>
//         <Route exact path="/home" component={HomePage} />
//         <Route exact path="/contacts/" component={ContactsPage} />
//         <Route exact path="/mail" component={Mail} />
//         <Route exact path="/manageaccount" component={ManageAccount}/>
//         <Route exact path="/account" component={Account}/>
//         <Redirect exact from="/" to="/home" />
//         {/* <Route component={NotFoundPage} /> */}
//       </Switch>
//     )
//   }

//   // render the public router when the user is not logged in
//   return (
//     <Switch>
//       <Route exact path="/login" component={LoginPage} />
//       <Route exact path="/register" component={RegisterPage} />
//       <Redirect to="/login" />

//       <Route path="/login/" component={Login} />
//         <Route path="/message" component={SolicitationForm}/>
//         <Route path="/resetpassword" component={ResetPassword}/>
//         <Route path="/signup" component={Signup}/>
//     </Switch>
//   )
// }



