import React from "react";

import "./popup.sass"

export class Popup extends React.Component{

    constructor() {
        super();
    }

    render() {
        const {closePopup, isOpen} = this.props

        return (
            <div
                onClick={closePopup}
                className={`popup ${isOpen ? "active" : ""}`}>
                <div
                    onClick={e => e.stopPropagation()}
                    className="popup__content">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default Popup;