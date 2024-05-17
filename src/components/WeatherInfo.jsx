import React from "react";

const WeatherInfo = ({data}) => {
  return (
    <>
    {data ?<div className="w-full justify-around flex flex-col">
      <div className="font-semibold my-4 text-2xl">{data.name}</div>
      <div className="flex flex-col md:flex-row gap-12 w-full justify-center items-center">
        <div className="w-8/12 md:4/12 h-[200px] bg-white rounded-2xl p-4 flex flex-col justify-around weather-box">
          <div className="flex justify-around items-center">
            <img className="w-16 h-16" src="icons/temp.svg" alt="" />
            <div className="text-[40px]">{data?.main?.temp.toFixed(1)} °C </div>
          </div>
          <div className="text-2xl font-semibold">Temperature</div>
        </div>
        <div className="w-8/12 md:4/12 h-[200px] bg-white rounded-2xl p-4 flex flex-col justify-around weather-box">
          <div className="flex justify-around items-center">
            <img className="w-16 h-16" src="icons/humidity.svg" alt="" />
            <div className="text-[40px]">{data.main.humidity} % </div>
          </div>
          <div className="text-2xl font-semibold">Humidity</div>
        </div>
      </div>
        <div className=" rounded-3xl w-8/12 mx-auto my-8 p-5 bg-white font-semibold text-xl weather-box">
            {data?.weather[0]?.description}
        </div>
    </div> : <div className="h-[50vh] font-semibold text-gray-500"> Search a city to find the weather</div>}
    </>
  );
};

export default WeatherInfo;
