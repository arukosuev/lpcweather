import React, {Fragment} from "react";
import {API_KEY} from "../configs/apiKeys";

const defaultCity = "London";

class Heading extends React.Component {

    state={}

    gettingTimeForWeather = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${defaultCity}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        const timeConverter = (UNIX_timestamp) => {
            let timestamp = new Date(UNIX_timestamp * 1000);
            let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
            let year = String(timestamp.getFullYear()).substr(-2);
            let month = months[timestamp.getMonth()];
            let date = timestamp.getDate();
            let hour = timestamp.getHours();
            let min = String(timestamp.getMinutes())+"0";
            let time = date + '.' + month + '.' + year + ' ' + hour + ':' + min;
            return time;
        }


        this.setState({
            time1:timeConverter(data.list[0].dt),
            time2:timeConverter(data.list[2].dt),
            time3:timeConverter(data.list[4].dt),
            time4:timeConverter(data.list[6].dt),
            time5:timeConverter(data.list[8].dt),
            time6:timeConverter(data.list[10].dt),
            time7:timeConverter(data.list[12].dt),
            time8:timeConverter(data.list[14].dt),
            time9:timeConverter(data.list[16].dt),
            time10:timeConverter(data.list[18].dt),
            time11:timeConverter(data.list[20].dt),
            time12:timeConverter(data.list[22].dt),
            time13:timeConverter(data.list[24].dt),
            time14:timeConverter(data.list[26].dt),
            time15:timeConverter(data.list[28].dt),
            time16:timeConverter(data.list[30].dt),
            time17:timeConverter(data.list[32].dt),
            time18:timeConverter(data.list[34].dt),
            time19:timeConverter(data.list[36].dt),
            time20:timeConverter(data.list[38].dt),
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
                        <p>Город</p>
                    </div>
                    <div className="indicators">
                        <p>Локальное время</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time1}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time2}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time3}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time4}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time5}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time6}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time7}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time8}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time9}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time10}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time11}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time12}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time13}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time14}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time15}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time16}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time17}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time18}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time19}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time20}</p>
                    </div>
                </div>

            </Fragment>

        );
    }
}

export default Heading;