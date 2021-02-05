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
                                <option value="all">Все</option>
                                <option value="evenkiya">Эвенкийское звено</option>
                                <option value="yeniseysk">Енисейское звено</option>
                                <option value="boguchany">Кежемско-Богучанское звено</option>
                                <option value="center">Центральное звено</option>
                                <option value="south">Южное звено</option>
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