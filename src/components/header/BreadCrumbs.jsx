import React from 'react';
import PropTypes from 'prop-types';

const BreadCrumbs = () => {
  return (
    <div className="kt-breadcrumb">
        <nav className="breadcrumb">
            <a className="breadcrumb-item" href="/">GateKeeper</a>
            <span className="breadcrumb-item active">Dashboard</span>
        </nav>
    </div>
  )
}

BreadCrumbs.propTypes = {

}

export default BreadCrumbs;