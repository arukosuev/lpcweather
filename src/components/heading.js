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
            time0:timeConverter(data.list[0].dt),
            time1:timeConverter(data.list[1].dt),
            time2:timeConverter(data.list[2].dt),
            time3:timeConverter(data.list[3].dt),
            time4:timeConverter(data.list[4].dt),
            time5:timeConverter(data.list[5].dt),
            time6:timeConverter(data.list[6].dt),
            time7:timeConverter(data.list[7].dt),
            time8:timeConverter(data.list[8].dt),
            time9:timeConverter(data.list[9].dt),
            time10:timeConverter(data.list[10].dt),
            time11:timeConverter(data.list[11].dt),
            time12:timeConverter(data.list[12].dt),
            time13:timeConverter(data.list[13].dt),
            time14:timeConverter(data.list[14].dt),
            time15:timeConverter(data.list[15].dt),
            time16:timeConverter(data.list[16].dt),
            time17:timeConverter(data.list[17].dt),
            time18:timeConverter(data.list[18].dt),
            time19:timeConverter(data.list[19].dt),
            time20:timeConverter(data.list[20].dt),
            time21:timeConverter(data.list[21].dt),
            time22:timeConverter(data.list[22].dt),
            time23:timeConverter(data.list[23].dt),
            time24:timeConverter(data.list[24].dt),
            time25:timeConverter(data.list[25].dt),
            time26:timeConverter(data.list[26].dt),
            time27:timeConverter(data.list[27].dt),
            time28:timeConverter(data.list[28].dt),
            time29:timeConverter(data.list[29].dt),
            time30:timeConverter(data.list[30].dt),
            time31:timeConverter(data.list[31].dt),
            time32:timeConverter(data.list[32].dt),
            time33:timeConverter(data.list[33].dt),
            time34:timeConverter(data.list[34].dt),
            time35:timeConverter(data.list[35].dt),
            time36:timeConverter(data.list[36].dt),
            time37:timeConverter(data.list[37].dt),
            time38:timeConverter(data.list[38].dt),
            time39:timeConverter(data.list[39].dt),
        });

        console.log(new Date);
    }

    componentWillMount() {
        this.gettingTimeForWeather();
    }

    componentDidMount() {
        setInterval(() => this.gettingTimeForWeather(), 180000);
    }

    render () {
        return(

            <Fragment>

                <div className="container headings">
                    <div className="city">
                        <p>Город</p>
                    </div>
                    <div className="indicators">
                        <p>Локал.время</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time0}</p>
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
                    <div className="day">
                        <p className="time">{this.state.time21}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time22}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time23}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time24}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time25}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time26}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time27}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time28}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time29}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time30}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time31}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time32}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time33}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time34}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time35}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time36}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time37}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time38}</p>
                    </div>
                    <div className="day">
                        <p className="time">{this.state.time39}</p>
                    </div>
                </div>

            </Fragment>

        );
    }
}

export default Heading;