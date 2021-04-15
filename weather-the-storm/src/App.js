import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
  
    latitude: null,
    longitude: null,
    osloTemp: null,
    osloName: null,
    osloFeelsLike: null,
    osloHigh: null,
    osloLow: null,
    nyTemp: null,
    nyName: null,
    nyFeelsLike: null,
    nyHigh: null,
    nyLow: null,
    toroTemp: null,
    toroName: null,
    toroFeelsLike: null,
    toroHigh: null,
    toroLow: null,

  }


  componentDidMount(){
    this.getPositions()
    .then((position) => {
      console.log(position.coords.latitude, position.coords.longitude)
      this.getOsloWeather()
      this.getNewYorkWeather()
      this.getTorontoWeather()
    })
  }
getPositions = () => {
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}
getOsloWeather = async () =>{
  const api = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&appid=509ff745d3ae42437e27f7adef449ba6'
  );
  const data = await api.json();
  console.log(data,"Oslo");
  this.setState(
    {
      osloTemp: Math.round(data.main.temp),
      osloName: data.name,
      osloFeelsLike: Math.round(data.main.feels_like),
      osloHigh: Math.round(data.main.temp_max),
      osloLow: Math.round(data.main.temp_min)
    }
  )
}
getNewYorkWeather = async () =>{
  const api = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=New+York&units=metric&appid=509ff745d3ae42437e27f7adef449ba6'
  );
  const data = await api.json();
  console.log(data,"NewYork");
  this.setState(
    {
      nyTemp: Math.round(data.main.temp),
      nyName: data.name,
      nyFeelsLike: Math.round(data.main.feels_like),
      nyHigh: Math.round(data.main.temp_max),
      nyLow: Math.round(data.main.temp_min)
    }
  )
}
getTorontoWeather = async () =>{
  const api = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=509ff745d3ae42437e27f7adef449ba6'
  );
  const data = await api.json();
  console.log(data, "Toronto");
  this.setState(
    {
      toroTemp: Math.round(data.main.temp),
      toroName: data.name,
      toroFeelsLike: Math.round(data.main.feels_like),
      toroHigh: Math.round(data.main.temp_max),
      toroLow: Math.round(data.main.temp_min)
    }
  )
}
  render(){
    return (
      <React.Fragment>    
        <h2 className="title">Weather the Storm</h2>
        <div className="wrapper">
    
        <div className="weatherCard" id="osloCard">
          <h2>{this.state.osloName}</h2>

          <p className="currentTemp">Now : <strong>{this.state.osloTemp}°</strong></p>
          <p className="realFeel">Feels Like : <strong>{this.state.osloFeelsLike}°</strong></p>
          <p className="high">High : <strong>{this.state.osloHigh}°</strong></p>
          <p className="low">Low : <strong>{this.state.osloLow}°</strong></p>
        </div>
        <div className="weatherCard" id="newYorkCard">
        <h2>{this.state.nyName}</h2>

          <p className="currentTemp">Now : <strong>{this.state.nyTemp}°</strong></p>
          <p className="realFeel">Feels Like : <strong>{this.state.nyFeelsLike}°</strong></p>
          <p className="high">High : <strong>{this.state.nyHigh}°</strong></p>
          <p className="low">Low : <strong>{this.state.nyLow}°</strong></p>
        </div>
        <div className="weatherCard" id="torontoCard">
        <h2>{this.state.toroName}</h2>

          <p className="currentTemp">Now : <strong>{this.state.toroTemp}°</strong></p>
          <p className="realFeel">Feels Like : <strong>{this.state.toroFeelsLike}°</strong></p>
          <p className="high">High : <strong>{this.state.toroHigh}°</strong></p>
          <p className="low">Low : <strong>{this.state.toroLow}°</strong></p>
        </div>          
        </div>

      </React.Fragment>
    )
  }
}

export default App;
