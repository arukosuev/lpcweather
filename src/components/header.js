import React, {Component} from "react";
import classes from '../styles/header.scss';

class Header extends Component{

    handleChange = (e) => {
        this.props.onChangeValue(e.target.value);
    }

    render () {
        return (
            <div className="main-header container">
                <div className="header">
                    <h2>Погода в Красноярском крае</h2>
                </div>
                <div className="form__block">
                    <form className="form" onSubmit={this.props.onSubmit}>
                        <label>
                            <span className="form__label">Район:&nbsp;&nbsp;</span>
                            <select onChange={this.handleChange}>
                                <option value="all">Все</option>
                                <option value="evenkiya">Эвенкийское звено</option>
                                <option value="yeniseysk">Енисейское звено</option>
                                <option value="boguchany">Кежемско-Богучанское звено</option>
                                <option value="center">Центральное звено</option>
                                <option value="south">Южное звено</option>
                            </select>
                        </label>
                        <input className="form__button" type="submit" value="Выбрать" />
                    </form>
                </div>

                <span className="support">
                    <p>По всем вопросам:&nbsp;&nbsp;</p>
                    <a className="support__link" href="mailto:artyom.rukosuev@gmail.com">artyom.rukosuev@gmail.com</a>
                </span>

            </div>

        );
    }
}

export default Header;