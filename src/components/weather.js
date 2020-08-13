import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                <p>Город: {this.props.city}</p>
                <p>Температура: {this.props.temp}</p>
                <p>Осадки: {this.props.rain}</p>
            </div>
        );
    }
}

export default Weather;