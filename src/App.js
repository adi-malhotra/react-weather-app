import React, { Component } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Weather from './components/Weather/Weather';
import './App.css';

const API_KEY = 'a6b890ff23d97ae170d0269eec754a99';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {},
      error: undefined
    }
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  getWeatherData(e){
    e.preventDefault();
    let This = this;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.place.value}&units=metric&&appid=${API_KEY}`)
    .then(res => {
      if(res.ok)
        return res.json();
      else
        throw new Error('City not found!');
    })
    .then(
      (result) => {
        This.setState({
          data:result,
          error: ''
        })
      }
    )
    .catch(
      (error) => {
        This.setState({
          data: {},
          error: error
        })
      }
    )
  }

  render() {
    let weather;
    if(this.state.error !== undefined)
      weather = <Weather weatherData = {this.state.data} error = {this.state.error}/>
    return (
      <div className="App">
        <Header header = "React JS Weather Project"/>
        <SearchBar getData = {this.getWeatherData}/>
        {weather}
      </div>
    );
  }
}

export default App;
