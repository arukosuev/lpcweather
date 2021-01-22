import React from "react";
import classes from '../styles/header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h2>Погода в нескольких городах</h2>
            </div>
        );
    }
}

export default Header;