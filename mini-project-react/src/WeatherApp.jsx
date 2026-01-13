import { useState } from 'react';
import SearchBox from './SearchBox'
import InfoBox from './infoBox.jsx'
export default function WeatherApp(){
let [weatherInfo, setWeatherInfo] = useState({
        city: "New Delhi",
        feelsLike: 27.68,
        humidity: 10,
        temp: 29.41,
        tempMax: 29.41,
        tempMin: 29.41,
        weather: "clear sky"
});
 let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
 }
    return(
        <div style={{textAlign:"center"}}>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}