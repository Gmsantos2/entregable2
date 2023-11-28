/* eslint-disable no-undef */
import { useState } from "react";

const WeatherDetail = ({ weather }) => {
    const [isCelsius, setIsCelsius] = useState(true);
    const handleCelsiusToFarenheit = () =>{
        setIsCelsius(!isCelsius)
       
    }
  
    console.log(weather)
    const CelciusToFarenheit = (tmpCelsius) => {
        const tempFaren = ((tmpCelsius * (9 / 5)) + 32).toFixed(0);
        return tempFaren;
    }

    return (
        <article className="text-center grid gap-8">
            <h3 className="texto text-3xl text-black font-first pb-2">{weather?.name}, {weather?.sys.country}</h3>
            <div className="text-black flex flex-col sm:flex-row gap-4 max-w-lg">
                <section className="bg-white/50 p-2 rounded-3xl grid grid-cols-3 grid-rows-4
                items-center h-80 ">
                    <h3 className="col-span-3 h-9 text-2xl">{weather.weather[0].description}</h3>
                    {isCelsius ?
                    (
                        <span className="col-span-2 row-span-3 text-6xl">{weather.main.temp.toFixed(0)}°C</span>
                    ) : 
                    (
                        <span className="col-span-2 row-span-3 text-6xl">{CelciusToFarenheit(weather.main.temp)}°F</span>  
                    )
                    }
                    <div className="w-[72px] h-[72px] row-span-3 ml-4">
                        <img
                        className="block "
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                    </div>
                </section>
                <section className=" grid grid-cols-3  justify-items-center
                bg-white/50 p-3 rounded-3xl sm:flex flex-col ">
                    <div className=" sm:my-auto sm:pb-10 p-2 border-r-2 border-black border-opacity-25 flex gap-1 sm:border-b-2 sm:border-r-0">
                        <div>
                            <img src="/wind.svg" alt="" />
                        </div>
                        <span className="font-bold">{weather.wind.speed} m/s</span>
                    </div>
                    <div className="my-auto p-2 flex gap-2 justify-start">
                        <div>
                            <img src="/humidity.svg" alt="" />
                        </div>
                        <span className="font-bold ">{weather.main.humidity}%</span>
                    </div>
                    <div className="my-auto sm:pt-10 p-2 border-l-2 border-black border-opacity-25 flex text-center gap-1 sm:border-t-2 sm:border-l-0">
                        <div>
                            <img src="/pressure.svg" alt="" />
                        </div>
                        <span className="font-bold">{weather.main.pressure}hPa</span>
                    </div>
                </section>
            </div>
            <button className="justify-self-center w-32 content-center flex items-center justify-center h-9 bg-white hover:bg-slate-100 text-blue-400 py-2 px-4 rounded-full" onClick={handleCelsiusToFarenheit}>
                {isCelsius ? (<span >Cambiar a F°</span>) : (
                    <span >Cambiar a C°</span>
                )}
            </button>
        </article>
    )
}
export default WeatherDetail