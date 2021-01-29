import React, {Fragment, Component} from "react";
import classes from '../styles/header.scss';

const Header = ({value, onChangeValue, onSubmit}) => {

    return (
        <div className="container">
            <div className="header">
                <h2>Погода в нескольких городах</h2>
            </div>
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <label>
                        Выбери фрукт:
                        <select value={value} onChange={onChangeValue}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>

    );

}

export default Header;