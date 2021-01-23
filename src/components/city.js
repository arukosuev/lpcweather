import React, {Fragment} from "react";
import { API_KEY } from "../configs/apiKeys";
import classes from '../styles/coloredClassNames.scss';


class City extends React.Component {

    state = {}

    gettingWeather = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.owmCity}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log(data);

        /* Create array will ALL fallouts value*/
        const getSumRain = (data, index) => {
            let sum = 0
            const rain = data.list[index]?.rain?.['3h']
            const snow = data.list[index]?.snow?.['3h']
            if (rain) sum += rain
            if (snow) sum += snow

            return sum
        }


        /* refactoring on switch-case */
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


        let rainSum1 = getSumRain(data,0).toFixed(1);
        let dirWindRus1 = directionWind(data.list[0].wind.deg);
        let rainSum2 = getSumRain(data,2).toFixed(1);
        let dirWindRus2 = directionWind(data.list[2].wind.deg)
        let rainSum3 = getSumRain(data,4).toFixed(1);
        let dirWindRus3 = directionWind(data.list[4].wind.deg)
        let rainSum4 = getSumRain(data,6).toFixed(1);
        let dirWindRus4 = directionWind(data.list[6].wind.deg)
        let rainSum5 = getSumRain(data,8).toFixed(1);
        let dirWindRus5 = directionWind(data.list[8].wind.deg)
        let rainSum6 = getSumRain(data,10).toFixed(1);
        let dirWindRus6 = directionWind(data.list[10].wind.deg)
        let rainSum7 = getSumRain(data,12).toFixed(1);
        let dirWindRus7 = directionWind(data.list[12].wind.deg)
        let rainSum8 = getSumRain(data,14).toFixed(1);
        let dirWindRus8 = directionWind(data.list[14].wind.deg)
        let rainSum9 = getSumRain(data,16).toFixed(1);
        let dirWindRus9 = directionWind(data.list[16].wind.deg)
        let rainSum10 = getSumRain(data,18).toFixed(1);
        let dirWindRus10 = directionWind(data.list[18].wind.deg)
        let rainSum11 = getSumRain(data,20).toFixed(1);
        let dirWindRus11 = directionWind(data.list[20].wind.deg)
        let rainSum12 = getSumRain(data,22).toFixed(1);
        let dirWindRus12 = directionWind(data.list[22].wind.deg)
        let rainSum13 = getSumRain(data,24).toFixed(1);
        let dirWindRus13 = directionWind(data.list[24].wind.deg)
        let rainSum14 = getSumRain(data,26).toFixed(1);
        let dirWindRus14 = directionWind(data.list[26].wind.deg)
        let rainSum15 = getSumRain(data,28).toFixed(1);
        let dirWindRus15 = directionWind(data.list[28].wind.deg)
        let rainSum16 = getSumRain(data,30).toFixed(1);
        let dirWindRus16 = directionWind(data.list[30].wind.deg)
        let rainSum17 = getSumRain(data,32).toFixed(1);
        let dirWindRus17 = directionWind(data.list[32].wind.deg)
        let rainSum18 = getSumRain(data,34).toFixed(1);
        let dirWindRus18 = directionWind(data.list[34].wind.deg)
        let rainSum19 = getSumRain(data,36).toFixed(1);
        let dirWindRus19 = directionWind(data.list[36].wind.deg)
        let rainSum20 = getSumRain(data,38).toFixed(1);
        let dirWindRus20 = directionWind(data.list[38].wind.deg)

        /* Conditional CSS classes for fallouts*/
        const getClassForRainSum = (rainSum) => {

            switch (true) {

                case (rainSum >= 25):
                    return " rain__blue3";
                    break;

                case (rainSum >= 15):
                    return " rain__blue2";
                    break;

                case (rainSum >= 4):
                    return " rain__blue1";
                    break;

                case (rainSum >= 1.5):
                    return " rain__blue0";
                    break;

                case (rainSum >= 0.3):
                    return " block__red0";
                    break;

                case (rainSum >= 0):
                    return "";
                    break;
            }
        }

        const rainClassesDay1 = "rain" + getClassForRainSum(rainSum1);
        const rainClassesDay2 = "rain" + getClassForRainSum(rainSum2);
        const rainClassesDay3 = "rain" + getClassForRainSum(rainSum3);
        const rainClassesDay4 = "rain" + getClassForRainSum(rainSum4);
        const rainClassesDay5 = "rain" + getClassForRainSum(rainSum5);
        const rainClassesDay6 = "rain" + getClassForRainSum(rainSum6);
        const rainClassesDay7 = "rain" + getClassForRainSum(rainSum7);
        const rainClassesDay8 = "rain" + getClassForRainSum(rainSum8);
        const rainClassesDay9 = "rain" + getClassForRainSum(rainSum9);
        const rainClassesDay10 = "rain" + getClassForRainSum(rainSum10);
        const rainClassesDay11 = "rain" + getClassForRainSum(rainSum11);
        const rainClassesDay12 = "rain" + getClassForRainSum(rainSum12);
        const rainClassesDay13 = "rain" + getClassForRainSum(rainSum13);
        const rainClassesDay14 = "rain" + getClassForRainSum(rainSum14);
        const rainClassesDay15 = "rain" + getClassForRainSum(rainSum15);
        const rainClassesDay16 = "rain" + getClassForRainSum(rainSum16);
        const rainClassesDay17 = "rain" + getClassForRainSum(rainSum17);
        const rainClassesDay18 = "rain" + getClassForRainSum(rainSum18);
        const rainClassesDay19 = "rain" + getClassForRainSum(rainSum19);
        const rainClassesDay20 = "rain" + getClassForRainSum(rainSum20);

        /* Conditional CSS classes for temperature*/
        const getClassForTemperature = (temperature) => {

            switch (true) {

                case (temperature >= 31):
                    return " block__red3";
                    break;

                case (temperature >= 27):
                    return " block__red2";
                    break;

                case (temperature >= 21):
                    return " block__red1";
                    break;

                case (temperature >= 12):
                    return " block__red0";
                    break;

                case (temperature >= 5):
                    return "";
                    break;
            }
        }

        const temperatureClassesDay1 = "temp" + getClassForTemperature(data.list[0].main.temp);
        const temperatureClassesDay2 = "temp" + getClassForTemperature(data.list[2].main.temp);
        const temperatureClassesDay3 = "temp" + getClassForTemperature(data.list[4].main.temp);
        const temperatureClassesDay4 = "temp" + getClassForTemperature(data.list[6].main.temp);
        const temperatureClassesDay5 = "temp" + getClassForTemperature(data.list[8].main.temp);
        const temperatureClassesDay6 = "temp" + getClassForTemperature(data.list[10].main.temp);
        const temperatureClassesDay7 = "temp" + getClassForTemperature(data.list[12].main.temp);
        const temperatureClassesDay8 = "temp" + getClassForTemperature(data.list[14].main.temp);
        const temperatureClassesDay9 = "temp" + getClassForTemperature(data.list[16].main.temp);
        const temperatureClassesDay10 = "temp" + getClassForTemperature(data.list[18].main.temp);
        const temperatureClassesDay11 = "temp" + getClassForTemperature(data.list[20].main.temp);
        const temperatureClassesDay12 = "temp" + getClassForTemperature(data.list[22].main.temp);
        const temperatureClassesDay13 = "temp" + getClassForTemperature(data.list[24].main.temp);
        const temperatureClassesDay14 = "temp" + getClassForTemperature(data.list[26].main.temp);
        const temperatureClassesDay15 = "temp" + getClassForTemperature(data.list[28].main.temp);
        const temperatureClassesDay16 = "temp" + getClassForTemperature(data.list[30].main.temp);
        const temperatureClassesDay17 = "temp" + getClassForTemperature(data.list[32].main.temp);
        const temperatureClassesDay18 = "temp" + getClassForTemperature(data.list[34].main.temp);
        const temperatureClassesDay19 = "temp" + getClassForTemperature(data.list[36].main.temp);
        const temperatureClassesDay20 = "temp" + getClassForTemperature(data.list[38].main.temp);

        /* Conditional CSS classes for wind*/
        const getClassForWind = (wind) => {

            switch (true) {

                case (wind >= 15):
                    return " block__red3";
                    break;

                case (wind >= 10):
                    return " block__red2";
                    break;

                case (wind >= 6):
                    return " block__red1";
                    break;

                case (wind >= 3):
                    return " block__red0";
                    break;

                case (wind >= 0):
                    return "";
                    break;
            }
        }

        const windClassesDay1 = "wind" + getClassForWind(data.list[0].wind.speed);
        const windClassesDay2 = "wind" + getClassForWind(data.list[2].wind.speed);
        const windClassesDay3 = "wind" + getClassForWind(data.list[4].wind.speed);
        const windClassesDay4 = "wind" + getClassForWind(data.list[6].wind.speed);
        const windClassesDay5 = "wind" + getClassForWind(data.list[8].wind.speed);
        const windClassesDay6 = "wind" + getClassForWind(data.list[10].wind.speed);
        const windClassesDay7 = "wind" + getClassForWind(data.list[12].wind.speed);
        const windClassesDay8 = "wind" + getClassForWind(data.list[14].wind.speed);
        const windClassesDay9 = "wind" + getClassForWind(data.list[16].wind.speed);
        const windClassesDay10 = "wind" + getClassForWind(data.list[18].wind.speed);
        const windClassesDay11 = "wind" + getClassForWind(data.list[20].wind.speed);
        const windClassesDay12 = "wind" + getClassForWind(data.list[22].wind.speed);
        const windClassesDay13 = "wind" + getClassForWind(data.list[24].wind.speed);
        const windClassesDay14 = "wind" + getClassForWind(data.list[26].wind.speed);
        const windClassesDay15 = "wind" + getClassForWind(data.list[28].wind.speed);
        const windClassesDay16 = "wind" + getClassForWind(data.list[30].wind.speed);
        const windClassesDay17 = "wind" + getClassForWind(data.list[32].wind.speed);
        const windClassesDay18 = "wind" + getClassForWind(data.list[34].wind.speed);
        const windClassesDay19 = "wind" + getClassForWind(data.list[36].wind.speed);
        const windClassesDay20 = "wind" + getClassForWind(data.list[38].wind.speed);


        this.setState({
            city: data.city.name,

            temp1: data.list[0].main.temp,
            rain1: rainSum1,
            wind1: data.list[0].wind.speed.toFixed(1),
            clouds1: data.list[0].clouds.all,
            visibility1: data.list[0].visibility/1000,
            dirwind1: dirWindRus1,
            rainClassesName1: rainClassesDay1,
            tempClassesName1: temperatureClassesDay1,
            windClassesName1: windClassesDay1,

            temp2: data.list[2].main.temp,
            rain2: rainSum2,
            wind2: data.list[2].wind.speed.toFixed(1),
            clouds2: data.list[2].clouds.all,
            visibility2: data.list[2].visibility/1000,
            dirwind2: dirWindRus2,
            rainClassesName2: rainClassesDay2,
            tempClassesName2: temperatureClassesDay2,
            windClassesName2: windClassesDay2,

            temp3: data.list[4].main.temp,
            rain3: rainSum3,
            wind3: data.list[4].wind.speed.toFixed(1),
            clouds3: data.list[4].clouds.all,
            visibility3: data.list[4].visibility/1000,
            dirwind3: dirWindRus3,
            rainClassesName3: rainClassesDay3,
            tempClassesName3: temperatureClassesDay3,
            windClassesName3: windClassesDay3,

            temp4: data.list[6].main.temp,
            rain4: rainSum4,
            wind4: data.list[6].wind.speed.toFixed(1),
            clouds4: data.list[6].clouds.all,
            visibility4: data.list[6].visibility/1000,
            dirwind4: dirWindRus4,
            rainClassesName4: rainClassesDay4,
            tempClassesName4: temperatureClassesDay4,
            windClassesName4: windClassesDay4,

            temp5: data.list[8].main.temp,
            rain5: rainSum5,
            wind5: data.list[8].wind.speed.toFixed(1),
            clouds5: data.list[8].clouds.all,
            visibility5: data.list[8].visibility/1000,
            dirwind5: dirWindRus5,
            rainClassesName5: rainClassesDay5,
            tempClassesName5: temperatureClassesDay5,
            windClassesName5: windClassesDay5,

            temp6: data.list[10].main.temp,
            rain6: rainSum6,
            wind6: data.list[10].wind.speed.toFixed(1),
            clouds6: data.list[10].clouds.all,
            visibility6: data.list[10].visibility/1000,
            dirwind6: dirWindRus6,
            rainClassesName6: rainClassesDay6,
            tempClassesName6: temperatureClassesDay6,
            windClassesName6: windClassesDay6,

            temp7: data.list[12].main.temp,
            rain7: rainSum7,
            wind7: data.list[12].wind.speed.toFixed(1),
            clouds7: data.list[12].clouds.all,
            visibility7: data.list[12].visibility/1000,
            dirwind7: dirWindRus7,
            rainClassesName7: rainClassesDay7,
            tempClassesName7: temperatureClassesDay7,
            windClassesName7: windClassesDay7,

            temp8: data.list[14].main.temp,
            rain8: rainSum8,
            wind8: data.list[14].wind.speed.toFixed(1),
            clouds8: data.list[14].clouds.all,
            visibility8: data.list[14].visibility/1000,
            dirwind8: dirWindRus8,
            rainClassesName8: rainClassesDay8,
            tempClassesName8: temperatureClassesDay8,
            windClassesName8: windClassesDay8,

            temp9: data.list[16].main.temp,
            rain9: rainSum9,
            wind9: data.list[16].wind.speed.toFixed(1),
            clouds9: data.list[16].clouds.all,
            visibility9: data.list[16].visibility/1000,
            dirwind9: dirWindRus9,
            rainClassesName9: rainClassesDay9,
            tempClassesName9: temperatureClassesDay9,
            windClassesName9: windClassesDay9,

            temp10: data.list[18].main.temp,
            rain10: rainSum10,
            wind10: data.list[18].wind.speed.toFixed(1),
            clouds10: data.list[18].clouds.all,
            visibility10: data.list[18].visibility/1000,
            dirwind10: dirWindRus10,
            rainClassesName10: rainClassesDay10,
            tempClassesName10: temperatureClassesDay10,
            windClassesName10: windClassesDay10,

            temp11: data.list[20].main.temp,
            rain11: rainSum11,
            wind11: data.list[20].wind.speed.toFixed(1),
            clouds11: data.list[20].clouds.all,
            visibility11: data.list[20].visibility/1000,
            dirwind11: dirWindRus11,
            rainClassesName11: rainClassesDay11,
            tempClassesName11: temperatureClassesDay11,
            windClassesName11: windClassesDay11,

            temp12: data.list[22].main.temp,
            rain12: rainSum12,
            wind12: data.list[22].wind.speed.toFixed(1),
            clouds12: data.list[22].clouds.all,
            visibility12: data.list[22].visibility/1000,
            dirwind12: dirWindRus12,
            rainClassesName12: rainClassesDay12,
            tempClassesName12: temperatureClassesDay12,
            windClassesName12: windClassesDay12,

            temp13: data.list[24].main.temp,
            rain13: rainSum13,
            wind13: data.list[24].wind.speed.toFixed(1),
            clouds13: data.list[24].clouds.all,
            visibility13: data.list[24].visibility/1000,
            dirwind13: dirWindRus13,
            rainClassesName13: rainClassesDay13,
            tempClassesName13: temperatureClassesDay13,
            windClassesName13: windClassesDay13,

            temp14: data.list[26].main.temp,
            rain14: rainSum14,
            wind14: data.list[26].wind.speed.toFixed(1),
            clouds14: data.list[26].clouds.all,
            visibility14: data.list[26].visibility/1000,
            dirwind14: dirWindRus14,
            rainClassesName14: rainClassesDay14,
            tempClassesName14: temperatureClassesDay14,
            windClassesName14: windClassesDay14,

            temp15: data.list[28].main.temp,
            rain15: rainSum15,
            wind15: data.list[28].wind.speed.toFixed(1),
            clouds15: data.list[28].clouds.all,
            visibility15: data.list[28].visibility/1000,
            dirwind15: dirWindRus15,
            rainClassesName15: rainClassesDay15,
            tempClassesName15: temperatureClassesDay15,
            windClassesName15: windClassesDay15,

            temp16: data.list[30].main.temp,
            rain16: rainSum16,
            wind16: data.list[30].wind.speed.toFixed(1),
            clouds16: data.list[30].clouds.all,
            visibility16: data.list[30].visibility/1000,
            dirwind16: dirWindRus16,
            rainClassesName16: rainClassesDay16,
            tempClassesName16: temperatureClassesDay16,
            windClassesName16: windClassesDay16,

            temp17: data.list[32].main.temp,
            rain17: rainSum17,
            wind17: data.list[32].wind.speed.toFixed(1),
            clouds17: data.list[32].clouds.all,
            visibility17: data.list[32].visibility/1000,
            dirwind17: dirWindRus17,
            rainClassesName17: rainClassesDay17,
            tempClassesName17: temperatureClassesDay17,
            windClassesName17: windClassesDay17,

            temp18: data.list[34].main.temp,
            rain18: rainSum18,
            wind18: data.list[34].wind.speed.toFixed(1),
            clouds18: data.list[34].clouds.all,
            visibility18: data.list[34].visibility/1000,
            dirwind18: dirWindRus18,
            rainClassesName18: rainClassesDay18,
            tempClassesName18: temperatureClassesDay18,
            windClassesName18: windClassesDay18,

            temp19: data.list[36].main.temp,
            rain19: rainSum19,
            wind19: data.list[36].wind.speed.toFixed(1),
            clouds19: data.list[36].clouds.all,
            visibility19: data.list[36].visibility/1000,
            dirwind19: dirWindRus19,
            rainClassesName19: rainClassesDay19,
            tempClassesName19: temperatureClassesDay19,
            windClassesName19: windClassesDay19,

            temp20: data.list[38].main.temp,
            rain20: rainSum20,
            wind20: data.list[38].wind.speed.toFixed(1),
            clouds20: data.list[38].clouds.all,
            visibility20: data.list[38].visibility/1000,
            dirwind20: dirWindRus20,
            rainClassesName20: rainClassesDay20,
            tempClassesName20: temperatureClassesDay20,
            windClassesName20: windClassesDay20,

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
                        <p>Темп-ра, С</p>
                        <p>Осадки, мм</p>
                        <p>Облачность, %</p>
                        <p>Видимость, км</p>
                        <p>Ветер, м/с</p>
                    </div>

                    <div className="day">
                        <p className={this.state.tempClassesName1}>{this.state.temp1}</p>
                        <p className={this.state.rainClassesName1}>{this.state.rain1}</p>
                        <p className="clouds">{this.state.clouds1}</p>
                        <p className="visibility">{this.state.visibility1}</p>
                        <p className={this.state.windClassesName1}>{this.state.wind1}, {this.state.dirwind1}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName2}>{this.state.temp2}</p>
                        <p className={this.state.rainClassesName2}>{this.state.rain2}</p>
                        <p className="clouds">{this.state.clouds2}</p>
                        <p className="visibility">{this.state.visibility2}</p>
                        <p className={this.state.windClassesName2}>{this.state.wind2}, {this.state.dirwind2}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName3}>{this.state.temp3}</p>
                        <p className={this.state.rainClassesName3}>{this.state.rain3}</p>
                        <p className="clouds">{this.state.clouds3}</p>
                        <p className="visibility">{this.state.visibility3}</p>
                        <p className={this.state.windClassesName3}>{this.state.wind3}, {this.state.dirwind3}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName4}>{this.state.temp4}</p>
                        <p className={this.state.rainClassesName4}>{this.state.rain4}</p>
                        <p className="clouds">{this.state.clouds4}</p>
                        <p className="visibility">{this.state.visibility4}</p>
                        <p className={this.state.windClassesName4}>{this.state.wind4}, {this.state.dirwind4}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName5}>{this.state.temp5}</p>
                        <p className={this.state.rainClassesName5}>{this.state.rain5}</p>
                        <p className="clouds">{this.state.clouds5}</p>
                        <p className="visibility">{this.state.visibility5}</p>
                        <p className={this.state.windClassesName5}>{this.state.wind5}, {this.state.dirwind5}</p>
                    </div><div className="day">
                        <p className={this.state.tempClassesName6}>{this.state.temp6}</p>
                        <p className={this.state.rainClassesName6}>{this.state.rain6}</p>
                        <p className="clouds">{this.state.clouds6}</p>
                        <p className="visibility">{this.state.visibility6}</p>
                        <p className={this.state.windClassesName6}>{this.state.wind6}, {this.state.dirwind6}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName7}>{this.state.temp7}</p>
                        <p className={this.state.rainClassesName7}>{this.state.rain7}</p>
                        <p className="clouds">{this.state.clouds7}</p>
                        <p className="visibility">{this.state.visibility7}</p>
                        <p className={this.state.windClassesName7}>{this.state.wind7}, {this.state.dirwind7}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName8}>{this.state.temp8}</p>
                        <p className={this.state.rainClassesName8}>{this.state.rain8}</p>
                        <p className="clouds">{this.state.clouds8}</p>
                        <p className="visibility">{this.state.visibility8}</p>
                        <p className={this.state.windClassesName8}>{this.state.wind8}, {this.state.dirwind8}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName9}>{this.state.temp9}</p>
                        <p className={this.state.rainClassesName9}>{this.state.rain9}</p>
                        <p className="clouds">{this.state.clouds9}</p>
                        <p className="visibility">{this.state.visibility9}</p>
                        <p className={this.state.windClassesName9}>{this.state.wind9}, {this.state.dirwind9}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName10}>{this.state.temp10}</p>
                        <p className={this.state.rainClassesName10}>{this.state.rain10}</p>
                        <p className="clouds">{this.state.clouds10}</p>
                        <p className="visibility">{this.state.visibility10}</p>
                        <p className={this.state.windClassesName10}>{this.state.wind10}, {this.state.dirwind10}</p>
                    </div><div className="day">
                        <p className={this.state.tempClassesName11}>{this.state.temp11}</p>
                        <p className={this.state.rainClassesName11}>{this.state.rain11}</p>
                        <p className="clouds">{this.state.clouds11}</p>
                        <p className="visibility">{this.state.visibility11}</p>
                        <p className={this.state.windClassesName11}>{this.state.wind11}, {this.state.dirwind11}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName12}>{this.state.temp12}</p>
                        <p className={this.state.rainClassesName12}>{this.state.rain12}</p>
                        <p className="clouds">{this.state.clouds12}</p>
                        <p className="visibility">{this.state.visibility12}</p>
                        <p className={this.state.windClassesName12}>{this.state.wind12}, {this.state.dirwind12}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName13}>{this.state.temp13}</p>
                        <p className={this.state.rainClassesName13}>{this.state.rain13}</p>
                        <p className="clouds">{this.state.clouds13}</p>
                        <p className="visibility">{this.state.visibility13}</p>
                        <p className={this.state.windClassesName13}>{this.state.wind13}, {this.state.dirwind13}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName14}>{this.state.temp14}</p>
                        <p className={this.state.rainClassesName14}>{this.state.rain14}</p>
                        <p className="clouds">{this.state.clouds14}</p>
                        <p className="visibility">{this.state.visibility14}</p>
                        <p className={this.state.windClassesName14}>{this.state.wind14}, {this.state.dirwind14}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName15}>{this.state.temp15}</p>
                        <p className={this.state.rainClassesName15}>{this.state.rain15}</p>
                        <p className="clouds">{this.state.clouds15}</p>
                        <p className="visibility">{this.state.visibility15}</p>
                        <p className={this.state.windClassesName15}>{this.state.wind15}, {this.state.dirwind15}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName16}>{this.state.temp16}</p>
                        <p className={this.state.rainClassesName16}>{this.state.rain16}</p>
                        <p className="clouds">{this.state.clouds16}</p>
                        <p className="visibility">{this.state.visibility16}</p>
                        <p className={this.state.windClassesName16}>{this.state.wind16}, {this.state.dirwind16}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName17}>{this.state.temp17}</p>
                        <p className={this.state.rainClassesName17}>{this.state.rain17}</p>
                        <p className="clouds">{this.state.clouds17}</p>
                        <p className="visibility">{this.state.visibility17}</p>
                        <p className={this.state.windClassesName17}>{this.state.wind17}, {this.state.dirwind17}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName18}>{this.state.temp18}</p>
                        <p className={this.state.rainClassesName18}>{this.state.rain18}</p>
                        <p className="clouds">{this.state.clouds18}</p>
                        <p className="visibility">{this.state.visibility18}</p>
                        <p className={this.state.windClassesName18}>{this.state.wind18}, {this.state.dirwind18}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName19}>{this.state.temp19}</p>
                        <p className={this.state.rainClassesName19}>{this.state.rain19}</p>
                        <p className="clouds">{this.state.clouds19}</p>
                        <p className="visibility">{this.state.visibility19}</p>
                        <p className={this.state.windClassesName19}>{this.state.wind19}, {this.state.dirwind19}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName20}>{this.state.temp20}</p>
                        <p className={this.state.rainClassesName20}>{this.state.rain20}</p>
                        <p className="clouds">{this.state.clouds20}</p>
                        <p className="visibility">{this.state.visibility20}</p>
                        <p className={this.state.windClassesName20}>{this.state.wind20}, {this.state.dirwind20}</p>
                    </div>


                </div>

            </Fragment>
        );
    }
}

export default City;