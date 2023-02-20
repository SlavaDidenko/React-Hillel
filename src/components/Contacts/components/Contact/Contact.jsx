import React from "react";
import Button from "../../../UI/Button/Button";
import "./contact.sass"

export class Contact extends React.Component {

    render() {
        const {data,deleteContact} = this.props

        return (
            <li className="contacts__item">
                <div className="contact">
                    <p className="contact__name">{data.name}</p>
                    <p className="contact__surname">{data.surname}</p>
                    <p className="contact__number">{data.number}</p>
                    <Button
                        onClick={() => deleteContact(data.id)}
                        type="button"
                        text="Видалити"/>
                </div>
            </li>
        )
    }
}

export default Contact