import React from "react";
import Header from "./components/header";
import City from "./components/city";

class App extends React.Component { //наследует

    render() {
        return (

            <div>
                <Header />
                <City owmCity="Vanavara" />
                <City owmCity="Severo-Yeniseyskiy" />
                <City owmCity="Krasnoyarsk" />
                <City owmCity="Kodinsk" />
            </div>
        );
    }
}

export default App; // экспортируем приложение в index.js




