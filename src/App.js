import React from "react";
import Header from "./components/header";
import Heading from "./components/heading";
import City from "./components/city";

class App extends React.Component {

    state = {
        value: 'coconut' // почему-то нельзя тут двойный кавычки :)
    }

    changeValue = (selectedValue) => {
        this.setState({value: selectedValue});
    }


    handleSubmit = (e) => {
        alert('Выбери фрукт, пожалуйста: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (

            <div>
                <Header
                    selectedValue={this.state}
                    onChangeValue={this.changeValue}
                    onSubmit={this.handleSubmit}/>
                <Heading />

                <div className="africa">
                    <City owmCity="Dubai" />
                    <City owmCity="Algiers" />
                </div>

                <div className="europe">
                    <City owmCity="Stockholm" />
                    <City owmCity="Madrid" />
                </div>

                <div className="russia">
                    <City owmCity="Sochi" />
                    <City owmCity="Krasnodar" />
                    <City owmCity="Rostov-on-Don" />
                    <City owmCity="Saint Petersburg" />
                </div>

                <div className="others">
                    <City owmCity="Singapore" />
                    <City owmCity="San Paolo" />
                    <City owmCity="Phuket" />
                    <City owmCity="Singaraja" />
                </div>

            </div>
        );
    }
}

export default App;




