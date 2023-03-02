import React from "react";
import './People.sass'


export class People extends React.Component {
    constructor(props) {
        super(props);
    }

render() {
    const {name,height,mass,gender} = this.props.data

    return(
        <ul>
            {
                name && <li>Name:{ name}</li>
            }
            {
                height && <li>Height:{ height}</li>
            }
            {
                mass && <li>Mass:{ mass}</li>
            }
            {
                gender && <li>Gender:{ gender}</li>
            }
        </ul>
    )
}
}