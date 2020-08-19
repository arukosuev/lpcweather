import React from "react";
import Header from "./components/header";
import Weather from "./components/weather";
import Form from "./components/form";

const API_KEY="94da30484bb9daa3c3aa4b131328d680";


class App extends React.Component { //наследует

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

    gettingWeather = async (e) => {  //async - страница не перезагружается
        e.preventDefault();
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Krasnoyarsk &appid=${API_KEY}&units=metric`); // шаблон строки указываем, а не прямой адрес, кавычки косые
        const data = await api_url.json();

        /*Создаем массив со всеми значениями осадков*/
        var array = [];
        function rainDay(start,end) {
            for (var i = start; i <= end; i++) {

                try {
                    array[i-start] = data.list[i].rain['3h'];
                } catch (e) {
                    array[i-start] = 0;
                }
            }
        }


        /*сумма элементов "осадков" массива */
        function summ() {
            var sum = 0;
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

    render() {
        return (

            <div>
                <Header />
                <Form weatherMethod={this.gettingWeather}/>
                <div>
                    <Weather
                        city={this.state.city}
                        //today
                        temp={this.state.temp}
                        rain={this.state.rain}
                        wind={this.state.wind}
                        dirwind={this.state.dirwind}
                        //tomorrow
                        temp2={this.state.temp2}
                        rain2={this.state.rain2}
                        wind2={this.state.wind2}
                        dirwind2={this.state.dirwind2}
                        //3rd day
                        temp3={this.state.temp3}
                        rain3={this.state.rain3}
                        wind3={this.state.wind3}
                        dirwind3={this.state.dirwind3}
                        //4th day
                        temp4={this.state.temp4}
                        rain4={this.state.rain4}
                        wind4={this.state.wind4}
                        dirwind4={this.state.dirwind4}
                        //5th day
                        temp5={this.state.temp5}
                        rain5={this.state.rain5}
                        wind5={this.state.wind5}
                        dirwind5={this.state.dirwind5}

                    />
                </div>
            </div>
        );
    }
}

export default App; // экспортируем приложение в index.js

/* ========ReadMe=============*/
/* Weather JSON links
http://api.openweathermap.org/data/2.5/forecast?q=Krasnoyarsk&appid=94da30484bb9daa3c3aa4b131328d680 - прогноз
http://api.openweathermap.org/data/2.5/weather?q=Krasnoyarsk&appid=94da30484bb9daa3c3aa4b131328d680 - текущая погодаgit
*/

/* Links on React learning (ItProger)
https://www.youtube.com/watch?v=Fxl_LU68Q5g
*/

/*Запуск скрипта в 00:01, будет брать данные по температуре на 15:00 (5 с циклом 8)*/