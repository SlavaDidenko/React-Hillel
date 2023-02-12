import React, {Component} from "react";
import './aside.sass';
export class Aside extends Component {
    render() {
        return (
            <aside className="aside">
                <ul className="aside__list">
                    <li className="aside__item"><a className="aside__link" href="#">Лінка</a></li>
                    <li className="aside__item"><a className="aside__link" href="#">Лінка</a></li>
                    <li className="aside__item"><a className="aside__link" href="#">Лінка</a></li>
                </ul>
            </aside>
        )
    }
}

export default Aside;