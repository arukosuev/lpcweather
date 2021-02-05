import React from "react";
import Header from "./components/header";
import Heading from "./components/heading";
import City from "./components/city";
import {cities} from "./configs/citiesList";


class App extends React.Component {

    state = {
        value: "all",
        boguchanyClasses: "boguchany",
        yeniseyskClasses: "yeniseysk",
        centerClasses: "center",
        southClasses: "south",
        evenkiyaClasses: "evenkiya"
    }

    changeValue = (selectedValue) => {
        this.setState({value: selectedValue});
    }


    handleSubmit = (e) => {

        if (this.state.value === "boguchany") {
            this.setState( {
                boguchanyClasses: "boguchany",
                yeniseyskClasses: "yeniseysk invisible",
                centerClasses: "center invisible",
                southClasses: "south invisible",
                evenkiyaClasses: "evenkiya invisible",
            });
        } else if (this.state.value === "yeniseysk") {
            this.setState( {
                yeniseyskClasses: "yeniseysk",
                boguchanyClasses: "boguchany invisible",
                centerClasses: "center invisible",
                southClasses: "south invisible",
                evenkiyaClasses: "evenkiya invisible",
            });
        } else if (this.state.value === "center") {
            this.setState( {
                centerClasses: "center",
                boguchanyClasses: "boguchany invisible",
                yeniseyskClasses: "yeniseysk invisible",
                southClasses: "south invisible",
                evenkiyaClasses: "evenkiya invisible",
            });
        } else if (this.state.value === "south") {
            this.setState({
                southClasses: "south",
                boguchanyClasses: "boguchany invisible",
                centerClasses: "center invisible",
                yeniseyskClasses: "yeniseysk invisible",
                evenkiyaClasses: "evenkiya invisible",
            });
        } else if (this.state.value === "evenkiya") {
            this.setState( {
                southClasses: "south invisible",
                boguchanyClasses: "boguchany invisible",
                centerClasses: "center invisible",
                yeniseyskClasses: "yeniseysk invisible",
                evenkiyaClasses: "evenkiya",
            });
        } else if (this.state.value === "all") {
            this.setState( {
                southClasses: "south",
                boguchanyClasses: "boguchany",
                centerClasses: "center",
                yeniseyskClasses: "yeniseysk",
                evenkiyaClasses: "evenkiya",
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

                    <div className={this.state.boguchanyClasses}>
                        <City
                            cityName={cities[0].name}
                            lat={cities[0].lat}
                            lon={cities[0].lon}/>
                        <City
                            cityName={cities[1].name}
                            lat={cities[1].lat}
                            lon={cities[1].lon}/>
                        <City
                            cityName={cities[2].name}
                            lat={cities[2].lat}
                            lon={cities[2].lon}/>
                        <City
                            cityName={cities[3].name}
                            lat={cities[3].lat}
                            lon={cities[3].lon}/>

                    </div>

                    <div className={this.state.yeniseyskClasses}>
                        <City
                            cityName={cities[4].name}
                            lat={cities[4].lat}
                            lon={cities[4].lon}/>
                        <City
                            cityName={cities[5].name}
                            lat={cities[5].lat}
                            lon={cities[5].lon}/>
                        <City
                            cityName={cities[6].name}
                            lat={cities[6].lat}
                            lon={cities[6].lon}/>
                        <City
                            cityName={cities[7].name}
                            lat={cities[7].lat}
                            lon={cities[7].lon}/>
                        <City
                            cityName={cities[8].name}
                            lat={cities[8].lat}
                            lon={cities[8].lon}/>
                        <City
                            cityName={cities[9].name}
                            lat={cities[9].lat}
                            lon={cities[9].lon}/>
                        <City
                            cityName={cities[10].name}
                            lat={cities[10].lat}
                            lon={cities[10].lon}/>
                        <City
                            cityName={cities[11].name}
                            lat={cities[11].lat}
                            lon={cities[11].lon}/>
                        <City
                            cityName={cities[12].name}
                            lat={cities[12].lat}
                            lon={cities[12].lon}/>
                        <City
                            cityName={cities[13].name}
                            lat={cities[13].lat}
                            lon={cities[13].lon}/>
                        <City
                            cityName={cities[14].name}
                            lat={cities[14].lat}
                            lon={cities[14].lon}/>
                        <City
                            cityName={cities[15].name}
                            lat={cities[15].lat}
                            lon={cities[15].lon}/>
                        <City
                            cityName={cities[16].name}
                            lat={cities[16].lat}
                            lon={cities[16].lon}/>
                        <City
                            cityName={cities[17].name}
                            lat={cities[17].lat}
                            lon={cities[17].lon}/>
                        <City
                            cityName={cities[18].name}
                            lat={cities[18].lat}
                            lon={cities[18].lon}/>
                        <City
                            cityName={cities[19].name}
                            lat={cities[19].lat}
                            lon={cities[19].lon}/>
                        <City
                            cityName={cities[20].name}
                            lat={cities[20].lat}
                            lon={cities[20].lon}/>
                        <City
                            cityName={cities[21].name}
                            lat={cities[21].lat}
                            lon={cities[21].lon}/>

                    </div>

                    <div className={this.state.centerClasses}>
                        <City
                            cityName={cities[22].name}
                            lat={cities[22].lat}
                            lon={cities[22].lon}/>
                        <City
                            cityName={cities[23].name}
                            lat={cities[23].lat}
                            lon={cities[23].lon}/>
                    </div>

                    <div className={this.state.southClasses}>

                    </div>

                    <div className={this.state.evenkiyaClasses}>

                    </div>
                </div>


            </div>
        );
    }
}

export default App;




