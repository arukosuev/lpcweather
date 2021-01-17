import React, {Fragment} from "react";
import { API_KEY } from "../configs/apiKeys";

let rainClassesDay1 = "rain";
let rainClassesDay2 = "rain";
let rainClassesDay3 = "rain";
let rainClassesDay4 = "rain";
let rainClassesDay5 = "rain";

class City extends React.Component {

    state = {}

    gettingWeather = async (props) => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.owmCity}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        //console.log(data);

        /*Создаем массив со всеми значениями осадков// need refactoring*/
        const getSumRain = (data, start, end) => {
            let sum = 0
            for (let i = start; i <= end; i++) {
                const rain = data.list[i]?.rain?.['3h']
                const snow = data.list[i]?.snow?.['3h']
                if (rain) sum += rain
                if (snow) sum += snow
            }
            return sum
        }

        /*направление ветра (переписать на switch-case)*/
        const directionWind = (degWind) => {
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
        let rainSum1 = getSumRain(data,0,7).toFixed(2);
        let dirWindRus = directionWind(data.list[5].wind.deg)

        /*2й день*/
        let rainSum2 = getSumRain(data,8,15).toFixed(2);
        let dirWindRus2 = directionWind(data.list[13].wind.deg)

        /*3й день*/
        let rainSum3 = getSumRain(data,16,23).toFixed(2);
        let dirWindRus3 = directionWind(data.list[21].wind.deg)

        /*4й день*/
        let rainSum4 = getSumRain(data,24,31).toFixed(2);
        let dirWindRus4 = directionWind(data.list[29].wind.deg)

        /*5й день*/
        let rainSum5 = getSumRain(data,32,39).toFixed(2);
        let dirWindRus5 = directionWind(data.list[37].wind.deg)


        const getClassForRainSum = (rainSum) => {

            switch (true) {

                case (rainSum >= 25):
                    return " block__blue3";
                    break;

                case (rainSum >= 15):
                    return " block__blue2";
                    break;

                case (rainSum >= 4):
                    return " block__blue1";
                    break;

                case (rainSum >= 2):
                    return " block__blue0";
                    break;

                case (rainSum >= 0):
                    return "";
                    break;
            }
        }

        rainClassesDay1 += getClassForRainSum(rainSum1);
        rainClassesDay2 += getClassForRainSum(rainSum2);
        rainClassesDay3 += getClassForRainSum(rainSum3);
        rainClassesDay4 += getClassForRainSum(rainSum4);
        rainClassesDay5 += getClassForRainSum(rainSum5);


        this.setState({
            city: data.city.name,
            //today
            temp1: data.list[5].main.temp,
            rain1: rainSum1,
            wind1: data.list[5].wind.speed,
            clouds1: data.list[5].clouds.all,
            visibility1: data.list[5].visibility/1000,
            dirwind1: dirWindRus,
            //tomorrow
            temp2: data.list[13].main.temp,
            rain2: rainSum2,
            wind2: data.list[13].wind.speed,
            clouds2: data.list[13].clouds.all,
            visibility2: data.list[13].visibility/1000,
            dirwind2: dirWindRus2,
            //3rd day
            temp3: data.list[21].main.temp,
            rain3: rainSum3,
            wind3: data.list[21].wind.speed,
            clouds3: data.list[21].clouds.all,
            visibility3: data.list[21].visibility/1000,
            dirwind3: dirWindRus3,
            //4th day
            temp4: data.list[29].main.temp,
            rain4: rainSum4,
            wind4: data.list[29].wind.speed,
            clouds4: data.list[29].clouds.all,
            visibility4: data.list[29].visibility/1000,
            dirwind4: dirWindRus4,
            //5th day
            temp5: data.list[37].main.temp,
            rain5: rainSum5,
            wind5: data.list[37].wind.speed,
            clouds5: data.list[37].clouds.all,
            visibility5: data.list[37].visibility/1000,
            dirwind5: dirWindRus5,
        });
    }

    componentDidMount() {
        this.gettingWeather();
    }

    render() {


        return (

            <Fragment>

                <div className="days container">
                    <div className="city">
                        <p>{this.state.city}</p>
                    </div>

                    <div className="indicators">
                        <p>Температура</p>
                        <p>Накопл.осадки</p>
                        <p>Облачность</p>
                        <p>Видимость</p>
                        <p>Ветер, м/с</p>
                    </div>

                    <div className="day">
                        <p сlassName="temp">{this.state.temp1} С</p>
                        <p className={rainClassesDay1}>{this.state.rain1} мм</p>
                        <p className="clouds">{this.state.clouds1} %</p>
                        <p className="visibility">{this.state.visibility1} км</p>
                        <p className="wind">{this.state.wind1}, {this.state.dirwind1}</p>
                    </div>
                    <div className="day">
                        <p сlassName="temp">{this.state.temp2} С</p>
                        <p className={rainClassesDay2}>{this.state.rain2} мм</p>
                        <p className="clouds">{this.state.clouds2} %</p>
                        <p className="visibility">{this.state.visibility2} км</p>
                        <p className="wind">{this.state.wind2}, {this.state.dirwind2}</p>
                    </div>
                    <div className="day">
                        <p сlassName="temp">{this.state.temp3} С</p>
                        <p className={rainClassesDay3}>{this.state.rain3} мм</p>
                        <p className="clouds">{this.state.clouds3} %</p>
                        <p className="visibility">{this.state.visibility3} км</p>
                        <p className="wind">{this.state.wind3}, {this.state.dirwind3}</p>
                    </div>
                    <div className="day">
                        <p сlassName="temp">{this.state.temp4} С</p>
                        <p className={rainClassesDay4}>{this.state.rain4} мм</p>
                        <p className="clouds">{this.state.clouds4} %</p>
                        <p className="visibility">{this.state.visibility4} км</p>
                        <p className="wind">{this.state.wind4}, {this.state.dirwind4}</p>
                    </div>
                    <div className="day">
                        <p сlassName="temp">{this.state.temp5} С</p>
                        <p className={rainClassesDay5}>{this.state.rain5} мм</p>
                        <p className="clouds">{this.state.clouds5} %</p>
                        <p className="visibility">{this.state.visibility5} км</p>
                        <p className="wind">{this.state.wind5}, {this.state.dirwind5}</p>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default City;