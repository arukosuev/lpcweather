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

                    <section className={this.state.evenkiyaClasses}>
                        <City
                            cityName={cities[41].name}
                            lat={cities[41].lat}
                            lon={cities[41].lon}/>
                        <City
                            cityName={cities[42].name}
                            lat={cities[42].lat}
                            lon={cities[42].lon}/>
                        <City
                            cityName={cities[43].name}
                            lat={cities[43].lat}
                            lon={cities[43].lon}/>
                        <City
                            cityName={cities[44].name}
                            lat={cities[44].lat}
                            lon={cities[44].lon}/>
                        <City
                            cityName={cities[45].name}
                            lat={cities[45].lat}
                            lon={cities[45].lon}/>
                        <City
                            cityName={cities[46].name}
                            lat={cities[46].lat}
                            lon={cities[46].lon}/>
                        <City
                            cityName={cities[47].name}
                            lat={cities[47].lat}
                            lon={cities[47].lon}/>
                    </section>

                    <section className={this.state.yeniseyskClasses}>
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

                    </section>

                    <section className={this.state.boguchanyClasses}>
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

                    </section>

                    <section className={this.state.centerClasses}>
                        <City
                            cityName={cities[22].name}
                            lat={cities[22].lat}
                            lon={cities[22].lon}/>
                        <City
                            cityName={cities[23].name}
                            lat={cities[23].lat}
                            lon={cities[23].lon}/>
                        <City
                            cityName={cities[24].name}
                            lat={cities[24].lat}
                            lon={cities[24].lon}/>
                        <City
                            cityName={cities[25].name}
                            lat={cities[25].lat}
                            lon={cities[25].lon}/>
                        <City
                            cityName={cities[26].name}
                            lat={cities[26].lat}
                            lon={cities[26].lon}/>
                        <City
                            cityName={cities[27].name}
                            lat={cities[27].lat}
                            lon={cities[27].lon}/>
                        <City
                            cityName={cities[28].name}
                            lat={cities[28].lat}
                            lon={cities[28].lon}/>
                        <City
                            cityName={cities[29].name}
                            lat={cities[29].lat}
                            lon={cities[29].lon}/>
                        <City
                            cityName={cities[30].name}
                            lat={cities[30].lat}
                            lon={cities[30].lon}/>
                        <City
                            cityName={cities[31].name}
                            lat={cities[31].lat}
                            lon={cities[31].lon}/>
                        <City
                            cityName={cities[32].name}
                            lat={cities[32].lat}
                            lon={cities[32].lon}/>
                        <City
                            cityName={cities[33].name}
                            lat={cities[33].lat}
                            lon={cities[33].lon}/>
                        <City
                            cityName={cities[34].name}
                            lat={cities[34].lat}
                            lon={cities[34].lon}/>
                        <City
                            cityName={cities[35].name}
                            lat={cities[35].lat}
                            lon={cities[35].lon}/>
                        <City
                            cityName={cities[36].name}
                            lat={cities[36].lat}
                            lon={cities[36].lon}/>
                        <City
                            cityName={cities[37].name}
                            lat={cities[37].lat}
                            lon={cities[37].lon}/>
                        <City
                            cityName={cities[38].name}
                            lat={cities[38].lat}
                            lon={cities[38].lon}/>
                        <City
                            cityName={cities[39].name}
                            lat={cities[39].lat}
                            lon={cities[39].lon}/>
                        <City
                            cityName={cities[40].name}
                            lat={cities[40].lat}
                            lon={cities[40].lon}/>

                    </section>



                    <section className={this.state.southClasses}>
                        <City
                            cityName={cities[48].name}
                            lat={cities[48].lat}
                            lon={cities[48].lon}/>
                        <City
                            cityName={cities[49].name}
                            lat={cities[49].lat}
                            lon={cities[49].lon}/>
                        <City
                            cityName={cities[50].name}
                            lat={cities[50].lat}
                            lon={cities[50].lon}/>
                        <City
                            cityName={cities[51].name}
                            lat={cities[51].lat}
                            lon={cities[51].lon}/>
                        <City
                            cityName={cities[52].name}
                            lat={cities[52].lat}
                            lon={cities[52].lon}/>
                        <City
                            cityName={cities[53].name}
                            lat={cities[53].lat}
                            lon={cities[53].lon}/>
                        <City
                            cityName={cities[54].name}
                            lat={cities[54].lat}
                            lon={cities[54].lon}/>
                        <City
                            cityName={cities[55].name}
                            lat={cities[55].lat}
                            lon={cities[55].lon}/>
                        <City
                            cityName={cities[56].name}
                            lat={cities[56].lat}
                            lon={cities[56].lon}/>
                        <City
                            cityName={cities[57].name}
                            lat={cities[57].lat}
                            lon={cities[57].lon}/>
                    </section>
                </div>


            </div>
        );
    }
}

export default App;




