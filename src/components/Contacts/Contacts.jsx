import React from "react";
import uniqid from 'uniqid';
import Popup from "../UI/Popup/Popup";
import {ContactForm} from "./components/ContactForm/ContactForm";
import Button from "../UI/Button/Button";
import Contact from "./components/Contact/Contact";
import './contacts.sass'


export class Contacts extends React.Component {
    constructor() {
        super();
    }

    state = {
        contactsList: [],
        newContact: {
            "name" : "",
            "surname" : "",
            "number" : "",
        },
        popup: false,
    }

    deleteContact = (id) => {

        this.setState({
            contactsList: this.state.contactsList.filter(el => el.id !== id),
        })
    }

    openPopup = () => {
        this.setState({popup : true});
    }

    closePopup = () => {
        this.setState({popup : false});
    }

    clearFields = () => {
        this.setState({
            newContact: {
                "name" : "",
                "surname" : "",
                "number" : "",
            },
        })
    }

    addContact = (e) => {
        e.preventDefault();

        const {name, surname, number} = this.state.newContact;

        if (!!name && !!surname && !!number) {
            this.setState({
                contactsList: [
                    ...this.state.contactsList,
                    {
                        name,
                        surname,
                        number,
                        id: uniqid(),
                    }],
            })

            this.clearFields();
            this.closePopup();
        }
    }

    changeFormValues = (e) => {
        const field = e.target.name

        if (field) {
            const fields = {...this.state.newContact}
            fields[field] = e.target.value

            this.setState({
                newContact : fields
            })
        }
    }


    render() {
        const {contactsList} = this.state


        return(
            <>
                <div className="container">
                    <div className="contacts">
                        <header className="contacts__header">
                            <p className="contacts__name">Ім'я</p>
                            <p className="contacts__surname">Фамілія</p>
                            <p className="contacts__number">Телефон</p>
                        </header>
                        <ul className="contacts__list">
                            {
                                contactsList.length ?
                                    contactsList.map(el => (
                                        <Contact
                                            key={el.id}
                                            data={el}
                                            deleteContact={this.deleteContact}
                                        />
                                    ))
                                    :
                                    "Список контактів пустий"
                            }
                        </ul>
                        <Button
                            onClick={this.openPopup}
                            type="button"
                            text="Додати контакт"/>
                        <Popup
                            isOpen={this.state.popup}
                            closePopup={this.closePopup}>

                            <ContactForm
                                onSubmit={this.addContact}
                                onChange={this.changeFormValues}
                                closePopup={this.closePopup}
                                fields={this.state.newContact}
                            />
                        </Popup>
                    </div>
                </div>
            </>
        )
    }
}

export default Contacts;