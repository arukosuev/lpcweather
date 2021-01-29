import React, {Fragment, Component} from "react";
import classes from '../styles/header.scss';

class Header extends Component{

    handleChange = (e) => {
        this.onChangeValue(e.target.value);
    }

    render () {
        return (
            <div className="container">
                <div className="header">
                    <h2>Погода в нескольких городах</h2>
                </div>
                <div>
                    <form className="form" onSubmit={this.props.onSubmit}>
                        <label>
                            Выбери фрукт:
                            <select value={this.props.selectedValue} onChange={this.handleChange}>
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