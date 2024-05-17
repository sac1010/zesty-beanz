import { useState } from 'react';
import './App.css';
import SearchWeather from './components/SearchWeather';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weatherData, setWeatherData] = useState()

  const handleData = (data)=>{
    setWeatherData(data)
  }
  
  return (
    <div className="flex items-center justify-center w-full md:h-screen">
        <div className='bg-[#9AC8CD] min-h-screen md:min-h-fit w-full md:w-8/12 md:px-16 md:rounded-3xl text-center flex flex-col justify-between'>
          <div className='my-7 text-3xl h-full font-bold text-[#1E0342]'>Weather</div>
          <SearchWeather onWeatherData={handleData}/>
          <WeatherInfo key={weatherData?.name} data={weatherData}/>
        </div>
    </div>
  );
}

export default App;
