import React, {Component} from 'react';
import './Weather.css';

export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            error: undefined
        }
    }

    componentWillReceiveProps(nextProps){        
        if(this.props !== nextProps){
            this.setState({
                data: nextProps.weatherData,
                error: nextProps.error
            })
        }
    }

    render() {
        if(JSON.stringify(this.state.data) !== "{}") {
            var min, max, humidity, name, desc, temp, icon;
            desc = this.state.data.weather[0].description;
            temp = this.state.data.main.temp;
            min = this.state.data.main.temp_min;
            max = this.state.data.main.temp_max;
            icon = `http://openweathermap.org/img/w/${this.state.data.weather[0].icon}.png`;
            humidity = this.state.data.main.humidity;
            name = this.state.data.name;
            return (
                <div className = "panel">
                    <div>
                        <div className = "place">{name}</div>
                        <div className = "temp">{temp}&#176; C</div>
                    </div>
                    <div className = "desc">
                        <img src = {icon} alt = "desc" />{desc}
                    </div>
                    <div className = "humidity">
                        Humidity: {humidity}
                    </div>
                    <div className = "minMax">
                        <div>Min: {min}&#176; C</div>
                        <div>Max: {max}&#176; C</div>
                    </div>
                </div>
            );
        } else if(this.state.error !== undefined) {
            return (
                <div className = "panel">
                    {this.state.error.message}
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}
