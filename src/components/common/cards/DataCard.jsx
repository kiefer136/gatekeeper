import React from 'react'
import PropTypes from 'prop-types'

const DataCard = ({ContentTitle, ContentValue, backColor}) => {
  return (
    <div className={"bg-" + backColor + " rounded overflow-hidden infoSumBox"}>
        <div className="pd-25 align-items-center">
            <div className="mg-l-20 flexBox">
                <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-0">{ContentTitle}</p>
                <h2 className="cardNumber tx-28 tx-white tx-lato tx-bold mg-b-2 lh-1">{ContentValue}</h2>
            </div>
        </div>
    </div>
  )
}

DataCard.propTypes = {

}

export default DataCard;