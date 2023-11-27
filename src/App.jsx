import axios from "axios";
import { useEffect, useState } from "react";
import WeatherDetail from "./components/WeatherDetail";

function App() {
  //? https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=033b408bb37ec88099e6e0aacec1fa39
  const [weather, setWeather] = useState(null)

  const success = (pos) => {

    const { coords: { latitude, longitude } } = pos;

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=033b408bb37ec88099e6e0aacec1fa39&lang=es&units=metric`)
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err))

  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);

  }, [])



  return (
    <main className="flex justify-center items-center h-screen bg-cover
    bg-[url(bg1.jpg)] bg-center text-white p-2">
      {
        weather ? <WeatherDetail weather={weather} /> 
        : 
        <h3>Cargando....</h3>
      }
      
    </main>
  );
}

export default App
