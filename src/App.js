import React from "react";
import Header from "./components/header";
import Heading from "./components/heading";
import City from "./components/city";

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

        //alert('Выбери регион ' + this.state.value);
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

                <div className={this.state.africaClasses}>
                    <City owmCity="Dubai" />
                    <City owmCity="Algiers" />
                </div>

                <div className={this.state.europeClasses}>
                    <City owmCity="Stockholm" />
                    <City owmCity="Madrid" />
                </div>

                <div className={this.state.russiaClasses}>
                    <City owmCity="Sochi" />
                    <City owmCity="Krasnodar" />
                    <City owmCity="Rostov-on-Don" />
                    <City owmCity="Saint Petersburg" />
                </div>

                <div className={this.state.othersClasses}>
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




