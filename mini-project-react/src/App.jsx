import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './SearchBox'
import InfoBox from './infoBox.jsx'
import WeatherApp from './WeatherApp.jsx'
function App() {
  return (
    <>
     <div>
      <WeatherApp/>
     </div>
    </>
  )
}

export default App
