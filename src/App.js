import React from "react";
import Header from "./components/header";
import Heading from "./components/heading";
import City from "./components/city";


const africaCities = ["Dubai", "Algiers", "Wau", "Rundu", "Cape Town", "Nairobi", "Manakara", "Pemba", "Mombasa", "Singa"];
const europeCities = ["Stockholm", "Madrid", "Berlin", "Paris", "Istanbul", "Riga", "London", "Luxembourg", "Milan", "Athens"];
const russiaCities = ["Sochi", "Krasnodar", "Rostov-on-Don", "Saint Petersburg", "Krasnoyarsk", "Voronezh", "Novosibirsk", "Vladivostok", "Norilsk", "Moscow"];
const othersCities = ["Singapore", "San Paolo", "Phuket", "Singaraja", "Canberra", "Tual", "Pekin", "Hong Kong", "Colombo", "Karachi"];


class App extends React.Component {

    state = {
        value: "all",
        africaClasses: "africa",
        europeClasses: "europe",
        russiaClasses: "russia",
        othersClasses: "others",
    }

    changeValue = (selectedValue) => {
        this.setState({value: selectedValue});
    }


    handleSubmit = (e) => {

        if (this.state.value === "africa") {
            this.setState( {
                africaClasses: "africa",
                europeClasses: "europe invisible",
                russiaClasses: "russia invisible",
                othersClasses: "others invisible",
            });
        } else if (this.state.value === "europe") {
            this.setState( {
                europeClasses: "europe",
                africaClasses: "africa invisible",
                russiaClasses: "russia invisible",
                othersClasses: "others invisible",
            });
        } else if (this.state.value === "russia") {
            this.setState( {
                russiaClasses: "russia",
                africaClasses: "africa invisible",
                europeClasses: "europe invisible",
                othersClasses: "others invisible",
            });
        } else if (this.state.value === "others") {
            this.setState( {
                othersClasses: "others",
                africaClasses: "africa invisible",
                russiaClasses: "russia invisible",
                europeClasses: "europe invisible",
            });
        } else if (this.state.value === "all") {
            this.setState( {
                othersClasses: "others",
                africaClasses: "africa",
                russiaClasses: "russia",
                europeClasses: "europe",
            });
        }

        e.preventDefault();
    }

    render() {
        return (

            <div className="app">
                <Header
                    selectedValue={this.state}
                    onChangeValue={this.changeValue}
                    onSubmit={this.handleSubmit}/>
                <div className="table">
                    <Heading />

                    <div className={this.state.africaClasses}>
                        <City owmCity={africaCities[0]} />
                        <City owmCity={africaCities[1]} />
                        <City owmCity={africaCities[2]} />
                        <City owmCity={africaCities[3]} />
                        <City owmCity={africaCities[4]} />
                        <City owmCity={africaCities[5]} />
                        <City owmCity={africaCities[6]} />
                        <City owmCity={africaCities[7]} />
                        <City owmCity={africaCities[8]} />
                        <City owmCity={africaCities[9]} />
                    </div>

                    <div className={this.state.europeClasses}>
                        <City owmCity={europeCities[0]} />
                        <City owmCity={europeCities[1]} />
                        <City owmCity={europeCities[2]} />
                        <City owmCity={europeCities[3]} />
                        <City owmCity={europeCities[4]} />
                        <City owmCity={europeCities[5]} />
                        <City owmCity={europeCities[6]} />
                        <City owmCity={europeCities[7]} />
                        <City owmCity={europeCities[8]} />
                        <City owmCity={europeCities[9]} />
                    </div>

                    <div className={this.state.russiaClasses}>
                        <City owmCity={russiaCities[0]} />
                        <City owmCity={russiaCities[1]} />
                        <City owmCity={russiaCities[2]} />
                        <City owmCity={russiaCities[3]} />
                        <City owmCity={russiaCities[4]} />
                        <City owmCity={russiaCities[5]} />
                        <City owmCity={russiaCities[6]} />
                        <City owmCity={russiaCities[7]} />
                        <City owmCity={russiaCities[8]} />
                        <City owmCity={russiaCities[9]} />
                    </div>

                    <div className={this.state.othersClasses}>
                        <City owmCity={othersCities[0]} />
                        <City owmCity={othersCities[1]} />
                        <City owmCity={othersCities[2]} />
                        <City owmCity={othersCities[3]} />
                        <City owmCity={othersCities[4]} />
                        <City owmCity={othersCities[5]} />
                        <City owmCity={othersCities[6]} />
                        <City owmCity={othersCities[7]} />
                        <City owmCity={othersCities[8]} />
                        <City owmCity={othersCities[9]} />
                    </div>
                </div>


            </div>
        );
    }
}

export default App;




