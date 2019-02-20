import React from 'react';
import PropTypes from 'prop-types';

const SideLeftHeader = ({gateKey, time}) => {
  return (
    <div className="kt-sideleft-header">
        <div className="kt-logo">
            <strong>GateKeeper</strong>
        </div>
        <div className="kt-date-today">{time}</div>
        <div className="input-group kt-input-search">
            <strong className="form-control">Your Gate Key: {gateKey}</strong>
        </div>
    </div>
  )
}

export default SideLeftHeader;