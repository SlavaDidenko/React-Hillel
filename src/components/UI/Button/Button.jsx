import React from "react";

export class Button extends React.Component {

    render() {
        const {type, text} = this.props
        return (
            <button type={type}>{text}</button>
        )
    }
}

export default Button
