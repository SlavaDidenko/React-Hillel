import React from "react";
import './Starships.sass'


class Starships extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name,model,manufacturer,length} = this.props.data

         return(
             <ul>
                 {
                     name && <li>Name:{ name}</li>
                 }
                 {
                     model && <li>Model:{ model}</li>
                 }
                 {
                     manufacturer && <li>Manufacturer:{ manufacturer}</li>
                 }
                 {
                     length && <li>Length:{ length }</li>
                 }
             </ul>
         )
    }
}

export default Starships