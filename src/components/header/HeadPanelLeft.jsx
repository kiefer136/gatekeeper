import React from 'react';
import PropTypes from 'prop-types';

const HeadPanelLeft = () => {
  return (
    <div className="kt-headpanel-left">
        <a id="naviconMenu" href="/login" className="kt-navicon d-none d-lg-flex">
            <i className="icon ion-navicon-round"></i>
        </a>
    </div>
  )
}

HeadPanelLeft.propTypes = {

}

export default HeadPanelLeft;