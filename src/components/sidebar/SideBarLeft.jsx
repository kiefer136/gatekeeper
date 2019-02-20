import React from 'react';
import PropTypes from 'prop-types';
import SideLeftMenu from './SideLeftMenu.jsx';

const SideBarLeft = ({onClick, gatekey}) => {
  return (
    <div className="sideBarLeft">
        <SideLeftMenu
          onClick={onClick}
          Gatekey={gatekey}
          />
    </div>
  )
}

SideBarLeft.propTypes = {

}

export default SideBarLeft;