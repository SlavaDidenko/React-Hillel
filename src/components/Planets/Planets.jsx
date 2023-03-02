import React from "react";
import './Planets.sass'


class Planets extends React.Component {


    render() {
        const {name,rotation_period,orbital_period,diameter} = this.props.data

        return(
            <ul>
                {
                    name && <li>Name:{ name }</li>
                }
                {
                    rotation_period && <li>Rotation Period:{ rotation_period }</li>
                }
                {
                    orbital_period && <li>Orbital Period:{ orbital_period }</li>
                }
                {
                    diameter && <li>Diameter:{ diameter }</li>
                }
            </ul>
        )
    }
}

export default Planets