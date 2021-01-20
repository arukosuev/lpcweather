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
                <City owmCity="Shushenskoye" />
                <City owmCity="Yermakovskoye" />
                <City owmCity="Uzhur" />
                <City owmCity="Krasnoyarsk" />
                <City owmCity="Aban" />
                <City owmCity="Dzerzhinskoye" />

            </div>
        );
    }
}

export default App; // экспортируем приложение в index.js




