import React, {Component} from "react";
import './header.sass';
export class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <a href="#">Головна</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#">Головна</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#">Головна</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;
