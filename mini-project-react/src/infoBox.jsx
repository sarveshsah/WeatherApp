import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}){
    const HOT_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=2048x2048&w=is&k=20&c=vs-wMhpIBhtgOfVrwVCGOIqto--JCLnYkunCXaq0F7c=";
    const COLD_URL = "https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600";
    const RAIN_URL = "https://images.unsplash.com/photo-1641673132450-e757bb9fa1c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171";
    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL :info.temp>15? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {info.city}
           {info.humidity > 50 ? <ThunderstormIcon/> :info.temp>15? <SunnyIcon/> :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {info.feelsLike}°C, {info.weather}, Humidity: {info.humidity}%, Temp Range: {info.tempMin}°C - {info.tempMax}°C, Current Temp: {info.temp}°C
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}