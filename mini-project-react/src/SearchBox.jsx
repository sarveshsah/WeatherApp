import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from 'react';
export default function searchBox ({updateInfo}){
    let [city,setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "52c243775684c5d696b2bc30eb53a441";
    let getWeatherInfo = async(city)=>{
        try{
      let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
      let jsonResponse = await response.json();
         let result = {
            city: city,
            temp:jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result)
        return result;
        }catch(err){
         throw err;
        }
    }

    let handleChange =(event) =>{
        setCity(event.target.value)
    }
    let handleSubmit = async(event) =>{
        try{
        event.preventDefault();
        setCity("");
       let newInfo = await getWeatherInfo(city);
       updateInfo(newInfo);
        }catch(err){
             setError(true);
        }
    }
    return (
        <div className='Searchbox'>
            <h2>Search for the weather</h2>
            <form onSubmit={handleSubmit}>
                   <TextField id="city" 
                   label="City Name" 
                   variant="outlined" 
                   required
                   value={city} 
                   onChange={handleChange}/>
                   <br />
                   <br />
                    <Button variant="contained" type='submit'>Search</Button>
                    {error && <p style={{color:'red'}}>Could not fetch the weather for the specified city. Please try again.</p>}
            </form>
        </div>
    )
}