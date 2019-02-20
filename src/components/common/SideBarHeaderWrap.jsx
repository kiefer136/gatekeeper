import React from 'react'

class SideBarHeaderWrap extends React.Component {

    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default SideBarHeaderWrap;