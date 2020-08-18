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
        //tomorrow
        temp1: undefined,
        rain1: undefined,
    }

    gettingWeather = async (e) => {  //async - страница не перезагружается
        e.preventDefault();
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Krasnoyarsk &appid=${API_KEY}&units=metric`); // шаблон строки указываем, а не прямой адрес, кавычки косые
        const data = await api_url.json();

        /*1й день*/
        /*Создаем массив со всеми значениями*/
        var array = [];
        for (let i = 0; i <= 8; i++) {
            try {
                array[i] = data.list[i].rain['3h'];
            } catch (e) {
                array[i] = 0;
            }
        }

        /*сумма элементов массива*/
        function summ() {
            var sum = 0;
            for(let i = 0; i < array.length; i++){
                sum += array[i];
            }
            return sum;
        }
        var rainSum1 = summ();
        rainSum1=rainSum1.toFixed(2); // сокращаем до 2х знаков

        /*2й день*/
        /*обернуть предыдущие 2 цикла в функции с параметрами для дальнешего использования в день 2-5*/

        this.setState({
            city: data.city.name,
            //today
            temp: data.list[5].main.temp,
            rain: rainSum1,
            //tomorrow
        });
    }

    render() {
        return (

            <div>
                <Header />
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                    city={this.state.city}
                    //today
                    temp={this.state.temp}
                    rain={this.state.rain}
                    //tomorrow
                    temp1={this.state.temp1}
                    rain1={this.state.rain1}
                />
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