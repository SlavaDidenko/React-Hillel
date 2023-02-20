import React from "react";

export class Button extends React.Component {

    render() {
        const {type, text, onClick} = this.props
        return (
            <button
                onClick={onClick}
                type={type}>{text}
            </button>
        )
    }
}

export default Button
