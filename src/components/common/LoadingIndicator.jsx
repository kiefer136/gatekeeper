import React from 'react';

let classes = "d-flex bg-gray-200 ht-300 pos-relative align-items-center ";
let classWithHeader = "d-flex bg-gray-200 ht-300 pos-relative align-items-center showHeader";

const LoadingIndicator = ({message, hasHeader}) => {
    return(
        <div className={hasHeader ? classWithHeader : classes} id="spinnerWrap">
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
            <h2>{message ? message : ""}</h2>
        </div>
    )
}

export default LoadingIndicator;