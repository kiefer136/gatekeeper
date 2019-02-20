import React from 'react';
import PropTypes from 'prop-types';

const SideLeftMenu = ({onClick, Gatekey}) => {
  return (
    <div className="br-subleft pd-l-0 pd-r-0 l-0">
        <div className="br-mailbox-list-header">
            <h4 className="tx-uppercase tx-14 tx-mont tx-spacing-1  pd-l-10 tx-white-7">Dashboard</h4>
        </div>
        <h5 className="tx-14 tx-mont tx-spacing-1 tx-uppercase mg-y-15 pd-l-10 tx-white-7">GateKey: {Gatekey} <i className="fa fa-key"/></h5>
        <nav className="nav br-nav-mailbox flex-column">
      </nav>
  </div>
  )
}

SideLeftMenu.propTypes = {

}

export default SideLeftMenu;