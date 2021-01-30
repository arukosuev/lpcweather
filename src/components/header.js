import React, {Fragment, Component} from "react";
import classes from '../styles/header.scss';

class Header extends Component{

    handleChange = (e) => {
        this.props.onChangeValue(e.target.value);
    }

    render () {
        return (
            <div className="main-header">
                <div className="container header">
                    <h2>Погода в нескольких городах</h2>
                </div>
                <div className="container">
                    <form className="form" onSubmit={this.props.onSubmit}>
                        <label>
                            <span className="form__label">Выбери регион: </span>
                            <select onChange={this.handleChange}>
                                <option value="all">All</option>
                                <option value="africa">Africa</option>
                                <option value="europe">Europe</option>
                                <option value="russia">Russia</option>
                                <option value="others">Others</option>
                            </select>
                        </label>
                        <input type="submit" value="Выбрать" />
                    </form>
                </div>
            </div>

        );
    }
}

export default Header;