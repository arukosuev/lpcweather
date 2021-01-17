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
                <City owmCity="Sochi" />
                <City owmCity="New York" />
                <City owmCity="Krasnodar" />
                <City owmCity="Saint Petersburg" />
                <City owmCity="London" />



            </div>
        );
    }
}

export default App; // экспортируем приложение в index.js




