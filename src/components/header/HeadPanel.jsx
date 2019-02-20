import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../logo.png';
import { NavLink } from 'react-router-dom';

const HeadPanel = ({companyName}) => {
  return (
    <div className="mainHeader">
      <div className="br-logo"><a href="/"><span></span><img className="gateKeeper-Logo" src={Logo} /><span></span></a></div>
      <div className="br-header">
          <div className="br-header-left">
              <div className="navicon-left hidden-lg-up"><a id="btnLeftMenuMobile" href=""><i className="icon ion-navicon-round"></i></a></div>
              <div className="pd-10">
                  <ul className="nav nav-gray-600 flex-column flex-sm-row" role="tablist">
                      <li className="nav-item"><NavLink to="/" className="nav-link" activeClassName="active">Dashboard</NavLink></li>
                      <li className="nav-item"><NavLink to="/contacts" className="nav-link" activeClassName="active">Contacts</NavLink></li>
                      <li className="nav-item"><NavLink to="/mail" className="nav-link" activeClassName="active">Mail</NavLink></li>
                      <li className="nav-item"><NavLink to="/manageaccount" className="nav-link" activeClassName="active">Account</NavLink></li>
                  </ul>
              </div>
          </div>
          <div className="br-header-right">
              <nav className="nav">
              <div className="dropdown">
                  <a href="#" title="LogOut" className="userIcon">
                      <i className="fa fa-power-off"></i>
                  </a>
                  <a title="Account Page" href="/manageAccount" className="userIcon">
                      <i className="far fa-user"></i>
                      <span className="logged-name tx-20 tx-inverse fw-600 hidden-md-down">{companyName}</span>
                  </a>
              </div>
              </nav>
              <div className="navicon-right">
                <NavLink to="/mail" title="Messages Page" id="btnRightMenu" className="pos-relative">
                    <i className="far fa-comments"></i>
                    <span className="square-8 bg-danger pos-absolute t-10 r--5 rounded-circle"></span>
                </NavLink>
              </div>
          </div>
      </div>
    </div>
  )
}

HeadPanel.propTypes = {

}

export default HeadPanel;