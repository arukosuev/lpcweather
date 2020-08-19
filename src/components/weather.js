import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div className="days">
                <p>Город: {this.props.city}</p>

                <div className="day">
                    <p>Сегодня</p>
                    <p>Температура: {this.props.temp}</p>
                    <p>Осадки: {this.props.rain}</p>
                    <p>Ветер: {this.props.wind}, {this.props.dirwind}</p>
                </div>
                <div className="day">
                    <p>Завтра</p>
                    <p>Температура: {this.props.temp2}</p>
                    <p>Осадки: {this.props.rain2}</p>
                    <p>Ветер: {this.props.wind2}, {this.props.dirwind2}</p>
                </div>
                <div className="day">
                    <p>3й день</p>
                    <p>Температура: {this.props.temp3}</p>
                    <p>Осадки: {this.props.rain3}</p>
                    <p>Ветер: {this.props.wind3}, {this.props.dirwind3}</p>
                </div>
                <div className="day">
                    <p>4й день</p>
                    <p>Температура: {this.props.temp4}</p>
                    <p>Осадки: {this.props.rain4}</p>
                    <p>Ветер: {this.props.wind4}, {this.props.dirwind4}</p>
                </div>
                <div className="day">
                    <p>5й день</p>
                    <p>Температура: {this.props.temp5}</p>
                    <p>Осадки: {this.props.rain5}</p>
                    <p>Ветер: {this.props.wind5}, {this.props.dirwind5}</p>
                </div>
            </div>
        );
    }
}

export default Weather;