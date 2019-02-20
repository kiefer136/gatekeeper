import React from 'react'
import PropTypes from 'prop-types'

const HeadPanelRight = ({companyName}) => {
  return (
    <div className="kt-headpanel-right">
        <div className="dropdown dropdown-notification">
            <a href="/login" className="nav-link pd-x-7 pos-relative">
                <i className="icon ion-ios-bell-outline tx-24"></i>
                <span className="square-8 bg-danger pos-absolute t-15 r-0 rounded-circle"></span>
            </a>
        </div>
        <div className="dropdown dropdown-profile">
            <a href="/login" className="nav-link nav-link-profile">
                <i className="icon ion-ios-bell-outline tx-24"></i>
                <span className="logged-name">
                    <span className="hidden-xs-down">{companyName}</span>
                    <i className="fa fa-angle-down mg-l-3"></i>
                </span>
            </a>
        </div>
    </div>
  )
}

HeadPanelRight.propTypes = {

}

export default HeadPanelRight