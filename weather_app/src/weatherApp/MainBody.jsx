import React, { useEffect, useRef, useState } from 'react'
// import humidity_icon from '../assets/humidity.png'
// import wind_icon from '../assets/wind.png'
import snow_icon from '../assets/snow.png'
import drizzle_icon from '../assets/drizzle.png'
import cloud_icon from '../assets/cloud.png'
import clear_icon from '../assets/clear.png'
import rain_icon from '../assets/rain.png'
function MainBody() {
  const inputRef= useRef('');
  const[weatherData, setWeatherData] = useState(false);

  const allIcons={
    "01d":clear_icon,
    "01n":clear_icon,
    "02d":cloud_icon,
    "02n":cloud_icon,
    "03d":cloud_icon,
    "03n":cloud_icon,
    "04d":drizzle_icon,
    "04n":drizzle_icon,
    "09d":rain_icon,
    "09n":rain_icon,
    "10d":rain_icon,
    "10n":rain_icon,
    "13d":snow_icon,
    "13n":snow_icon,

    
  }

  const search = async(city)=>{
    if(city=== ""){
      alert('Enter City Name');
      return;
    }
    try{
      const apiKey = 'fdca44d3a3770f1b274a2213f8d6cab9'
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      const icon = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),  
        location:data.name,
        icon: icon,
      })
    }

    catch(error){

    }
  }

  useEffect(()=>{
    search("London");

  },[])
  return (
    <div>
        <div className='flex justify-center space-x-3 mt-20'>
            <input type="text" ref={inputRef} placeholder='Search city name' className="px-14 md:px-20 py-4 rounded-full text-md font-medium "  />

            <i className="fa-solid fa-search bg-white rounded-full p-6 font-4x" onClick={()=>search(inputRef.current.value)}></i>

        </div>    

        <div className='flex flex-col items-center space-y-4 mt-20'>
            <div className=''>
                <img src={weatherData.icon} alt="SunImage" className='w-40'/>
            </div>

            <div className=''>
                <h2 className='text-white font-semibold text-7xl leading-relaxed'>{weatherData.temperature}°c</h2>

                <p className='leading-snug text-white text-3xl font-semibold'>{weatherData.location}</p>
                
            </div>
        </div>

        <div className='flex justify-center space-x-20 mt-20 mb-10 md:space-x-96 '>

            <div className='flex flex-col'>
              <p className='text-white leading-snug font-semibold text-2xl'>{weatherData.humidity}</p>
              <p className='text-white leading-snug font-medium text-2xl'>Humidity</p>
            </div>
            
           
            <div>
              <p className='text-white leading-snug font-semibold text-2xl'>{weatherData.windSpeed} Km/h</p>
              <p className='text-white leading-snug font-medium text-2xl'>Wind Speed</p>
            </div>
            
        </div>

       
    </div>
  )
}

export default MainBody