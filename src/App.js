import React from "react";
import Header from "./components/header";
import Heading from "./components/heading";
import City from "./components/city";

class App extends React.Component { //наследует

    render() {
        return (

            <div>
                <Header />
                <Heading />
                <City owmCity="Vanavara" />
                <City owmCity="Saint Petersburg" />
                <City owmCity="Krasnoyarsk" />
                <City owmCity="Kodinsk" />
                <City owmCity="Krasnodar" />
                <City owmCity="Sochi" />
            </div>
        );
    }
}

export default App; // экспортируем приложение в index.js




