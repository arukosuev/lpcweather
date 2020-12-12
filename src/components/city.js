import React, {Component, Fragment} from "react";
import { API_KEY } from "../configs/apiKeys";

class City extends React.Component {

    state = {
        city: undefined,
        //today
        temp: undefined,
        rain: undefined,
        wind: undefined,
        dirwind: undefined,
        //tomorrow
        temp2: undefined,
        rain2: undefined,
        wind2: undefined,
        dirwind2: undefined,
        //3rd day
        temp3: undefined,
        rain3: undefined,
        wind3: undefined,
        dirwind3: undefined,
        //4th day
        temp4: undefined,
        rain4: undefined,
        wind4: undefined,
        dirwind4: undefined,
        //5th day
        temp5: undefined,
        rain5: undefined,
        wind5: undefined,
        dirwind5: undefined,
    }

    gettingWeather = async (props) => {  //async - страница не перезагружается
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.owmCity}&appid=${API_KEY}&units=metric`); // шаблон строки указываем, а не прямой адрес, кавычки косые
        const data = await response.json();

        /*Создаем массив со всеми значениями осадков*/
        let array = [];
        function rainDay(start,end) {
            for (let i = start; i <= end; i++) {

                try {
                    array[i-start] = data.list[i].rain['3h'];
                } catch (e) {
                    array[i-start] = 0;
                }
            }
        }

        /*сумма элементов "осадков" массива */
        function summ() {
            let sum = 0;
            for(let i = 0; i < array.length; i++){
                sum += array[i];
            }
            return sum;
        }
        /*направление ветра*/
        function directionWind(degWind) {
            if (degWind < 15 || degWind > 345) {
                return "С";
            } else if (degWind >= 15 && degWind <= 75){
                return "СВ";
            } else if (degWind > 75 && degWind < 105){
                return "В";
            } else if (degWind >= 105 && degWind <= 165){
                return "ЮВ";
            } else if (degWind > 165 && degWind < 195){
                return "Ю";
            } else if (degWind >= 195 && degWind <= 255){
                return "ЮЗ";
            } else if (degWind > 255 && degWind < 285) {
                return "З";
            } else if (degWind >= 285 && degWind <= 345) {
                return "СЗ";
            }
        }

        /*1й день*/
        rainDay(0,7)
        let rainSum1 = summ();
        rainSum1=rainSum1.toFixed(2); // сокращаем до 2х знаков
        let dirWindRus = directionWind(data.list[5].wind.deg)

        /*2й день*/
        rainDay(8,15)
        let rainSum2 = summ();
        rainSum2=rainSum2.toFixed(2);
        let dirWindRus2 = directionWind(data.list[13].wind.deg)

        /*3й день*/
        rainDay(16,23)
        let rainSum3 = summ();
        rainSum3=rainSum3.toFixed(2);
        let dirWindRus3 = directionWind(data.list[21].wind.deg)

        /*4й день*/
        rainDay(24,31)
        let rainSum4 = summ();
        rainSum4=rainSum4.toFixed(2);
        let dirWindRus4 = directionWind(data.list[29].wind.deg)

        /*5й день*/
        rainDay(32,39)
        let rainSum5 = summ();
        rainSum5=rainSum5.toFixed(2);
        let dirWindRus5 = directionWind(data.list[37].wind.deg)


        this.setState({
            city: data.city.name,
            //today
            temp: data.list[5].main.temp,
            rain: rainSum1,
            wind: data.list[5].wind.speed,
            dirwind: dirWindRus,
            //tomorrow
            temp2: data.list[13].main.temp,
            rain2: rainSum2,
            wind2: data.list[13].wind.speed,
            dirwind2: dirWindRus2,
            //3rd day
            temp3: data.list[21].main.temp,
            rain3: rainSum3,
            wind3: data.list[21].wind.speed,
            dirwind3: dirWindRus3,
            //4th day
            temp4: data.list[29].main.temp,
            rain4: rainSum4,
            wind4: data.list[29].wind.speed,
            dirwind4: dirWindRus4,
            //5th day
            temp5: data.list[37].main.temp,
            rain5: rainSum5,
            wind5: data.list[37].wind.speed,
            dirwind5: dirWindRus5,
        });
    }

    componentDidMount() {
        this.gettingWeather();
    }

    render() {

        return (
            <Fragment>

                <div className="days">
                    <p>Город: {this.state.city}</p>

                    <div className="day">
                        <p>Сегодня</p>
                        <p>Температура: {this.state.temp}</p>
                        <p>Накопл.осадки: {this.state.rain}</p>
                        <p>Ветер: {this.state.wind}, {this.state.dirwind}</p>
                    </div>
                    <div className="day">
                        <p>Завтра</p>
                        <p>Температура: {this.state.temp2}</p>
                        <p>Накопл.осадки: {this.state.rain2}</p>
                        <p>Ветер: {this.state.wind2}, {this.state.dirwind2}</p>
                    </div>
                    <div className="day">
                        <p>3й день</p>
                        <p>Температура: {this.state.temp3}</p>
                        <p>Накопл.осадки: {this.state.rain3}</p>
                        <p>Ветер: {this.state.wind3}, {this.state.dirwind3}</p>
                    </div>
                    <div className="day">
                        <p>4й день</p>
                        <p>Температура: {this.state.temp4}</p>
                        <p>Накопл.осадки: {this.state.rain4}</p>
                        <p>Ветер: {this.state.wind4}, {this.state.dirwind4}</p>
                    </div>
                    <div className="day">
                        <p>5й день</p>
                        <p>Температура: {this.state.temp5}</p>
                        <p>Накопл.осадки: {this.state.rain5}</p>
                        <p>Ветер: {this.state.wind5}, {this.state.dirwind5}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default City;