import React from "react";
import Header from "./components/header";
import Krasnoyarsk from "./components/krasnoyarsk";
import Kodinsk from "./components/kodinsk";


class App extends React.Component { //наследует

    render() {
        return (

            <div>
                <Header />
                <Krasnoyarsk />
                <Kodinsk />
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