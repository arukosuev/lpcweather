import React, {Fragment} from "react";
import {API_KEY} from "../configs/apiKeys";

const defaultCity = "London";

class Heading extends React.Component {

    state={}

    gettingTimeForWeather = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${defaultCity}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        this.setState({
            time1:data.list[5].dt_txt,
            time2:data.list[13].dt_txt,
            time3:data.list[21].dt_txt,
            time4:data.list[29].dt_txt,
            time5:data.list[37].dt_txt,
        });
    }

    componentDidMount() {
        this.gettingTimeForWeather();
    }

    render () {
        return(

            <Fragment>
                <div className="container headings">
                    <div className="city">
                        <p></p>
                    </div>
                    <div className="indicators">
                        <p>Day</p>
                    </div>
                    <div className="day">
                        <p>Today</p>
                    </div>
                    <div className="day">
                        <p>Tomorrow</p>
                    </div>
                    <div className="day">
                        <p>3rd day</p>
                    </div>
                    <div className="day">
                        <p>4th day</p>
                    </div>
                    <div className="day">
                        <p>5th day</p>
                    </div>
                </div>

                <div className="container headings">
                    <div className="city">
                        <p>City</p>
                    </div>
                    <div className="indicators">
                        <p>Time, UTC +0</p>
                    </div>
                    <div className="day">
                        <p>{this.state.time1}</p>
                    </div>
                    <div className="day">
                        <p>{this.state.time2}</p>
                    </div>
                    <div className="day">
                        <p>{this.state.time3}</p>
                    </div>
                    <div className="day">
                        <p>{this.state.time4}</p>
                    </div>
                    <div className="day">
                        <p>{this.state.time5}</p>
                    </div>
                </div>

            </Fragment>

        );
    }
}

export default Heading;