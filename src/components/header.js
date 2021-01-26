import React, {Fragment, Component} from "react";
import classes from '../styles/header.scss';

class Header extends React.Component{

    state = {
        value: 'coconut' // почему-то нельзя тут двойный кавычки :)
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        alert('Выебри хрень: ' + this.state.value);
        event.preventDefault();
    }

    render () {
        return (
            <div className="container">
                <div className="header">
                    <h2>Погода в нескольких городах</h2>
                </div>
                <div>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label>
                            Выбери хрень:
                            <select value={this.state.value} onChange={this.handleChange}>
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
}

export default Header;