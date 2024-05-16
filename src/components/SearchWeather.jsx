import React, { useState } from "react";

const SearchWeather = ({ onWeatherData }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState();
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data);
      if (data.cod === 200) {
        setError("");
        onWeatherData(data);
      } else if (data.cod === "404") {
        onWeatherData("");
        setError(data.message);
      }
    } catch (e) {
      console.log(e);
      setError("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-center gap-4">
        <input
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleSearch();
            }
          }}
          onChange={(e) => setCity(e.target.value)}
          className="w-1/2 rounded-xl px-2 text-center"
          placeholder="Enter city name"
          type="text"
        />
        <button
          onClick={handleSearch}
          className="bg-[#0E46A3] text-white px-4 py-2 rounded-xl"
        >
          search
        </button>
      </div>
      {error && (
        <div className="text-red-600 text-sm font-semibold my-4">{error}</div>
      )}
    </div>
  );
};

export default SearchWeather;
