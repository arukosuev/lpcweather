import React, {Fragment} from "react";
import { API_KEY } from "../configs/apiKeys";
import classes from '../styles/coloredClassNames.scss';


class City extends React.Component {

    state = {}

    gettingWeather = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.props.lat}&lon=${this.props.lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        //console.log(data);

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
                return "↓";
            } else if (degWind >= 15 && degWind <= 75){
                return "↙";
            } else if (degWind > 75 && degWind < 105){
                return "←";
            } else if (degWind >= 105 && degWind <= 165){
                return "↖";
            } else if (degWind > 165 && degWind < 195){
                return "↑";
            } else if (degWind >= 195 && degWind <= 255){
                return "↗";
            } else if (degWind > 255 && degWind < 285) {
                return "→";
            } else if (degWind >= 285 && degWind <= 345) {
                return "↘";
            }
        }


        let rainSum0 = getSumRain(data,0).toFixed(1);
        let dirWindRus0 = directionWind(data.list[0].wind.deg);
        let rainSum1 = getSumRain(data,1).toFixed(1);
        let dirWindRus1 = directionWind(data.list[1].wind.deg);
        let rainSum2 = getSumRain(data,2).toFixed(1);
        let dirWindRus2 = directionWind(data.list[2].wind.deg);
        let rainSum3 = getSumRain(data,3).toFixed(1);
        let dirWindRus3 = directionWind(data.list[3].wind.deg);
        let rainSum4 = getSumRain(data,4).toFixed(1);
        let dirWindRus4 = directionWind(data.list[4].wind.deg);
        let rainSum5 = getSumRain(data,5).toFixed(1);
        let dirWindRus5 = directionWind(data.list[5].wind.deg);
        let rainSum6 = getSumRain(data,6).toFixed(1);
        let dirWindRus6 = directionWind(data.list[6].wind.deg);
        let rainSum7 = getSumRain(data,7).toFixed(1);
        let dirWindRus7 = directionWind(data.list[7].wind.deg);
        let rainSum8 = getSumRain(data,8).toFixed(1);
        let dirWindRus8 = directionWind(data.list[8].wind.deg);
        let rainSum9 = getSumRain(data,9).toFixed(1);
        let dirWindRus9 = directionWind(data.list[9].wind.deg);
        let rainSum10 = getSumRain(data,10).toFixed(1);
        let dirWindRus10 = directionWind(data.list[10].wind.deg);
        let rainSum11 = getSumRain(data,11).toFixed(1);
        let dirWindRus11 = directionWind(data.list[11].wind.deg);
        let rainSum12 = getSumRain(data,12).toFixed(1);
        let dirWindRus12 = directionWind(data.list[12].wind.deg);
        let rainSum13 = getSumRain(data,13).toFixed(1);
        let dirWindRus13 = directionWind(data.list[13].wind.deg);
        let rainSum14 = getSumRain(data,14).toFixed(1);
        let dirWindRus14 = directionWind(data.list[14].wind.deg);
        let rainSum15 = getSumRain(data,15).toFixed(1);
        let dirWindRus15 = directionWind(data.list[15].wind.deg);
        let rainSum16 = getSumRain(data,16).toFixed(1);
        let dirWindRus16 = directionWind(data.list[16].wind.deg);
        let rainSum17 = getSumRain(data,17).toFixed(1);
        let dirWindRus17 = directionWind(data.list[17].wind.deg);
        let rainSum18 = getSumRain(data,18).toFixed(1);
        let dirWindRus18 = directionWind(data.list[18].wind.deg);
        let rainSum19 = getSumRain(data,19).toFixed(1);
        let dirWindRus19 = directionWind(data.list[19].wind.deg);
        let rainSum20 = getSumRain(data,20).toFixed(1);
        let dirWindRus20 = directionWind(data.list[20].wind.deg);
        let rainSum21 = getSumRain(data,21).toFixed(1);
        let dirWindRus21 = directionWind(data.list[21].wind.deg);
        let rainSum22 = getSumRain(data,22).toFixed(1);
        let dirWindRus22 = directionWind(data.list[22].wind.deg);
        let rainSum23 = getSumRain(data,23).toFixed(1);
        let dirWindRus23 = directionWind(data.list[23].wind.deg);
        let rainSum24 = getSumRain(data,24).toFixed(1);
        let dirWindRus24 = directionWind(data.list[24].wind.deg);
        let rainSum25 = getSumRain(data,25).toFixed(1);
        let dirWindRus25 = directionWind(data.list[25].wind.deg);
        let rainSum26 = getSumRain(data,26).toFixed(1);
        let dirWindRus26 = directionWind(data.list[26].wind.deg);
        let rainSum27 = getSumRain(data,27).toFixed(1);
        let dirWindRus27 = directionWind(data.list[27].wind.deg);
        let rainSum28 = getSumRain(data,28).toFixed(1);
        let dirWindRus28 = directionWind(data.list[28].wind.deg);
        let rainSum29 = getSumRain(data,29).toFixed(1);
        let dirWindRus29 = directionWind(data.list[29].wind.deg);
        let rainSum30 = getSumRain(data,30).toFixed(1);
        let dirWindRus30 = directionWind(data.list[30].wind.deg);
        let rainSum31 = getSumRain(data,31).toFixed(1);
        let dirWindRus31 = directionWind(data.list[31].wind.deg);
        let rainSum32 = getSumRain(data,32).toFixed(1);
        let dirWindRus32 = directionWind(data.list[32].wind.deg);
        let rainSum33 = getSumRain(data,33).toFixed(1);
        let dirWindRus33 = directionWind(data.list[33].wind.deg);
        let rainSum34 = getSumRain(data,34).toFixed(1);
        let dirWindRus34 = directionWind(data.list[34].wind.deg);
        let rainSum35 = getSumRain(data,35).toFixed(1);
        let dirWindRus35 = directionWind(data.list[35].wind.deg);
        let rainSum36 = getSumRain(data,36).toFixed(1);
        let dirWindRus36 = directionWind(data.list[36].wind.deg);
        let rainSum37 = getSumRain(data,37).toFixed(1);
        let dirWindRus37 = directionWind(data.list[37].wind.deg);
        let rainSum38 = getSumRain(data,38).toFixed(1);
        let dirWindRus38 = directionWind(data.list[38].wind.deg);
        let rainSum39 = getSumRain(data,39).toFixed(1);
        let dirWindRus39 = directionWind(data.list[39].wind.deg);

        /* Conditional CSS classes for fallouts*/
        const getClassForRainSum = (rainSum) => {

            switch (true) {

                case (rainSum >= 25):
                    return " rain__blue4";
                    break;

                case (rainSum >= 15):
                    return " rain__blue3";
                    break;

                case (rainSum >= 4):
                    return " rain__blue2";
                    break;

                case (rainSum >= 1.5):
                    return " rain__blue1";
                    break;

                case (rainSum >= 0.3):
                    return " rain__blue0";
                    break;

                case (rainSum >= 0):
                    return "";
                    break;
            }
        }

        const rainClassesDay0 = "rain" + getClassForRainSum(rainSum0);
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
        const rainClassesDay21 = "rain" + getClassForRainSum(rainSum21);
        const rainClassesDay22 = "rain" + getClassForRainSum(rainSum22);
        const rainClassesDay23 = "rain" + getClassForRainSum(rainSum23);
        const rainClassesDay24 = "rain" + getClassForRainSum(rainSum24);
        const rainClassesDay25 = "rain" + getClassForRainSum(rainSum25);
        const rainClassesDay26 = "rain" + getClassForRainSum(rainSum26);
        const rainClassesDay27 = "rain" + getClassForRainSum(rainSum27);
        const rainClassesDay28 = "rain" + getClassForRainSum(rainSum28);
        const rainClassesDay29 = "rain" + getClassForRainSum(rainSum29);
        const rainClassesDay30 = "rain" + getClassForRainSum(rainSum30);
        const rainClassesDay31 = "rain" + getClassForRainSum(rainSum31);
        const rainClassesDay32 = "rain" + getClassForRainSum(rainSum32);
        const rainClassesDay33 = "rain" + getClassForRainSum(rainSum33);
        const rainClassesDay34 = "rain" + getClassForRainSum(rainSum34);
        const rainClassesDay35 = "rain" + getClassForRainSum(rainSum35);
        const rainClassesDay36 = "rain" + getClassForRainSum(rainSum36);
        const rainClassesDay37 = "rain" + getClassForRainSum(rainSum37);
        const rainClassesDay38 = "rain" + getClassForRainSum(rainSum38);
        const rainClassesDay39 = "rain" + getClassForRainSum(rainSum39);

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

        const temperatureClassesDay0 = "temp" + getClassForTemperature(data.list[0].main.temp);
        const temperatureClassesDay1 = "temp" + getClassForTemperature(data.list[1].main.temp);
        const temperatureClassesDay2 = "temp" + getClassForTemperature(data.list[2].main.temp);
        const temperatureClassesDay3 = "temp" + getClassForTemperature(data.list[3].main.temp);
        const temperatureClassesDay4 = "temp" + getClassForTemperature(data.list[4].main.temp);
        const temperatureClassesDay5 = "temp" + getClassForTemperature(data.list[5].main.temp);
        const temperatureClassesDay6 = "temp" + getClassForTemperature(data.list[6].main.temp);
        const temperatureClassesDay7 = "temp" + getClassForTemperature(data.list[7].main.temp);
        const temperatureClassesDay8 = "temp" + getClassForTemperature(data.list[8].main.temp);
        const temperatureClassesDay9 = "temp" + getClassForTemperature(data.list[9].main.temp);
        const temperatureClassesDay10 = "temp" + getClassForTemperature(data.list[10].main.temp);
        const temperatureClassesDay11 = "temp" + getClassForTemperature(data.list[11].main.temp);
        const temperatureClassesDay12 = "temp" + getClassForTemperature(data.list[12].main.temp);
        const temperatureClassesDay13 = "temp" + getClassForTemperature(data.list[13].main.temp);
        const temperatureClassesDay14 = "temp" + getClassForTemperature(data.list[14].main.temp);
        const temperatureClassesDay15 = "temp" + getClassForTemperature(data.list[15].main.temp);
        const temperatureClassesDay16 = "temp" + getClassForTemperature(data.list[16].main.temp);
        const temperatureClassesDay17 = "temp" + getClassForTemperature(data.list[17].main.temp);
        const temperatureClassesDay18 = "temp" + getClassForTemperature(data.list[18].main.temp);
        const temperatureClassesDay19 = "temp" + getClassForTemperature(data.list[19].main.temp);
        const temperatureClassesDay20 = "temp" + getClassForTemperature(data.list[20].main.temp);
        const temperatureClassesDay21 = "temp" + getClassForTemperature(data.list[21].main.temp);
        const temperatureClassesDay22 = "temp" + getClassForTemperature(data.list[22].main.temp);
        const temperatureClassesDay23 = "temp" + getClassForTemperature(data.list[23].main.temp);
        const temperatureClassesDay24 = "temp" + getClassForTemperature(data.list[24].main.temp);
        const temperatureClassesDay25 = "temp" + getClassForTemperature(data.list[25].main.temp);
        const temperatureClassesDay26 = "temp" + getClassForTemperature(data.list[26].main.temp);
        const temperatureClassesDay27 = "temp" + getClassForTemperature(data.list[27].main.temp);
        const temperatureClassesDay28 = "temp" + getClassForTemperature(data.list[28].main.temp);
        const temperatureClassesDay29 = "temp" + getClassForTemperature(data.list[29].main.temp);
        const temperatureClassesDay30 = "temp" + getClassForTemperature(data.list[30].main.temp);
        const temperatureClassesDay31 = "temp" + getClassForTemperature(data.list[31].main.temp);
        const temperatureClassesDay32 = "temp" + getClassForTemperature(data.list[32].main.temp);
        const temperatureClassesDay33 = "temp" + getClassForTemperature(data.list[33].main.temp);
        const temperatureClassesDay34 = "temp" + getClassForTemperature(data.list[34].main.temp);
        const temperatureClassesDay35 = "temp" + getClassForTemperature(data.list[35].main.temp);
        const temperatureClassesDay36 = "temp" + getClassForTemperature(data.list[36].main.temp);
        const temperatureClassesDay37 = "temp" + getClassForTemperature(data.list[37].main.temp);
        const temperatureClassesDay38 = "temp" + getClassForTemperature(data.list[38].main.temp);
        const temperatureClassesDay39 = "temp" + getClassForTemperature(data.list[39].main.temp);

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

        const windClassesDay0 = "wind" + getClassForWind(data.list[0].wind.speed);
        const windClassesDay1 = "wind" + getClassForWind(data.list[1].wind.speed);
        const windClassesDay2 = "wind" + getClassForWind(data.list[2].wind.speed);
        const windClassesDay3 = "wind" + getClassForWind(data.list[3].wind.speed);
        const windClassesDay4 = "wind" + getClassForWind(data.list[4].wind.speed);
        const windClassesDay5 = "wind" + getClassForWind(data.list[5].wind.speed);
        const windClassesDay6 = "wind" + getClassForWind(data.list[6].wind.speed);
        const windClassesDay7 = "wind" + getClassForWind(data.list[7].wind.speed);
        const windClassesDay8 = "wind" + getClassForWind(data.list[8].wind.speed);
        const windClassesDay9 = "wind" + getClassForWind(data.list[9].wind.speed);
        const windClassesDay10 = "wind" + getClassForWind(data.list[10].wind.speed);
        const windClassesDay11 = "wind" + getClassForWind(data.list[11].wind.speed);
        const windClassesDay12 = "wind" + getClassForWind(data.list[12].wind.speed);
        const windClassesDay13 = "wind" + getClassForWind(data.list[13].wind.speed);
        const windClassesDay14 = "wind" + getClassForWind(data.list[14].wind.speed);
        const windClassesDay15 = "wind" + getClassForWind(data.list[15].wind.speed);
        const windClassesDay16 = "wind" + getClassForWind(data.list[16].wind.speed);
        const windClassesDay17 = "wind" + getClassForWind(data.list[17].wind.speed);
        const windClassesDay18 = "wind" + getClassForWind(data.list[18].wind.speed);
        const windClassesDay19 = "wind" + getClassForWind(data.list[19].wind.speed);
        const windClassesDay20 = "wind" + getClassForWind(data.list[20].wind.speed);
        const windClassesDay21 = "wind" + getClassForWind(data.list[21].wind.speed);
        const windClassesDay22 = "wind" + getClassForWind(data.list[22].wind.speed);
        const windClassesDay23 = "wind" + getClassForWind(data.list[23].wind.speed);
        const windClassesDay24 = "wind" + getClassForWind(data.list[24].wind.speed);
        const windClassesDay25 = "wind" + getClassForWind(data.list[25].wind.speed);
        const windClassesDay26 = "wind" + getClassForWind(data.list[26].wind.speed);
        const windClassesDay27 = "wind" + getClassForWind(data.list[27].wind.speed);
        const windClassesDay28 = "wind" + getClassForWind(data.list[28].wind.speed);
        const windClassesDay29 = "wind" + getClassForWind(data.list[29].wind.speed);
        const windClassesDay30 = "wind" + getClassForWind(data.list[30].wind.speed);
        const windClassesDay31 = "wind" + getClassForWind(data.list[31].wind.speed);
        const windClassesDay32 = "wind" + getClassForWind(data.list[32].wind.speed);
        const windClassesDay33 = "wind" + getClassForWind(data.list[33].wind.speed);
        const windClassesDay34 = "wind" + getClassForWind(data.list[34].wind.speed);
        const windClassesDay35 = "wind" + getClassForWind(data.list[35].wind.speed);
        const windClassesDay36 = "wind" + getClassForWind(data.list[36].wind.speed);
        const windClassesDay37 = "wind" + getClassForWind(data.list[37].wind.speed);
        const windClassesDay38 = "wind" + getClassForWind(data.list[38].wind.speed);
        const windClassesDay39 = "wind" + getClassForWind(data.list[39].wind.speed);



        this.setState({

            temp0: data.list[0].main.temp,
            rain0: rainSum0,
            wind0: data.list[0].wind.speed.toFixed(1),
            clouds0: data.list[0].clouds.all,
            visibility0: (data.list[0].visibility/1000).toFixed(1),
            dirwind0: dirWindRus0,
            rainClassesName0: rainClassesDay0,
            tempClassesName0: temperatureClassesDay0,
            windClassesName0: windClassesDay0,

            temp1: data.list[1].main.temp,
            rain1: rainSum1,
            wind1: data.list[1].wind.speed.toFixed(1),
            clouds1: data.list[1].clouds.all,
            visibility1: (data.list[1].visibility/1000).toFixed(1),
            dirwind1: dirWindRus1,
            rainClassesName1: rainClassesDay1,
            tempClassesName1: temperatureClassesDay1,
            windClassesName1: windClassesDay1,

            temp2: data.list[2].main.temp,
            rain2: rainSum2,
            wind2: data.list[2].wind.speed.toFixed(1),
            clouds2: data.list[2].clouds.all,
            visibility2: (data.list[2].visibility/1000).toFixed(1),
            dirwind2: dirWindRus2,
            rainClassesName2: rainClassesDay2,
            tempClassesName2: temperatureClassesDay2,
            windClassesName2: windClassesDay2,

            temp3: data.list[3].main.temp,
            rain3: rainSum3,
            wind3: data.list[3].wind.speed.toFixed(1),
            clouds3: data.list[3].clouds.all,
            visibility3: (data.list[3].visibility/1000).toFixed(1),
            dirwind3: dirWindRus3,
            rainClassesName3: rainClassesDay3,
            tempClassesName3: temperatureClassesDay3,
            windClassesName3: windClassesDay3,

            temp4: data.list[4].main.temp,
            rain4: rainSum4,
            wind4: data.list[4].wind.speed.toFixed(1),
            clouds4: data.list[4].clouds.all,
            visibility4: (data.list[4].visibility/1000).toFixed(1),
            dirwind4: dirWindRus4,
            rainClassesName4: rainClassesDay4,
            tempClassesName4: temperatureClassesDay4,
            windClassesName4: windClassesDay4,

            temp5: data.list[5].main.temp,
            rain5: rainSum5,
            wind5: data.list[5].wind.speed.toFixed(1),
            clouds5: data.list[5].clouds.all,
            visibility5: (data.list[5].visibility/1000).toFixed(1),
            dirwind5: dirWindRus5,
            rainClassesName5: rainClassesDay5,
            tempClassesName5: temperatureClassesDay5,
            windClassesName5: windClassesDay5,

            temp6: data.list[6].main.temp,
            rain6: rainSum6,
            wind6: data.list[6].wind.speed.toFixed(1),
            clouds6: data.list[6].clouds.all,
            visibility6: (data.list[6].visibility/1000).toFixed(1),
            dirwind6: dirWindRus6,
            rainClassesName6: rainClassesDay6,
            tempClassesName6: temperatureClassesDay6,
            windClassesName6: windClassesDay6,

            temp7: data.list[7].main.temp,
            rain7: rainSum7,
            wind7: data.list[7].wind.speed.toFixed(1),
            clouds7: data.list[7].clouds.all,
            visibility7: (data.list[7].visibility/1000).toFixed(1),
            dirwind7: dirWindRus7,
            rainClassesName7: rainClassesDay7,
            tempClassesName7: temperatureClassesDay7,
            windClassesName7: windClassesDay7,

            temp8: data.list[8].main.temp,
            rain8: rainSum8,
            wind8: data.list[8].wind.speed.toFixed(1),
            clouds8: data.list[8].clouds.all,
            visibility8: (data.list[8].visibility/1000).toFixed(1),
            dirwind8: dirWindRus8,
            rainClassesName8: rainClassesDay8,
            tempClassesName8: temperatureClassesDay8,
            windClassesName8: windClassesDay8,

            temp9: data.list[9].main.temp,
            rain9: rainSum9,
            wind9: data.list[9].wind.speed.toFixed(1),
            clouds9: data.list[9].clouds.all,
            visibility9: (data.list[9].visibility/1000).toFixed(1),
            dirwind9: dirWindRus9,
            rainClassesName9: rainClassesDay9,
            tempClassesName9: temperatureClassesDay9,
            windClassesName9: windClassesDay9,

            temp10: data.list[10].main.temp,
            rain10: rainSum10,
            wind10: data.list[10].wind.speed.toFixed(1),
            clouds10: data.list[10].clouds.all,
            visibility10: (data.list[10].visibility/1000).toFixed(1),
            dirwind10: dirWindRus10,
            rainClassesName10: rainClassesDay10,
            tempClassesName10: temperatureClassesDay10,
            windClassesName10: windClassesDay10,

            temp11: data.list[11].main.temp,
            rain11: rainSum11,
            wind11: data.list[11].wind.speed.toFixed(1),
            clouds11: data.list[11].clouds.all,
            visibility11: (data.list[11].visibility/1000).toFixed(1),
            dirwind11: dirWindRus1,
            rainClassesName11: rainClassesDay11,
            tempClassesName11: temperatureClassesDay11,
            windClassesName11: windClassesDay11,

            temp12: data.list[12].main.temp,
            rain12: rainSum12,
            wind12: data.list[12].wind.speed.toFixed(1),
            clouds12: data.list[12].clouds.all,
            visibility12: (data.list[12].visibility/1000).toFixed(1),
            dirwind12: dirWindRus12,
            rainClassesName12: rainClassesDay12,
            tempClassesName12: temperatureClassesDay12,
            windClassesName12: windClassesDay12,

            temp13: data.list[13].main.temp,
            rain13: rainSum13,
            wind13: data.list[13].wind.speed.toFixed(1),
            clouds13: data.list[13].clouds.all,
            visibility13: (data.list[13].visibility/1000).toFixed(1),
            dirwind13: dirWindRus13,
            rainClassesName13: rainClassesDay13,
            tempClassesName13: temperatureClassesDay13,
            windClassesName13: windClassesDay13,

            temp14: data.list[14].main.temp,
            rain14: rainSum14,
            wind14: data.list[14].wind.speed.toFixed(1),
            clouds14: data.list[14].clouds.all,
            visibility14: (data.list[14].visibility/1000).toFixed(1),
            dirwind14: dirWindRus14,
            rainClassesName14: rainClassesDay14,
            tempClassesName14: temperatureClassesDay14,
            windClassesName14: windClassesDay14,

            temp15: data.list[15].main.temp,
            rain15: rainSum15,
            wind15: data.list[15].wind.speed.toFixed(1),
            clouds15: data.list[15].clouds.all,
            visibility15: (data.list[15].visibility/1000).toFixed(1),
            dirwind15: dirWindRus15,
            rainClassesName15: rainClassesDay15,
            tempClassesName15: temperatureClassesDay15,
            windClassesName15: windClassesDay15,

            temp16: data.list[16].main.temp,
            rain16: rainSum16,
            wind16: data.list[16].wind.speed.toFixed(1),
            clouds16: data.list[16].clouds.all,
            visibility16: (data.list[16].visibility/1000).toFixed(1),
            dirwind16: dirWindRus16,
            rainClassesName16: rainClassesDay16,
            tempClassesName16: temperatureClassesDay16,
            windClassesName16: windClassesDay16,

            temp17: data.list[17].main.temp,
            rain17: rainSum17,
            wind17: data.list[17].wind.speed.toFixed(1),
            clouds17: data.list[17].clouds.all,
            visibility17: (data.list[17].visibility/1000).toFixed(1),
            dirwind17: dirWindRus17,
            rainClassesName17: rainClassesDay17,
            tempClassesName17: temperatureClassesDay17,
            windClassesName17: windClassesDay17,

            temp18: data.list[18].main.temp,
            rain18: rainSum18,
            wind18: data.list[18].wind.speed.toFixed(1),
            clouds18: data.list[18].clouds.all,
            visibility18: (data.list[18].visibility/1000).toFixed(1),
            dirwind18: dirWindRus18,
            rainClassesName18: rainClassesDay18,
            tempClassesName18: temperatureClassesDay18,
            windClassesName18: windClassesDay18,

            temp19: data.list[19].main.temp,
            rain19: rainSum19,
            wind19: data.list[19].wind.speed.toFixed(1),
            clouds19: data.list[19].clouds.all,
            visibility19: (data.list[19].visibility/1000).toFixed(1),
            dirwind9: dirWindRus19,
            rainClassesName19: rainClassesDay19,
            tempClassesName19: temperatureClassesDay19,
            windClassesName19: windClassesDay19,

            temp20: data.list[20].main.temp,
            rain20: rainSum20,
            wind20: data.list[20].wind.speed.toFixed(1),
            clouds20: data.list[20].clouds.all,
            visibility20: (data.list[20].visibility/1000).toFixed(1),
            dirwind20: dirWindRus20,
            rainClassesName20: rainClassesDay20,
            tempClassesName20: temperatureClassesDay20,
            windClassesName20: windClassesDay20,

            temp21: data.list[21].main.temp,
            rain21: rainSum21,
            wind21: data.list[21].wind.speed.toFixed(1),
            clouds21: data.list[21].clouds.all,
            visibility21: (data.list[21].visibility/1000).toFixed(1),
            dirwind21: dirWindRus21,
            rainClassesName21: rainClassesDay21,
            tempClassesName21: temperatureClassesDay21,
            windClassesName21: windClassesDay21,

            temp22: data.list[22].main.temp,
            rain22: rainSum22,
            wind22: data.list[22].wind.speed.toFixed(1),
            clouds22: data.list[22].clouds.all,
            visibility22: (data.list[22].visibility/1000).toFixed(1),
            dirwind22: dirWindRus22,
            rainClassesName22: rainClassesDay22,
            tempClassesName22: temperatureClassesDay22,
            windClassesName22: windClassesDay22,

            temp23: data.list[23].main.temp,
            rain23: rainSum23,
            wind23: data.list[23].wind.speed.toFixed(1),
            clouds23: data.list[23].clouds.all,
            visibility23: (data.list[23].visibility/1000).toFixed(1),
            dirwind23: dirWindRus23,
            rainClassesName23: rainClassesDay23,
            tempClassesName23: temperatureClassesDay23,
            windClassesName23: windClassesDay23,

            temp24: data.list[24].main.temp,
            rain24: rainSum24,
            wind24: data.list[24].wind.speed.toFixed(1),
            clouds24: data.list[24].clouds.all,
            visibility24: (data.list[24].visibility/1000).toFixed(1),
            dirwind24: dirWindRus24,
            rainClassesName24: rainClassesDay24,
            tempClassesName24: temperatureClassesDay24,
            windClassesName24: windClassesDay24,

            temp25: data.list[25].main.temp,
            rain25: rainSum25,
            wind25: data.list[25].wind.speed.toFixed(1),
            clouds25: data.list[25].clouds.all,
            visibility25: (data.list[25].visibility/1000).toFixed(1),
            dirwind25: dirWindRus25,
            rainClassesName25: rainClassesDay25,
            tempClassesName25: temperatureClassesDay25,
            windClassesName25: windClassesDay25,

            temp26: data.list[26].main.temp,
            rain26: rainSum26,
            wind26: data.list[26].wind.speed.toFixed(1),
            clouds26: data.list[26].clouds.all,
            visibility26: (data.list[26].visibility/1000).toFixed(1),
            dirwind26: dirWindRus26,
            rainClassesName26: rainClassesDay26,
            tempClassesName26: temperatureClassesDay26,
            windClassesName26: windClassesDay26,

            temp27: data.list[27].main.temp,
            rain27: rainSum27,
            wind27: data.list[27].wind.speed.toFixed(1),
            clouds27: data.list[27].clouds.all,
            visibility27: (data.list[27].visibility/1000).toFixed(1),
            dirwind27: dirWindRus27,
            rainClassesName27: rainClassesDay27,
            tempClassesName27: temperatureClassesDay27,
            windClassesName27: windClassesDay27,

            temp28: data.list[28].main.temp,
            rain28: rainSum28,
            wind28: data.list[28].wind.speed.toFixed(1),
            clouds28: data.list[28].clouds.all,
            visibility28: (data.list[28].visibility/1000).toFixed(1),
            dirwind28: dirWindRus28,
            rainClassesName28: rainClassesDay28,
            tempClassesName28: temperatureClassesDay28,
            windClassesName28: windClassesDay28,

            temp29: data.list[29].main.temp,
            rain29: rainSum29,
            wind29: data.list[29].wind.speed.toFixed(1),
            clouds29: data.list[29].clouds.all,
            visibility29: (data.list[29].visibility/1000).toFixed(1),
            dirwind29: dirWindRus29,
            rainClassesName29: rainClassesDay29,
            tempClassesName29: temperatureClassesDay29,
            windClassesName29: windClassesDay29,

            temp30: data.list[30].main.temp,
            rain30: rainSum30,
            wind30: data.list[30].wind.speed.toFixed(1),
            clouds30: data.list[30].clouds.all,
            visibility30: (data.list[30].visibility/1000).toFixed(1),
            dirwind30: dirWindRus30,
            rainClassesName30: rainClassesDay30,
            tempClassesName30: temperatureClassesDay30,
            windClassesName30: windClassesDay30,

            temp31: data.list[31].main.temp,
            rain31: rainSum31,
            wind31: data.list[31].wind.speed.toFixed(1),
            clouds31: data.list[31].clouds.all,
            visibility31: (data.list[31].visibility/1000).toFixed(1),
            dirwind31: dirWindRus31,
            rainClassesName31: rainClassesDay31,
            tempClassesName31: temperatureClassesDay31,
            windClassesName31: windClassesDay31,

            temp32: data.list[32].main.temp,
            rain32: rainSum32,
            wind32: data.list[32].wind.speed.toFixed(1),
            clouds32: data.list[32].clouds.all,
            visibility32: (data.list[32].visibility/1000).toFixed(1),
            dirwind32: dirWindRus32,
            rainClassesName32: rainClassesDay32,
            tempClassesName32: temperatureClassesDay32,
            windClassesName32: windClassesDay32,

            temp33: data.list[33].main.temp,
            rain33: rainSum33,
            wind33: data.list[33].wind.speed.toFixed(1),
            clouds33: data.list[33].clouds.all,
            visibility33: (data.list[33].visibility/1000).toFixed(1),
            dirwind33: dirWindRus33,
            rainClassesName33: rainClassesDay33,
            tempClassesName33: temperatureClassesDay33,
            windClassesName33: windClassesDay33,

            temp34: data.list[34].main.temp,
            rain34: rainSum34,
            wind34: data.list[34].wind.speed.toFixed(1),
            clouds34: data.list[34].clouds.all,
            visibility34: (data.list[34].visibility/1000).toFixed(1),
            dirwind34: dirWindRus34,
            rainClassesName34: rainClassesDay34,
            tempClassesName34: temperatureClassesDay34,
            windClassesName34: windClassesDay34,

            temp35: data.list[35].main.temp,
            rain35: rainSum35,
            wind35: data.list[35].wind.speed.toFixed(1),
            clouds35: data.list[35].clouds.all,
            visibility35: (data.list[35].visibility/1000).toFixed(1),
            dirwind35: dirWindRus35,
            rainClassesName35: rainClassesDay35,
            tempClassesName35: temperatureClassesDay35,
            windClassesName35: windClassesDay35,

            temp36: data.list[36].main.temp,
            rain36: rainSum36,
            wind36: data.list[36].wind.speed.toFixed(1),
            clouds36: data.list[36].clouds.all,
            visibility36: (data.list[36].visibility/1000).toFixed(1),
            dirwind36: dirWindRus36,
            rainClassesName36: rainClassesDay36,
            tempClassesName36: temperatureClassesDay36,
            windClassesName36: windClassesDay36,

            temp37: data.list[37].main.temp,
            rain37: rainSum37,
            wind37: data.list[37].wind.speed.toFixed(1),
            clouds37: data.list[37].clouds.all,
            visibility37: (data.list[37].visibility/1000).toFixed(1),
            dirwind37: dirWindRus37,
            rainClassesName37: rainClassesDay37,
            tempClassesName37: temperatureClassesDay37,
            windClassesName37: windClassesDay37,

            temp38: data.list[38].main.temp,
            rain38: rainSum38,
            wind38: data.list[38].wind.speed.toFixed(1),
            clouds38: data.list[38].clouds.all,
            visibility38: (data.list[38].visibility/1000).toFixed(1),
            dirwind38: dirWindRus38,
            rainClassesName38: rainClassesDay38,
            tempClassesName38: temperatureClassesDay38,
            windClassesName38: windClassesDay38,

            temp39: data.list[39].main.temp,
            rain39: rainSum39,
            wind39: data.list[39].wind.speed.toFixed(1),
            clouds39: data.list[39].clouds.all,
            visibility39: (data.list[39].visibility/1000).toFixed(1),
            dirwind39: dirWindRus39,
            rainClassesName39: rainClassesDay39,
            tempClassesName39: temperatureClassesDay39,
            windClassesName39: windClassesDay39,


        });

        console.log(new Date);
    }

    componentWillMount() {
        console.log('Will Mount');
        this.gettingWeather();
    }

    componentDidMount() {
        setInterval(() => this.gettingWeather(), 180000);
    }

    render() {


        return (

            <Fragment>

                <div className="days container">
                    <div className="city">
                        <p>{this.props.cityName}</p>
                    </div>

                    <div className="indicators">
                        <p>Темп-ра, С</p>
                        <p>Осадки, мм</p>
                        <p>Облачность, %</p>
                        <p>Видимость, км</p>
                        <p>Ветер, м/с</p>
                    </div>

                    <div className="day">
                        <p className={this.state.tempClassesName0}>{this.state.temp0}</p>
                        <p className={this.state.rainClassesName0}>{this.state.rain0}</p>
                        <p className="clouds">{this.state.clouds0}</p>
                        <p className="visibility">{this.state.visibility0}</p>
                        <p className={this.state.windClassesName0}>{this.state.wind0}, {this.state.dirwind0}</p>
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
                    <div className="day">
                        <p className={this.state.tempClassesName21}>{this.state.temp21}</p>
                        <p className={this.state.rainClassesName21}>{this.state.rain21}</p>
                        <p className="clouds">{this.state.clouds21}</p>
                        <p className="visibility">{this.state.visibility21}</p>
                        <p className={this.state.windClassesName21}>{this.state.wind21}, {this.state.dirwind21}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName22}>{this.state.temp22}</p>
                        <p className={this.state.rainClassesName22}>{this.state.rain22}</p>
                        <p className="clouds">{this.state.clouds22}</p>
                        <p className="visibility">{this.state.visibility22}</p>
                        <p className={this.state.windClassesName22}>{this.state.wind22}, {this.state.dirwind22}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName23}>{this.state.temp23}</p>
                        <p className={this.state.rainClassesName23}>{this.state.rain23}</p>
                        <p className="clouds">{this.state.clouds23}</p>
                        <p className="visibility">{this.state.visibility23}</p>
                        <p className={this.state.windClassesName23}>{this.state.wind23}, {this.state.dirwind23}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName24}>{this.state.temp24}</p>
                        <p className={this.state.rainClassesName24}>{this.state.rain24}</p>
                        <p className="clouds">{this.state.clouds24}</p>
                        <p className="visibility">{this.state.visibility24}</p>
                        <p className={this.state.windClassesName24}>{this.state.wind24}, {this.state.dirwind24}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName25}>{this.state.temp25}</p>
                        <p className={this.state.rainClassesName25}>{this.state.rain25}</p>
                        <p className="clouds">{this.state.clouds25}</p>
                        <p className="visibility">{this.state.visibility25}</p>
                        <p className={this.state.windClassesName25}>{this.state.wind25}, {this.state.dirwind25}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName26}>{this.state.temp26}</p>
                        <p className={this.state.rainClassesName26}>{this.state.rain26}</p>
                        <p className="clouds">{this.state.clouds26}</p>
                        <p className="visibility">{this.state.visibility26}</p>
                        <p className={this.state.windClassesName26}>{this.state.wind26}, {this.state.dirwind26}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName27}>{this.state.temp27}</p>
                        <p className={this.state.rainClassesName27}>{this.state.rain27}</p>
                        <p className="clouds">{this.state.clouds27}</p>
                        <p className="visibility">{this.state.visibility27}</p>
                        <p className={this.state.windClassesName27}>{this.state.wind27}, {this.state.dirwind27}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName28}>{this.state.temp28}</p>
                        <p className={this.state.rainClassesName28}>{this.state.rain28}</p>
                        <p className="clouds">{this.state.clouds28}</p>
                        <p className="visibility">{this.state.visibility28}</p>
                        <p className={this.state.windClassesName28}>{this.state.wind28}, {this.state.dirwind28}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName29}>{this.state.temp29}</p>
                        <p className={this.state.rainClassesName29}>{this.state.rain29}</p>
                        <p className="clouds">{this.state.clouds29}</p>
                        <p className="visibility">{this.state.visibility29}</p>
                        <p className={this.state.windClassesName29}>{this.state.wind29}, {this.state.dirwind29}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName30}>{this.state.temp30}</p>
                        <p className={this.state.rainClassesName30}>{this.state.rain30}</p>
                        <p className="clouds">{this.state.clouds30}</p>
                        <p className="visibility">{this.state.visibility30}</p>
                        <p className={this.state.windClassesName30}>{this.state.wind30}, {this.state.dirwind30}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName31}>{this.state.temp31}</p>
                        <p className={this.state.rainClassesName31}>{this.state.rain31}</p>
                        <p className="clouds">{this.state.clouds31}</p>
                        <p className="visibility">{this.state.visibility31}</p>
                        <p className={this.state.windClassesName31}>{this.state.wind31}, {this.state.dirwind31}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName32}>{this.state.temp32}</p>
                        <p className={this.state.rainClassesName32}>{this.state.rain32}</p>
                        <p className="clouds">{this.state.clouds32}</p>
                        <p className="visibility">{this.state.visibility32}</p>
                        <p className={this.state.windClassesName32}>{this.state.wind32}, {this.state.dirwind32}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName33}>{this.state.temp33}</p>
                        <p className={this.state.rainClassesName33}>{this.state.rain33}</p>
                        <p className="clouds">{this.state.clouds33}</p>
                        <p className="visibility">{this.state.visibility33}</p>
                        <p className={this.state.windClassesName33}>{this.state.wind33}, {this.state.dirwind33}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName34}>{this.state.temp34}</p>
                        <p className={this.state.rainClassesName34}>{this.state.rain34}</p>
                        <p className="clouds">{this.state.clouds34}</p>
                        <p className="visibility">{this.state.visibility34}</p>
                        <p className={this.state.windClassesName34}>{this.state.wind34}, {this.state.dirwind34}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName35}>{this.state.temp35}</p>
                        <p className={this.state.rainClassesName35}>{this.state.rain35}</p>
                        <p className="clouds">{this.state.clouds35}</p>
                        <p className="visibility">{this.state.visibility35}</p>
                        <p className={this.state.windClassesName35}>{this.state.wind35}, {this.state.dirwind35}</p>
                    </div><div className="day">
                    <p className={this.state.tempClassesName36}>{this.state.temp36}</p>
                    <p className={this.state.rainClassesName36}>{this.state.rain36}</p>
                    <p className="clouds">{this.state.clouds36}</p>
                    <p className="visibility">{this.state.visibility36}</p>
                    <p className={this.state.windClassesName36}>{this.state.wind36}, {this.state.dirwind36}</p>
                </div>
                    <div className="day">
                        <p className={this.state.tempClassesName37}>{this.state.temp37}</p>
                        <p className={this.state.rainClassesName37}>{this.state.rain37}</p>
                        <p className="clouds">{this.state.clouds37}</p>
                        <p className="visibility">{this.state.visibility37}</p>
                        <p className={this.state.windClassesName37}>{this.state.wind37}, {this.state.dirwind37}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName38}>{this.state.temp38}</p>
                        <p className={this.state.rainClassesName38}>{this.state.rain38}</p>
                        <p className="clouds">{this.state.clouds38}</p>
                        <p className="visibility">{this.state.visibility38}</p>
                        <p className={this.state.windClassesName38}>{this.state.wind38}, {this.state.dirwind38}</p>
                    </div>
                    <div className="day">
                        <p className={this.state.tempClassesName39}>{this.state.temp39}</p>
                        <p className={this.state.rainClassesName39}>{this.state.rain39}</p>
                        <p className="clouds">{this.state.clouds39}</p>
                        <p className="visibility">{this.state.visibility39}</p>
                        <p className={this.state.windClassesName39}>{this.state.wind39}, {this.state.dirwind39}</p>
                    </div>


                </div>

            </Fragment>
        );
    }
}

export default City;