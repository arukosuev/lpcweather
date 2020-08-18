import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                <p>Город: {this.props.city}</p>

                <p>Сегодня</p>
                <p>Температура: {this.props.temp}</p>
                <p>Осадки: {this.props.rain}</p>

                <p>Завтра</p>
                <p>Температура: {this.props.temp1}</p>
                <p>Осадки: {this.props.rain1}</p>


            </div>
        );
    }
}

export default Weather;