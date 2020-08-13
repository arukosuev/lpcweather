import React from "react";
import Header from "./components/header";
import Weather from "./components/weather";
import Form from "./components/form";

const API_KEY="94da30484bb9daa3c3aa4b131328d680";


class App extends React.Component { //наследует

    state = {
        temp: undefined,
        city: undefined,
        rain: undefined

    }

    gettingWeather = async (e) => {  //async - страница не перезагружается
        e.preventDefault();
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Krasnoyarsk &appid=${API_KEY}&units=metric`); // шаблон строки указываем, а не прямой адрес, кавычки косые
        const data = await api_url.json();
        console.log(data);

        this.setState({
            city: data.city.name,
            temp: data.list[0].main.temp,
            rain: data.list[1].rain['3h'] + data.list[2].rain['3h'],
            // бывает что поля rain нет, так как дождя нет
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                    city={this.state.city}
                    temp={this.state.temp}
                    rain={this.state.rain}
                />
            </div>
        );
    }
}

export default App; // экспортируем приложение в index.js

/* Weather JSON links
http://api.openweathermap.org/data/2.5/forecast?q=Krasnoyarsk&appid=94da30484bb9daa3c3aa4b131328d680
http://api.openweathermap.org/data/2.5/weather?q=Krasnoyarsk&appid=94da30484bb9daa3c3aa4b131328d680
*/

/* Links on React learning (ItProger)
https://www.youtube.com/watch?v=Fxl_LU68Q5g
* */