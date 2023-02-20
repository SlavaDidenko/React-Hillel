import React from "react";
import "./contactForm.sass"

export class ContactForm extends React.Component {

    constructor() {
        super();
    }

    render() {
        const {onSubmit, onChange,closePopup,fields} = this.props

        return (
            <form
                onSubmit={e => onSubmit(e)}
                className="contactForm">
                <input
                    value={fields.name}
                    onChange={onChange}
                    className="contactForm__input"
                    type="text"
                    name="name"/>
                <input
                    value={fields.surname}
                    onChange={onChange}
                    className="contactForm__input"
                    type="text"
                    name="surname"/>
                <input
                    value={fields.number}
                    onChange={onChange}
                    className="contactForm__input"
                    type="tel"
                    name="number"/>
                <div className="contactForm__wrap-btns">
                    <button type="submit">Додати</button>
                    <button
                        onClick={closePopup}
                        type="button">
                        Скасувати
                    </button>
                </div>
            </form>
        )

    }
}