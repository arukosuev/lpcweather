import React from "react";
import Header from "./components/header";
import Heading from "./components/heading";
import City from "./components/city";

class App extends React.Component {

    render() {
        return (

            <div>
                <Header />
                <Heading />
                <City owmCity="Dubai" />
                <City owmCity="Algiers" />
                <City owmCity="Madrid" />
                <City owmCity="Sochi" />
                <City owmCity="Singapore" />
                <City owmCity="Stockholm" />
                <City owmCity="Krasnodar" />
                <City owmCity="San Paolo" />
                <City owmCity="Phuket" />
                <City owmCity="Singaraja" />

            </div>
        );
    }
}

export default App;




